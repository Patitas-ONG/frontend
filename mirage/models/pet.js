import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  photos: hasMany('photo'),
  stories: hasMany('story'),
  owner: belongsTo('user'),
});
