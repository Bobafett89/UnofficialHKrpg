export const preloadHandlebarsTemplates = async function () {
    return loadTemplates([
      "systems/hkrpg/templates/Actors/Parts/EquipmentTab.hbs",
      "systems/hkrpg/templates/Actors/Parts/HeaderPart.hbs",
      "systems/hkrpg/templates/Actors/Parts/SkillsTab.hbs",
      "systems/hkrpg/templates/Actors/Parts/SpecialTab.hbs"
    ]);
  };