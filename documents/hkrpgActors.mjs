const {NumberField, SchemaField, BooleanField, StringField} = foundry.data.fields;

export class ActorDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            Pools: new SchemaField({
                Hearts: new SchemaField({
                    value: new NumberField({required: true, initial: 7}),
                    temporary: new NumberField({required: true, initial: 0}),
                    max: new NumberField({required: true, initial: 7})
                }),
                Soul: new SchemaField({
                    value: new NumberField({required: true, initial: 3}),
                    temporary: new NumberField({required: true, initial: 0}),
                    max: new NumberField({required: true, initial: 3})
                }),
                Stamina: new SchemaField({
                    value: new NumberField({required: true, initial: 3}),
                    temporary: new NumberField({required: true, initial: 0}),
                    max: new NumberField({required: true, initial: 3})
                }),
                CustomPool1: new SchemaField({
                    name: new StringField({required: true, initial: ""}),
                    value: new NumberField({required: true, initial: 0}),
                    temporary: new NumberField({required: true, initial: 0}),
                    max: new NumberField({required: true, initial: 0})
                }),
                CustomPool2: new SchemaField({
                    name: new StringField({required: true, initial: ""}),
                    value: new NumberField({required: true, initial: 0}),
                    temporary: new NumberField({required: true, initial: 0}),
                    max: new NumberField({required: true, initial: 0})
                }),
                CustomPool3: new SchemaField({
                    name: new StringField({required: true, initial: ""}),
                    value: new NumberField({required: true, initial: 0}),
                    temporary: new NumberField({required: true, initial: 0}),
                    max: new NumberField({required: true, initial: 0})
                })
            }),
            Attr: new SchemaField({
                Might: new SchemaField({
                    value: new NumberField({required: true, initial: 3}),
                    temporary: new NumberField({required: true, initial: 0})
                }),
                Grace: new SchemaField({
                    value: new NumberField({required: true, initial: 3}),
                    temporary: new NumberField({required: true, initial: 0})
                }),
                Insight: new SchemaField({
                    value: new NumberField({required: true, initial: 3}),
                    temporary: new NumberField({required: true, initial: 0})
                }),
                Shell: new SchemaField({
                    value: new NumberField({required: true, initial: 3}),
                    temporary: new NumberField({required: true, initial: 0})
                }),
                Footwork: new NumberField({required: true, initial: 2}),
                Load: new NumberField({required: true, initial: 3}),
                BeltSize: new NumberField({required: true, initial: 3}),
                TechSlots: new NumberField({required: true, initial: 3})
            }),
            OtherAttr: new SchemaField({
                Size: new NumberField({required: true, initial: 2}),
                Cute: new NumberField({required: true, initial: 1}),
                Spook: new NumberField({required: true, initial: 1}),
                Speed: new SchemaField({
                    value: new NumberField({required: true, initial: 6}),
                    max: new NumberField({required: true, initial: 6})
                }),
                Belly: new SchemaField({
                    value: new NumberField({required: true, initial: 10}),
                    max: new NumberField({required: true, initial: 10})
                }),
                Notches: new NumberField({required: true, initial: 3})
            }),
            Other: new SchemaField({
                Milestone: new SchemaField({
                    main: new NumberField({required: true, initial: 0}),
                    minorAdv: new NumberField({required: true, initial: 0})
                }),
                PlayerName: new StringField({required: true, initial: ""}),
                EditEquipment: new BooleanField({required: true, initial: false}),
                EditSkills: new BooleanField({required: true, initial: false}),
                Geo: new NumberField({required: true, initial: 0}),
                Bulk: new NumberField({required: true, initial: 0})
            })
        };
    }

    prepareBaseData() {
        super.prepareBaseData();
    }
}

export class BugCombatant extends Combatant {
    _getInitiativeFormula() {
        let grace = this.actor.system.Attr.Grace.value + this.actor.system.Attr.Grace.temporary;
        return `${grace}d6`;
    }
}