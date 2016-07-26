import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  datesubmitted: attr('string'),
  datepublished:  attr('string'),
  title: attr('string'),
  publisher: attr('string'),
  institution: attr('string'),
  status: attr('string'),
  filelink: attr('string'),
  pifirstname: attr('string'),
  pilastname: attr('string'),
  piemail: attr('string'),
  authorlist: attr('string'),
  name: attr('string', { defaultValue: 'Untitled'} ),
  path: attr('string'),
  grants: hasMany('grant'),
});
