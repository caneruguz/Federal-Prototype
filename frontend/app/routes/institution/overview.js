
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {
    
    model() {
        return Ember.RSVP.hash({
            grants: this.get('store').findAll('grant'),
            // grants: this.get('store').query('grant', { page: 5 }),
            departments: this.get('store').findAll('department'),
        });
    },
    
    actions: {
        didTransition: function() {
            Ember.$(".moderatorHolder").show();
        }
    },

    setupController(controller, model) {
        controller.set('institution', true);
        controller.set('isFileUploaded', "researcher-form");
        // debugger;
        controller.set('grants', model.grants.filter(function(grant) {
            return grant.get('institution');
        }));
        controller.set('role', 'institution');
        //controller.set('document', model.document)
        controller.set('departments', model.departments);
    }

});
