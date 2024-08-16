import {BugSheet} from "./documents/hkrpgActorSheet.mjs"
import {ActorDataModel, BugCombatant} from "./documents/hkrpgActors.mjs"
import {ArcanaDataModel, ArcaneFociDataModel, ArmorDataModel, ArtDataModel, AttrBonusDataModel, BeltItemDataModel, CharmDataModel, FlaskDataModel, FoodDataModel, OtherDataModel, PathDataModel, PoisonDataModel, PotionDataModel, ProfDataModel, ShieldDataModel, ToolDataModel, TraitDataModel, TrapDataModel, WeaponDataModel} from "./documents/hkrpgItems.mjs";
import {ArcanaSheet, ArcaneFociSheet, ArmorSheet, ArtSheet, AttrBonusSheet, BeltItemSheet, CharmSheet, FlaskSheet, FoodSheet, OtherSheet, PathSheet, PoisonSheet, PotionSheet, ProfSheet, ShieldSheet, ToolSheet, TraitSheet, TrapSheet, WeaponSheet} from "./documents/hkrpgItemSheet.mjs";
import { preloadHandlebarsTemplates } from "./modules/Templates.mjs";
import { ActorEffect } from "./documents/hkrpgEffects.mjs";
import { ActorEffectSheet } from "./documents/hkrpgEffectSheet.mjs";

Hooks.once('init', function() {
    CONFIG.Actor.dataModels = {
        Bug: ActorDataModel
    };
    CONFIG.Item.dataModels = {
        Weapon: WeaponDataModel,
        Shield: ShieldDataModel,
        ArcaneFoci: ArcaneFociDataModel,
        Armor: ArmorDataModel,
        Food: FoodDataModel,
        Potion: PotionDataModel,
        Flask: FlaskDataModel,
        Poison: PoisonDataModel,
        Trap: TrapDataModel,
        Tool: ToolDataModel,
        Other: OtherDataModel,
        BeltItem: BeltItemDataModel,
        AttrBonus: AttrBonusDataModel,
        Charm: CharmDataModel,
        Trait: TraitDataModel,
        Proficiency: ProfDataModel,
        Path: PathDataModel,
        Arcana: ArcanaDataModel,
        Art: ArtDataModel
    };
    CONFIG.Combatant.documentClass = BugCombatant;
    CONFIG.ActiveEffect.dataModels = {
        ActorEffect: ActorEffect
    }
    CONFIG.ActiveEffect.legacyTransferral = false;

    Actors.registerSheet("BugSheet", BugSheet, {label: "Bug sheet", makeDefault: true });

    Items.registerSheet("WeaponSheet", WeaponSheet, {types: ["Weapon"], label: "Weapon sheet", makeDefault: true});
    Items.registerSheet("ShieldSheet", ShieldSheet, {types: ["Shield"], label: "Shield sheet", makeDefault: true});
    Items.registerSheet("ArcaneFociSheet", ArcaneFociSheet, {types: ["ArcaneFoci"], label: "Arcane Foci sheet", makeDefault: true});
    Items.registerSheet("ArmorSheet", ArmorSheet, {types: ["Armor"], label: "Armor sheet", makeDefault: true});
    Items.registerSheet("FoodSheet", FoodSheet, {types: ["Food"], label: "Food sheet", makeDefault: true});
    Items.registerSheet("PotionSheet", PotionSheet, {types: ["Potion"], label: "Potion sheet", makeDefault: true});
    Items.registerSheet("FlaskSheet", FlaskSheet, {types: ["Flask"], label: "Flask sheet", makeDefault: true});
    Items.registerSheet("PoisonSheet", PoisonSheet, {types: ["Poison"], label: "Poison sheet", makeDefault: true});
    Items.registerSheet("TrapSheet", TrapSheet, {types: ["Trap"], label: "Trap sheet", makeDefault: true});
    Items.registerSheet("ToolSheet", ToolSheet, {types: ["Tool"], label: "Tool sheet", makeDefault: true});
    Items.registerSheet("OtherSheet", OtherSheet, {types: ["Other"], label: "Other equipment sheet", makeDefault: true});
    Items.registerSheet("BeltItemSheet", BeltItemSheet, {types: ["BeltItem"], label: "Belt sheet", makeDefault: true});
    Items.registerSheet("AttrBonusSheet", AttrBonusSheet, {types: ["AttrBonus"], label: "Attribute bonus sheet", makeDefault: true});
    Items.registerSheet("CharmSheet", CharmSheet, {types: ["Charm"], label: "Charm sheet", makeDefault: true});
    Items.registerSheet("TraitSheet", TraitSheet, {types: ["Trait"], label: "Trait sheet", makeDefault: true});
    Items.registerSheet("ProfSheet", ProfSheet, {types: ["Proficiency"], label: "Proficiency sheet", makeDefault: true});
    Items.registerSheet("PathSheet", PathSheet, {types: ["Path"], label: "Path sheet", makeDefault: true});
    Items.registerSheet("ArcanaSheet", ArcanaSheet, {types: ["Arcana"], label: "Arcana sheet", makeDefault: true});
    Items.registerSheet("ArtSheet", ArtSheet, {types: ["Art"], label: "Art sheet", makeDefault: true});

    DocumentSheetConfig.registerSheet(ActiveEffect, "ActorEffectSheet", ActorEffectSheet, {types: ["ActorEffect"], label: "Actor effect sheet", makeDefault: true});

    Handlebars.registerHelper('EqualityCheck', function(value1, value2) { return value1 === value2});

    return preloadHandlebarsTemplates();
});