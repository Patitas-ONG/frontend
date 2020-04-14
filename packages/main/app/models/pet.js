import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class PetModel extends Model {
  @attr('string') name;
  @attr('string') gender;
  @attr('string') age;
  @attr('string') condition;
  @attr('string') description;
  @attr('string') type;
  @attr('date') updated;
  @attr('date') created;
  @hasMany('photo') photos;
  @hasMany('story') stories;
  @belongsTo('user') owner;
}
