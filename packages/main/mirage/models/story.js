import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  user: belongsTo('user'),
  pet: belongsTo('pet'),
  location: belongsTo('location'),
  photos: hasMany('photo'),
});
