import Model, { attr, belongsTo } from '@ember-data/model';

export default class StoryModel extends Model {
  @attr('string') description;
  @attr('string') type;
  @attr('date') updated;
  @attr('date') created;
  @belongsTo('user') user;
  @belongsTo('pet') pet;
  @belongsTo('location') location;
}
