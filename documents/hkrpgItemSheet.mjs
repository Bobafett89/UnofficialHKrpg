class hkItemSheet extends ItemSheet {
  activateListeners(html) {
    super.activateListeners(html);;
    html.on('click', '.hkOpenEffect', OpenEffect.bind(this));
  }
}

async function OpenEffect(html) {
  let effectID = html.currentTarget.dataset.effectid;
  let effect = this.item.effects.get(effectID);
  effect.sheet.render(true);
}

export class WeaponSheet extends hkItemSheet {

    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "systems/hkrpg/templates/EquipmentSheets/WeaponSheet.hbs",
        width: 573
      });
    }
}

export class ShieldSheet extends hkItemSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/hkrpg/templates/EquipmentSheets/ShieldSheet.hbs",
      width: 578
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
      template: "systems/hkrpg/templates/EquipmentSheets/FoodSheet.hbs",
      width: 626
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
      template: "systems/hkrpg/templates/EquipmentSheets/ToolSheet.hbs",
      width: 552
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

export class BeltItemSheet extends OtherSheet {}

export class AttrBonusSheet extends hkItemSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/hkrpg/templates/Effects/AttrBonusSheet.hbs"
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
      template: "systems/hkrpg/templates/SkillsSheets/ProfSheet.hbs",
      width: 716
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