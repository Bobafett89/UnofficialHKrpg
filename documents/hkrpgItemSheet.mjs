class hkItemSheet extends ItemSheet {
  
  activateListeners(html) {
    super.activateListeners(html);
    html.on('click', '.hkItemDelete', hkItemDeleteDialog.bind(this))
  }
}

async function hkItemDeleteDialog() {
  let name = this.item.name;
  let di = game.i18n.localize("Delete item");
  let d = new Dialog({
    title: `${di}: ${name}`,
    content: game.i18n.localize("Are you sure?"),
    buttons: {
      one: {
        label: game.i18n.localize("Yes"),
        callback: () => hkItemDelete(this.item)
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

export class WeaponSheet extends hkItemSheet {

    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "systems/hkrpg/templates/EquipmentSheets/WeaponSheet.hbs"
      });
    }
}

export class ShieldSheet extends hkItemSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/hkrpg/templates/EquipmentSheets/ShieldSheet.hbs"
    });
  }
}

export class ArcaneFociSheet extends hkItemSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/hkrpg/templates/EquipmentSheets/ArcaneFociSheet.hbs"
    });
  }
}

export class ArmorSheet extends hkItemSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/hkrpg/templates/EquipmentSheets/ArmorSheet.hbs"
    });
  }
}

export class FoodSheet extends hkItemSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/hkrpg/templates/EquipmentSheets/FoodSheet.hbs"
    });
  }
}

export class PotionSheet extends hkItemSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/hkrpg/templates/EquipmentSheets/PotionSheet.hbs"
    });
  }
}

export class FlaskSheet extends hkItemSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/hkrpg/templates/EquipmentSheets/FlaskSheet.hbs"
    });
  }
}

export class PoisonSheet extends hkItemSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/hkrpg/templates/EquipmentSheets/PoisonSheet.hbs"
    });
  }
}

export class TrapSheet extends hkItemSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/hkrpg/templates/EquipmentSheets/TrapSheet.hbs"
    });
  }
}

export class ToolSheet extends hkItemSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/hkrpg/templates/EquipmentSheets/ToolSheet.hbs"
    });
  }
}

export class OtherSheet extends hkItemSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/hkrpg/templates/EquipmentSheets/OtherSheet.hbs"
    });
  }
}

export class CharmSheet extends hkItemSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/hkrpg/templates/EquipmentSheets/CharmSheet.hbs"
    });
  }
}

export class TraitSheet extends hkItemSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/hkrpg/templates/SkillsSheets/TraitSheet.hbs"
    });
  }
}

export class ProfSheet extends hkItemSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/hkrpg/templates/SkillsSheets/ProfSheet.hbs"
    });
  }
}

export class PathSheet extends hkItemSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/hkrpg/templates/SkillsSheets/PathSheet.hbs"
    });
  }
}

export class ArtSheet extends hkItemSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/hkrpg/templates/SkillsSheets/ArtSheet.hbs"
    });
  }
}

export class ArcanaSheet extends hkItemSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/hkrpg/templates/SkillsSheets/ArcanaSheet.hbs"
    });
  }
}