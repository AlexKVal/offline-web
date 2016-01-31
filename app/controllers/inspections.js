import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createInspection() {
      this.store.createRecord('inspection', {
        title: this.get('title'),
        isCompleted: this.get('isCompleted')
      })
      .save();

      this.set('title', '');
      this.set('isCompleted', false);
    },

    deleteInspection(inspection) {
      inspection.destroyRecord();
    }
  }
});
