export class BugSheet extends ActorSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: game.i18n.localize("hkPlayerSheet"),
      tabs: [{group: "hkGroup", navSelector: ".hkTabs", contentSelector: ".hkContent", initial: "Weapons" }]
    });
  }
  activateListeners(html) {
    super.activateListeners(html);
    html.on('click', '.rollable', hkRoll.bind(this));
    html.on('click', '.hkOpenSheet', hkOpen.bind(this));
    html.on('click', '.hkUse', hkUseDialog.bind(this));
    html.on('click', '.hkItemDelete', hkItemDelete.bind(this));
  }
}

async function hkRoll(html) {
  let ability = html.currentTarget.dataset.ability;
  let mod = html.currentTarget.dataset.mod;
  let roll = new Roll("(@abil)d6cs>=5", {abil: Number(ability)+Number(mod)});
  await roll.evaluate();
  roll.toMessage({speaker: ChatMessage.getSpeaker({ actor: this.actor })});
  console.log(roll);
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
  let d = new Dialog({
    title: `Use ${item.type}`,
    buttons: {
     one: {
      label: "Attack",
      callback: () => hkAttackDialog(item, might, grace, actor)
     }, 
     two: {
      label: "Parry",
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
  let d = new Dialog({
    title: "Roll attack",
    content: "<div style='display: grid; padding-bottom: 10px;'><div class='hkFlex'><span>Dedicated stamina</span><input id='DedStaAtt' type='text' value='1'/></div><div class='hkFlex' style='column-gap: 10px;'><span>Bonus</span><input id='BonAtt' type='text' value='0'/></div></div>",
    buttons: {
     one: {
      label: "Might",
      callback: () => hkAttackRoll(item, might, actor)
     }, 
     two: {
      label: "Grace",
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
  let roll = new Roll("(@abil + @qual + @stam + @bon)d6cs>=5", {abil: Number(ability), qual: Number(quality), stam: Number(stamina), bon: Number(bonus)});
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
  roll.toMessage({speaker: ChatMessage.getSpeaker({ actor: actor }), flavor: `Spent stamina: ${stamina} | Base damage: ${item.system.Damage} | Total Damage: ${damage}`});
}

async function hkParryDialog(Item, Might, Grace, Actor) {
  let actor = Actor;
  let item = Item;
  let might = Might;
  let grace = Grace;
  let d = new Dialog({
    title: "Parry",
    content: "<div style='display: grid; padding-bottom: 10px;'><div class='hkFlex'><span>Dedicated stamina</span><input id='DedStaPar' type='text' value='1'/></div><div class='hkFlex' style='column-gap: 10px;'><span>Bonus</span><input id='BonPar' type='text' value='0'/></div></div>",
    buttons: {
     one: {
      label: "Might",
      callback: () => hkParryRoll(item, might, actor)
     }, 
     two: {
      label: "Grace",
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
  let roll;
  if(item.type === "Shield") {
  roll = new Roll("(@abil + @qual + @stam + @bon)d6cs>=5", {abil: Number(ability), qual: Number(quality), stam: Number(stamina-1), bon: Number(bonus)});
  } else {
    roll = new Roll("(@abil + @stam * 2 + @bon)d6cs>=5", {abil: Number(ability), stam: Number(stamina), bon: Number(bonus)});
  }
  await roll.evaluate();
  roll.toMessage({speaker: ChatMessage.getSpeaker({ actor: actor }), flavor: `Spent stamina: ${stamina}`});
}

async function hkItemDelete(html) {
  let item = this.actor.items.get(html.currentTarget.dataset.itemid);
  item.delete();
}