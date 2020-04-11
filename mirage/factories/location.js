import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  lat() {
    return faker.address.latitude();
  },

  lng() {
    return faker.address.longitude();
  },

  region() {
    return faker.address.state();
  },

  adress() {
    return faker.address.streetAddress();
  },

  lcality() {
    return faker.address.city();
  },

  postcode() {
    return faker.address.zipCode();
  },

  country() {
    return faker.address.country();
  },

  neighborhood() {
    return faker.address.streetName();
  },
});
