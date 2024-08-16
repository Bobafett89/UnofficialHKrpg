class hkActorEffect extends ActiveEffectConfig {
  activateListeners(html) {
    super.activateListeners(html);
    html.on('click', '.hkItemDelete', deleteChange.bind(this));
    html.on('click', '.hkAddEffect', addChange.bind(this));
  }
}

function deleteChange(html) {
  let changeID = html.currentTarget.dataset.changeid; 
  let newchanges = this.object.changes.toSpliced(changeID, 1);
  let dis = this.object.disabled;
  this.object.update({"changes": newchanges, "disabled": dis});
}

function addChange(html) {
  let newchanges = [
    ...this.object.changes,
    {key: "system.Attr.Might.value", mode: "2", value: "0", priority: this.object.changes.length}
  ];
  let dis = this.object.disabled;
  this.object.update({"changes": newchanges, "disabled": dis});
}

export class ActorEffectSheet extends hkActorEffect {

    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "systems/hkrpg/templates/Effects/ActorEffectSheet.hbs",
        closeOnSubmit: false,
        submitOnChange: true
      });
    }
}