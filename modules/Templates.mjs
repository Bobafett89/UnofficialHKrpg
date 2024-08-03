export const preloadHandlebarsTemplates = async function () {
    return loadTemplates([
      "systems/hkrpg/templates/Eng/Actors/Parts/EquipmentTab.hbs",
      "systems/hkrpg/templates/Eng/Actors/Parts/HeaderPart.hbs",
      "systems/hkrpg/templates/Eng/Actors/Parts/SkillsTab.hbs"
    ]);
  };