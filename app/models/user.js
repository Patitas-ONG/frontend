import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') userName;
  @attr('string') phoneNumber;
  @attr('string') email;
  @attr('date') updated;
  @attr('date') created;
  @belongsTo('location') location;
  @hasMany('story') stories;
}
