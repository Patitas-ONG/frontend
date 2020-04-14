import Model, { attr } from '@ember-data/model';

export default class PhotoModel extends Model {
 @attr('string') source;
 @attr('string') description;
 @attr('date') updated;
 @attr('date') created;
}
