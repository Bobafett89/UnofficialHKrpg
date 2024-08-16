const {NumberField, SchemaField, BooleanField, StringField} = foundry.data.fields;

export class ActorEffect extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            PoolsKeys: new SchemaField({
                Hearts: new StringField({required: true, initial: "system.Pools.Hearts.max"}),
                Soul: new StringField({required: true, initial: "system.Pools.Soul.max"}),
                Stamina: new StringField({required: true, initial: "system.Pools.Stamina.max"}),
                CustomPool1: new StringField({required: true, initial: "system.Pools.CustomPool1.max"}),
                CustomPool2: new StringField({required: true, initial: "system.Pools.CustomPool2.max"}),
                CustomPool3: new StringField({required: true, initial: "system.Pools.CustomPool3.max"})
            }),
            AttrKeys: new SchemaField({
                Grace: new StringField({required: true, initial: "system.Attr.Grace.value"}),
                Might: new StringField({required: true, initial: "system.Attr.Might.value"}),
                Insight: new StringField({required: true, initial: "system.Attr.Insight.value"}),
                Shell: new StringField({required: true, initial: "system.Attr.Shell.value"}),
                Footwork: new StringField({required: true, initial: "system.Attr.Footwork.value"}),
                Load: new StringField({required: true, initial: "system.Attr.Load.value"}),
                BeltSize: new StringField({required: true, initial: "system.Attr.BeltSize.value"}),
                TechSlots: new StringField({required: true, initial: "system.Attr.TechSlots.value"})
            }),
            OtherAttrKeys: new SchemaField({
                Cute: new StringField({required: true, initial: "system.OtherAttr.Cute.value"}),
                Spook: new StringField({required: true, initial: "system.OtherAttr.Spook.value"}),
                Notches: new StringField({required: true, initial: "system.OtherAttr.Notches.value"}),
                Speed: new StringField({required: true, initial: "system.OtherAttr.Speed.max"}),
                Belly: new StringField({required: true, initial: "system.OtherAttr.Belly.max"})
            }),
            SpecialKeys: new SchemaField({
                InitiativeBonus: new StringField({required: true, initial: "system.Special.InitiativeBonus.value"})
            })
        }
    }
}