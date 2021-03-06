import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';


export default Model.extend({
  questions: attr('string'),
  answers: attr('string'),
  grant: belongsTo('grant')
});
