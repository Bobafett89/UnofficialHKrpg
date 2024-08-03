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
            Hunger: new NumberField({required: true, initial: 0}),
            Cute: new NumberField({required: true, initial: 0}),
            Spook: new NumberField({required: true, initial: 0})
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
            Rank3: new BooleanField({required: true, initial: false})
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
            Cost: new NumberField({required: true, initial: 50}),
            Bulk: new NumberField({required: true, initial: 0})
        }
    }
}

export class WeaponDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Type: new StringField({required: true, initial: "None"}),
            Damage: new NumberField({required: true, initial: 0}),
            Range: new StringField({required: true, initial: "Melee"}),
            Hands: new StringField({required: true, initial: "1H"}),
            Quality: new NumberField({required: true, initial: 0}),
            Modifier: new StringField({required: true, initial: "None"})
        }
    }
}

export class ShieldDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Damage: new NumberField({required: true, initial: 2}),
            Hands: new StringField({required: true, initial: "1H"}),
            Quality: new NumberField({required: true, initial: 0}),
            BashQuality: new NumberField({required: true, initial: 0}),
            Modifier: new StringField({required: true, initial: "None"})
        }
    }
}

export class ArcaneFociDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Type: new StringField({required: true, initial: "None"}),
            Damage: new NumberField({required: true, initial: 0}),
            Range: new StringField({required: true, initial: "Melee"}),
            Hands: new StringField({required: true, initial: "1H"}),
            Quality: new NumberField({required: true, initial: 0}),
            Modifier: new StringField({required: true, initial: "None"})
        }
    }
}

export class ArmorDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Durability: new SchemaField({
                value: new NumberField({required: true, initial: 0}),
                max: new NumberField({required: true, initial: 0})
            }),
            DamageReduction: new NumberField({required: true, initial: 0}),
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
            Servings: new NumberField({required: true, initial: 0}),
            Belt: new BooleanField({required: true, initial: false})
        }
    }
}

export class PotionDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Rarity: new StringField({required: true, initial: "Common"}),
            Strain: new NumberField({required: true, initial: 0}),
            Belt: new BooleanField({required: true, initial: false})
        }
    }
}

export class FlaskDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Rarity: new StringField({required: true, initial: "Common"}),
            Rejuvenating: new StringField({required: true, initial: "No"}),
            Belt: new BooleanField({required: true, initial: false})
        }
    }
}

export class PoisonDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Rarity: new StringField({required: true, initial: "Common"}),
            Doses: new NumberField({required: true, initial: 0}),
            Belt: new BooleanField({required: true, initial: false})
        }
    }
}

export class TrapDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Rarity: new StringField({required: true, initial: "Common"}),
            Reusable: new StringField({required: true, initial: "No"}),
            Belt: new BooleanField({required: true, initial: false})
        }
    }
}

export class ToolDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Skills: new StringField({required: true, initial: "Common"}),
            Weapons: new StringField({required: true, initial: "No"}),
            Belt: new BooleanField({required: true, initial: false})
        }
    }
}

export class OtherDataModel extends EquipmentDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Belt: new BooleanField({required: true, boolean: true, initial: true})
        }
    }
}

export class CharmDataModel extends ItemDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            Notches: new NumberField({required: true, initial: 1}),
            Attuned: new BooleanField({required: true, initial: false})
        }
    }
}