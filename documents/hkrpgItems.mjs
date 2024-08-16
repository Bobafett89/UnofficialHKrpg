const {NumberField, SchemaField, BooleanField, StringField} = foundry.data.fields;

class ItemDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            Description: new StringField({required: true, initial: ""})
        }
    }
}

export class TraitDataModel extends ItemDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Hunger: new NumberField({required: true, initial: 0, step: 1}),
            Cute: new NumberField({required: true, initial: 0, step: 0.5}),
            Spook: new NumberField({required: true, initial: 0, step: 0.5})
        }
    }

    async _onCreate(data, options, userId) {
        super._onCreate(data, options, userId);
        let item = this.parent;
        if(item.effects.size === 0) {
            await item.createEmbeddedDocuments("ActiveEffect", [{name: "Slot effect", type: "SlotEffect", changes: [{key: "system.Special.Hunger.value", mode: 2, value: 0}, {key: "system.OtherAttr.Cute.value", mode: 2, value: 0}, {key: "system.OtherAttr.Spook.value", mode: 2, value: 0}]}]);
            await item.createEmbeddedDocuments("ActiveEffect", [{name: "Trait effect", type: "ActorEffect"}]);
        }
    }

    prepareBaseData() {
        super.prepareBaseData();

        if(this.parent.effects.size !== 0) {
            this.parent.effects.contents[0].changes[0].value = this.Hunger;
            this.parent.effects.contents[0].changes[1].value = this.Cute;
            this.parent.effects.contents[0].changes[2].value = this.Spook;
        }
    }
}

export class ProfDataModel extends ItemDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Rank: new NumberField({required: true, initial: 0}),
            Skill1: new SchemaField({
                name: new StringField({required: true, initial: ""}),
                mastery: new BooleanField({required: true, initial: false})
            }),
            Skill2: new SchemaField({
                name: new StringField({required: true, initial: ""}),
                mastery: new BooleanField({required: true, initial: false})
            }),
            Skill3: new SchemaField({
                name: new StringField({required: true, initial: ""}),
                mastery: new BooleanField({required: true, initial: false})
            }),
            Skill4: new SchemaField({
                name: new StringField({required: true, initial: ""}),
                mastery: new BooleanField({required: true, initial: false})
            })
        }
    }
}

export class PathDataModel extends ItemDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Rank1: new BooleanField({required: true, initial: true}),
            Rank2: new BooleanField({required: true, initial: false}),
            Rank3: new BooleanField({required: true, initial: false}),
            IsMartial: new BooleanField({required: true, initial: false}),
            IsMystic: new BooleanField({required: true, initial: false})
        }
    }

    prepareBaseData() {
        super.prepareBaseData();

        if(!this.Rank1) {
            this.Rank2 = false;
        }
        if(!this.Rank2) {
            this.Rank3 = false;
        }
    }
}

export class ArtDataModel extends ItemDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Prepared: new BooleanField({required: true, initial: false})
        }
    }
}

export class ArcanaDataModel extends ItemDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Attuned: new BooleanField({required: true, initial: false})
        }
    }
}

class EquipmentDataModel extends ItemDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Cost: new NumberField({required: true, initial: 50, step: 1}),
            Bulk: new NumberField({required: true, initial: 0})
        }
    }

    async _onCreate(data, options, userId) {
        super._onCreate(data, options, userId);
        let item = this.parent;
        if(item.effects.size === 0) {
            await item.createEmbeddedDocuments("ActiveEffect", [{name: "Slot effect", type: "SlotEffect", changes: [{key: "system.Other.Bulk", mode: "2", value: 0, priority: -1}]}]);
        }
    }

    prepareBaseData() {
        super.prepareBaseData();
        if(this.parent.effects.size !== 0) {
            this.parent.effects.contents[0].changes[0].value = this.Bulk;
        }
    }
}

export class WeaponDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Type: new StringField({required: true, initial: "None"}),
            Damage: new NumberField({required: true, initial: 0, step: 1}),
            Range: new StringField({required: true, initial: "Melee"}),
            Hands: new StringField({required: true, initial: "1H"}),
            Quality: new NumberField({required: true, initial: 0, step: 1}),
            Modifier: new StringField({required: true, initial: "None"})
        }
    }
}

export class ShieldDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Damage: new NumberField({required: true, initial: 2, step: 1}),
            Range: new StringField({required: true, initial: "Melee"}),
            Hands: new StringField({required: true, initial: "1H"}),
            Quality: new NumberField({required: true, initial: 0, step: 1}),
            BashQuality: new NumberField({required: true, initial: 0, step: 1}),
            Modifier: new StringField({required: true, initial: "None"})
        }
    }
}

export class ArcaneFociDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Type: new StringField({required: true, initial: "None"}),
            Damage: new NumberField({required: true, initial: 0, step: 1}),
            Range: new StringField({required: true, initial: "Melee"}),
            Hands: new StringField({required: true, initial: "1H"}),
            Quality: new NumberField({required: true, initial: 0, step: 1}),
            Modifier: new StringField({required: true, initial: "None"})
        }
    }
}

export class ArmorDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Durability: new SchemaField({
                value: new NumberField({required: true, initial: 0, step: 1}),
                max: new NumberField({required: true, initial: 0, step: 1})
            }),
            DamageReduction: new NumberField({required: true, initial: 0, step: 1}),
            Modifier: new StringField({required: true, initial: "None"})
        }
    }
}

export class FoodDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            BellyPerServing: new NumberField({required: true, initial: 0}),
            BulkPerServing: new NumberField({required: true, initial: 0}),
            CostPerServing: new NumberField({required: true, initial: 0}),
            Servings: new NumberField({required: true, initial: 0, step: 1}),
            Belt: new BooleanField({required: true, initial: false})
        }
    }

    prepareBaseData() {
        super.prepareBaseData();

        this.parent.system.Bulk = Math.floor(this.parent.system.BulkPerServing * this.parent.system.Servings);
        this.parent.system.Cost = this.parent.system.CostPerServing * this.parent.system.Servings;
    }
}

export class PotionDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Rarity: new StringField({required: true, initial: "Common"}),
            Strain: new NumberField({required: true, initial: 0, step: 1}),
            Belt: new BooleanField({required: true, initial: false})
        }
    }
}

export class FlaskDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Rarity: new StringField({required: true, initial: "Common"}),
            Rejuvenating: new BooleanField({required: true, initial: false}),
            Belt: new BooleanField({required: true, initial: false})
        }
    }
}

export class PoisonDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Rarity: new StringField({required: true, initial: "Common"}),
            Doses: new NumberField({required: true, initial: 0, step: 1}),
            Belt: new BooleanField({required: true, initial: false})
        }
    }
}

export class TrapDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Rarity: new StringField({required: true, initial: "Common"}),
            Reusable: new BooleanField({required: true, initial: false}),
            Belt: new BooleanField({required: true, initial: false})
        }
    }
}

export class ToolDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Skills: new StringField({required: true, initial: ""}),
            Weapons: new StringField({required: true, initial: ""}),
            Belt: new BooleanField({required: true, initial: false})
        }
    }
}

export class OtherDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Belt: new BooleanField({required: true, initial: false})
        }
    }

    async _onCreate(data, options, userId) {
        await super._onCreate(data, options, userId);
        let item = this.parent;
        if(item.effects.size === 1) {
            await item.createEmbeddedDocuments("ActiveEffect", [{name: "Other effect", type: "ActorEffect"}]);
        }
    }
}

export class BeltItemDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Belt: new BooleanField({required: true, initial: false})
        }
    }

    async _onCreate(data, options, userId) {
        await super._onCreate(data, options, userId);
        let item = this.parent;
        if(item.effects.size === 1) {
            await item.createEmbeddedDocuments("ActiveEffect", [{name: "Belt item effect", type: "ActorEffect"}]);
        }
    }

    async _onUpdate(changed, options, userId) {
        super._onUpdate(changed, options, userId);
        let item = this.parent;
        let effect = item.effects.contents[1];
        if(item.system.Belt) {
            effect.update({"disabled": false});
        } else {
            effect.update({"disabled": true});
        }
    }
}

export class CharmDataModel extends ItemDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Notches: new NumberField({required: true, initial: 1, step: 1}),
            Attuned: new BooleanField({required: true, initial: false})
        }
    }

    async _onCreate(data, options, userId) {
        super._onCreate(data, options, userId);
        let item = this.parent;
        if(item.effects.size === 0) {
            await item.createEmbeddedDocuments("ActiveEffect", [{name: "Charm effect", type: "ActorEffect"}]);
        }
        item.effects.contents[0].disabled = !item.system.Attuned;
    }

    async _onUpdate(changed, options, userId) {
        super._onUpdate(changed, options, userId);
        let item = this.parent;
        let effect = item.effects.contents[0];
        if(item.system.Attuned) {
            effect.update({"disabled": false});
        } else {
            effect.update({"disabled": true});
        }
    }
}

export class AttrBonusDataModel extends ItemDataModel {
    async _onCreate(data, options, userId) {
        super._onCreate(data, options, userId);
        let item = this.parent;
        if(item.effects.size === 0) {
            await item.createEmbeddedDocuments("ActiveEffect", [{name: "Attribute bonus effect", type: "ActorEffect"}]);
        }
    }
}