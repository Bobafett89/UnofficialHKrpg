export class BugSheet extends ActorSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/hkrpg/templates/Actors/PlayerSheet.hbs",
      tabs: [{group: "hkGroup", navSelector: ".hkTabs", contentSelector: ".hkContent", initial: "Weapons" }]
    });
  }
  activateListeners(html) {
    super.activateListeners(html);
    html.on('click', '.rollable', hkRoll.bind(this));
    html.on('click', '.hkOpenSheet', hkOpen.bind(this));
    html.on('click', '.hkUse', hkUseDialog.bind(this));
    html.on('click', '.hkItemDelete', hkItemDeleteDialog.bind(this));
    html.on('click', '.customRoll', customRollDialog.bind(this));
  }
}

async function customRollDialog(html) {
  let actor = this.actor;
  let dice = game.i18n.localize("Dice");
  let d = new Dialog({
    title: game.i18n.localize("Custom roll"),
    content: `<span class='hkFlex' style='align-items: center; margin-bottom: 5px;'>${dice}:<input type='text' id='custRoll'/></span>`,
    buttons: {
      one: {
        label: game.i18n.localize("Roll"),
        callback: () => customRoll(actor)
      }
    }
  });
  d.render(true);
}

async function customRoll(actor) {
  let attr = Number(document.getElementById("custRoll").value);
  if(attr < 1 || isNaN(attr)) {
    attr = 1;
  }
  let roll;
  if(Number.isInteger(attr)) {
    roll = new Roll(`${attr}d6cs>=5`);
  } else {
    attr = Math.floor(attr);
    roll = new Roll(`${attr}d6r1<5cs>=5`);
  }
  await roll.evaluate();
  roll.toMessage({speaker: ChatMessage.getSpeaker({ actor: actor })});
}

async function hkItemDeleteDialog(html) {
  let itemID = html.currentTarget.dataset.itemid;
  let item = this.actor.items.get(itemID);
  let name = item.name;
  let di = game.i18n.localize("Delete item");
  let d = new Dialog({
    title: `${di}: ${name}`,
    content: game.i18n.localize("Are you sure?"),
    buttons: {
      one: {
        label: game.i18n.localize("Yes"),
        callback: () => hkItemDelete(item)
      },
      two: {
        label: game.i18n.localize("No")
      }
    }
  });
  d.render(true);
}

async function hkItemDelete(item) {
  item.delete();
}

async function hkRoll(html) {
  let ability = html.currentTarget.dataset.ability;
  let mod = html.currentTarget.dataset.mod;
  let attr = Number(ability)+Number(mod);
  let formula = ``;
  if(Number.isInteger(attr)) {
    formula = `${attr}d6cs>=5`;
  } else {
    attr = Math.floor(attr);
    formula = `${attr}d6r1<5cs>=5`;
  }
  let roll = new Roll(formula);
  await roll.evaluate();
  roll.toMessage({speaker: ChatMessage.getSpeaker({ actor: this.actor })});
}

async function hkOpen(html) {
  let itemID = html.currentTarget.dataset.itemid;
  let item = this.actor.items.get(itemID);
  item.sheet.render(true);
}

async function hkUseDialog(html) {
  let actor = this.actor;
  let item = actor.items.get(html.currentTarget.dataset.itemid);
  let m = actor.system.Attr.Might;
  let might = m.value + m.temporary;
  let g = actor.system.Attr.Grace;
  let grace = g.value + g.temporary;
  let u = game.i18n.localize("Use");
  let d = new Dialog({
    title: `${u} ${item.name}`,
    buttons: {
     one: {
      label: game.i18n.localize("Attack"),
      callback: () => hkAttackDialog(item, might, grace, actor)
     }, 
     two: {
      label: game.i18n.localize("Parry"),
      callback: () => hkParryDialog(item, might, grace, actor)
     }, 
    }
   });
   d.render(true);
}

async function hkAttackDialog(Item, Might, Grace, Actor) {
  let actor = Actor;
  let item = Item;
  let might = Might;
  let grace = Grace;
  let ds = game.i18n.localize("Dedicated stamina");
  let b = game.i18n.localize("Bonus");
  let d = new Dialog({
    title: game.i18n.localize("Attack roll"),
    content: `<div style='display: grid; padding-bottom: 10px;'><div class='hkFlex'><span>${ds}</span><input id='DedStaAtt' type='text' value='1'/></div><div class='hkFlex' style='column-gap: 10px;'><span>${b}</span><input id='BonAtt' type='text' value='0'/></div></div>`,
    buttons: {
     one: {
      label: game.i18n.localize("Might"),
      callback: () => hkAttackRoll(item, might, actor)
     }, 
     two: {
      label: game.i18n.localize("Grace"),
      callback: () => hkAttackRoll(item, grace, actor)
     }, 
    }
   });
   d.render(true);
}

async function hkAttackRoll(item, ability, actor)
{
  let stamina = Math.floor(Number(document.getElementById("DedStaAtt").value));
  let bonus = Math.floor(Number(document.getElementById("BonAtt").value));
  let quality = 0;
  if(item.type == "Shield") {
    quality = item.system.BashQuality;
  }
  else {
    quality = item.system.Quality;
  }
  if(stamina < 1 || isNaN(stamina)) {
    stamina = 1;
  }
  if(isNaN(bonus)) {
    bonus = 0;
  }
  let formula;
  if(Number.isInteger(ability)) {
    formula = "d6cs>=5";
  } else {
    ability = Math.floor(ability);
    formula = "d6r1<5cs>=5"
  }
  let roll = new Roll(`(${ability} + ${quality} + ${stamina} + ${bonus})${formula}`);
  await roll.evaluate();
  const suc = roll.total;
  let damage = 0;
  if(suc > 0) {
    damage = item.system.Damage;
    if(suc > 1 && item.type !== "Shield") {
      let cap = Math.max(item.system.Damage, stamina);
      damage += Math.min((suc-1), cap);
    }
  }
  let s = game.i18n.localize("Spent stamina");
  let bd = game.i18n.localize("Base damage");
  let td = game.i18n.localize("Total damage");
  roll.toMessage({speaker: ChatMessage.getSpeaker({ actor: actor }), flavor: `${s}: ${stamina} | ${bd}: ${item.system.Damage} | ${td}: ${damage}`});
}

async function hkParryDialog(Item, Might, Grace, Actor) {
  let actor = Actor;
  let item = Item;
  let might = Might;
  let grace = Grace;
  let ds = game.i18n.localize("Dedicated stamina");
  let b = game.i18n.localize("Bonus");
  let d = new Dialog({
    title: game.i18n.localize("Parry roll"),
    content: `<div style='display: grid; padding-bottom: 10px;'><div class='hkFlex'><span>${ds}</span><input id='DedStaPar' type='text' value='1'/></div><div class='hkFlex' style='column-gap: 10px;'><span>${b}</span><input id='BonPar' type='text' value='0'/></div></div>`,
    buttons: {
     one: {
      label: game.i18n.localize("Might"),
      callback: () => hkParryRoll(item, might, actor)
     }, 
     two: {
      label: game.i18n.localize("Grace"),
      callback: () => hkParryRoll(item, grace, actor)
     }, 
    }
   });
   d.render(true);
}

async function hkParryRoll(item, ability, actor)
{
  let stamina = Math.floor(Number(document.getElementById("DedStaPar").value));
  let bonus = Math.floor(Number(document.getElementById("BonPar").value));
  let quality = item.system.Quality;
  if(item.type !== "Shield") {
    stamina = Math.min(stamina, quality);
  }
  if(stamina < 1 || isNaN(stamina)) {
    stamina = 1;
  }
  if(isNaN(bonus)) {
    bonus = 0;
  }
  let formula;
  if(Number.isInteger(ability)) {
    formula = "d6cs>=5";
  } else {
    ability = Math.floor(ability);
    formula = "d6r1<5cs>=5"
  }
  let roll;
  if(item.type === "Shield") {
    roll = new Roll(`(${ability} + ${quality} + (${stamina}-1) + ${bonus})${formula}`);
  } else {
    roll = new Roll(`(${ability} + (${stamina} - 1) * 2 + ${bonus})${formula}`);
  }
  await roll.evaluate();
  let s = game.i18n.localize("Spent stamina");
  roll.toMessage({speaker: ChatMessage.getSpeaker({ actor: actor }), flavor: `${s}: ${stamina}`});
}