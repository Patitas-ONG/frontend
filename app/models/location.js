import Model, { attr } from '@ember-data/model';

export default class LocationModel extends Model {
  @attr('number') lat;
  @attr('number') lng;
  @attr('string') region;
  @attr('string') address;
  @attr('string') locality;
  @attr('number') postcode;
  @attr('string') country;
  @attr('string') neighborhood;
}
