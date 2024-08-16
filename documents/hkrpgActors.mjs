const {NumberField, SchemaField, BooleanField, StringField} = foundry.data.fields;

export class ActorDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            Pools: new SchemaField({
                Hearts: new SchemaField({
                    value: new NumberField({required: true, initial: 7, step: 1}),
                    temporary: new NumberField({required: true, initial: 0, step: 1}),
                    maxbase: new NumberField({required: true, initial: 7, step: 1}),
                    max: new NumberField({required: true, initial: 7, step: 1}),
                }),
                Soul: new SchemaField({
                    value: new NumberField({required: true, initial: 3, step: 1}),
                    temporary: new NumberField({required: true, initial: 0, step: 1}),
                    maxbase: new NumberField({required: true, initial: 3, step: 1}),
                    max: new NumberField({required: true, initial: 3, step: 1})
                }),
                Stamina: new SchemaField({
                    value: new NumberField({required: true, initial: 3, step: 1}),
                    temporary: new NumberField({required: true, initial: 0, step: 1}),
                    maxbase: new NumberField({required: true, initial: 3, step: 1}),
                    max: new NumberField({required: true, initial: 3, step: 1})
                }),
                CustomPool1: new SchemaField({
                    name: new StringField({required: true, initial: ""}),
                    value: new NumberField({required: true, initial: 0, step: 1}),
                    temporary: new NumberField({required: true, initial: 0, step: 1}),
                    maxbase: new NumberField({required: true, initial: 0, step: 1}),
                    max: new NumberField({required: true, initial: 0, step: 1})
                }),
                CustomPool2: new SchemaField({
                    name: new StringField({required: true, initial: ""}),
                    value: new NumberField({required: true, initial: 0, step: 1}),
                    temporary: new NumberField({required: true, initial: 0, step: 1}),
                    maxbase: new NumberField({required: true, initial: 0, step: 1}),
                    max: new NumberField({required: true, initial: 0, step: 1})
                }),
                CustomPool3: new SchemaField({
                    name: new StringField({required: true, initial: ""}),
                    value: new NumberField({required: true, initial: 0, step: 1}),
                    temporary: new NumberField({required: true, initial: 0, step: 1}),
                    maxbase: new NumberField({required: true, initial: 7, step: 1}),
                    max: new NumberField({required: true, initial: 0, step: 1})
                })
            }),
            Attr: new SchemaField({
                Might: new SchemaField({
                    base: new NumberField({required: true, initial: 3, step: 0.5}),
                    value: new NumberField({required: true, initial: 3, step: 0.5}),
                    temporary: new NumberField({required: true, initial: 0, step: 0.5})
                }),
                Grace: new SchemaField({
                    base: new NumberField({required: true, initial: 3, step: 0.5}),
                    value: new NumberField({required: true, initial: 3, step: 0.5}),
                    temporary: new NumberField({required: true, initial: 0, step: 0.5})
                }),
                Insight: new SchemaField({
                    base: new NumberField({required: true, initial: 3, step: 0.5}),
                    value: new NumberField({required: true, initial: 3, step: 0.5}),
                    temporary: new NumberField({required: true, initial: 0, step: 0.5})
                }),
                Shell: new SchemaField({
                    base: new NumberField({required: true, initial: 3, step: 0.5}),
                    value: new NumberField({required: true, initial: 3, step: 0.5}),
                    temporary: new NumberField({required: true, initial: 0, step: 0.5})
                }),
                Footwork: new SchemaField({
                    base: new NumberField({required: true, initial: 2, step: 1}),
                    value: new NumberField({required: true, initial: 2, step: 1})
                }),
                Load: new SchemaField({
                    base: new NumberField({required: true, initial: 3, step: 1}),
                    value: new NumberField({required: true, initial: 3, step: 1})
                }),
                BeltSize: new SchemaField({
                    base: new NumberField({required: true, initial: 3, step: 1}),
                    value: new NumberField({required: true, initial: 3, step: 1})
                }),
                TechSlots: new SchemaField({
                    base: new NumberField({required: true, initial: 3, step: 1}),
                    value: new NumberField({required: true, initial: 3, step: 1})
                })
            }),
            OtherAttr: new SchemaField({
                Size: new NumberField({required: true, initial: 2, step: 1}),
                Cute: new SchemaField({
                    base: new NumberField({required: true, initial: 2, step: 0.5}),
                    value: new NumberField({required: true, initial: 2, step: 0.5})
                }),
                Spook: new SchemaField({
                    base: new NumberField({required: true, initial: 2, step: 0.5}),
                    value: new NumberField({required: true, initial: 2, step: 0.5})
                }),
                Speed: new SchemaField({
                    value: new NumberField({required: true, initial: 6, step: 1}),
                    maxbase: new NumberField({required: true, initial: 6, step: 1}),
                    max: new NumberField({required: true, initial: 6, step: 1})
                }),
                Belly: new SchemaField({
                    value: new NumberField({required: true, initial: 10, step: 1}),
                    maxbase: new NumberField({required: true, initial: 10, step: 1}),
                    max: new NumberField({required: true, initial: 10, step: 1}),
                    min: new NumberField({required: true, initial: 10, step: 1})
                }),
                Notches: new SchemaField({
                    base: new NumberField({required: true, initial: 3, step: 1}),
                    value: new NumberField({required: true, initial: 3, step: 1})
                })
            }),
            Other: new SchemaField({
                Milestone: new SchemaField({
                    main: new NumberField({required: true, initial: 0}),
                    minorAdv: new NumberField({required: true, initial: 0})
                }),
                PlayerName: new StringField({required: true, initial: ""}),
                Geo: new NumberField({required: true, initial: 0}),
                Bulk: new NumberField({required: true, initial: 0}),
                Bio: new StringField({required: true, initial: ""}),
                Edit: new BooleanField({required: true, initial: false}),
            }),
            Special: new SchemaField({
                Hunger: new SchemaField({
                    start: new NumberField({required: true, initial: 4}),
                    value: new NumberField({required: true, initial: 4}),
                    max: new NumberField({required: true, initial: 20})
                }),
                InitiativeBonus: new SchemaField({
                    base: new NumberField({required: true, initial: 0, step: 0.5}),
                    value: new NumberField({required: true, initial: 0, step: 0.5})
                }),
                PathRanks: new SchemaField({
                    MysticRanks: new NumberField({required: true, initial: 0}),
                    MartialRanks: new NumberField({required: true, initial: 0}),
                    TotalRanks: new NumberField({required: true, initial: 0})
                })
            })
        };
    }

    prepareBaseData() {
        super.prepareBaseData();

        this.updateValues();
    }

    prepareDerivedData() {
        super.prepareDerivedData();

        this.Attr.Load.base = Math.floor(this.Attr.Might.value);
        this.Attr.BeltSize.base = Math.floor(this.Attr.Shell.value);
        this.Attr.TechSlots.base = Math.floor(this.Attr.Insight.value);
        this.Attr.Footwork.base = Math.ceil(this.Attr.Grace.value/2);
        this.OtherAttr.Belly.maxbase = Math.clamp(this.Special.Hunger.value, this.OtherAttr.Belly.min, this.Special.Hunger.max);
        this.updateValues();
        this.parent.applyActiveEffects();

        this.Pools.Hearts.value = Math.clamp(this.Pools.Hearts.value, 0, this.Pools.Hearts.max);
        this.Pools.Soul.value = Math.clamp(this.Pools.Soul.value, 0, this.Pools.Soul.max);
        this.Pools.Stamina.value = Math.clamp(this.Pools.Stamina.value, 0, this.Pools.Stamina.max);
        this.Pools.CustomPool1.value = Math.clamp(this.Pools.CustomPool1.value, 0, this.Pools.CustomPool1.max);
        this.Pools.CustomPool2.value = Math.clamp(this.Pools.CustomPool2.value, 0, this.Pools.CustomPool2.max);
        this.Pools.CustomPool3.value = Math.clamp(this.Pools.CustomPool3.value, 0, this.Pools.CustomPool3.max);
        this.OtherAttr.Speed.value = Math.clamp(this.OtherAttr.Speed.value, 0, this.OtherAttr.Speed.max);
    }

    updateValues() {
        this.countRanks();

        this.Pools.Hearts.max = this.Pools.Hearts.maxbase;
        this.Pools.Soul.max = this.Pools.Soul.maxbase + this.Special.PathRanks.MysticRanks;
        this.Pools.Stamina.max = this.Pools.Stamina.maxbase + this.Special.PathRanks.MartialRanks;
        this.Pools.CustomPool1.max = this.Pools.CustomPool1.maxbase;
        this.Pools.CustomPool2.max = this.Pools.CustomPool2.maxbase;
        this.Pools.CustomPool3.max = this.Pools.CustomPool3.maxbase;

        this.Attr.Might.value = this.Attr.Might.base;
        this.Attr.Grace.value = this.Attr.Grace.base;
        this.Attr.Insight.value = this.Attr.Insight.base;
        this.Attr.Shell.value = this.Attr.Shell.base;
        this.Attr.Load.value = this.Attr.Load.base;
        this.Attr.Footwork.value = this.Attr.Footwork.base;
        this.Attr.TechSlots.value = this.Attr.TechSlots.base;
        this.Attr.BeltSize.value = this.Attr.BeltSize.base;

        this.OtherAttr.Cute.value = this.OtherAttr.Cute.base;
        this.OtherAttr.Spook.value = this.OtherAttr.Spook.base;
        this.OtherAttr.Speed.max = this.OtherAttr.Speed.maxbase;
        this.OtherAttr.Belly.max = this.OtherAttr.Belly.maxbase;
        this.OtherAttr.Notches.value = this.OtherAttr.Notches.base + this.Special.PathRanks.TotalRanks;

        this.Other.Bulk = 0;

        this.Special.InitiativeBonus.value = this.Special.InitiativeBonus.base;
        this.Special.Hunger.value = this.Special.Hunger.start;
    }

    countRanks() {
        let paths = this.parent.itemTypes.Path
        let mystic = 0;
        let martial = 0;
        let total = 0;
        for(var key in paths) {
            let path = paths[key];
            let ranks = 0;
            if(path.system.Rank3) {
                ranks = 3;
            } else if(path.system.Rank2) {
                ranks = 2;
            } else {
                ranks = 1;
            }

            if(path.system.IsMartial) {
                martial += ranks;
            }
            if(path.system.IsMystic) {
                mystic += ranks;
            }
            total += ranks;
        }
        this.Special.PathRanks.MysticRanks = mystic;
        this.Special.PathRanks.MartialRanks = martial;
        this.Special.PathRanks.TotalRanks = total;
    }
}

export class BugCombatant extends Combatant {
    _getInitiativeFormula() {
        let grace = this.actor.system.Attr.Grace.value + this.actor.system.Attr.Grace.temporary + this.actor.system.Special.InitiativeBonus.value;
        if(Number.isInteger(grace)) {
        return `${grace}d6`;
        } else {
            grace = Math.ceil(grace);
            return `${grace}d6d`;
        }
    }
}