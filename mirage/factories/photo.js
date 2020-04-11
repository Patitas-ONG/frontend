import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  source() {
    return faker.image.animals(640, 480);
  },

  description() {
    return faker.lorem.paragraph();
  },

  updated() {
    return faker.date.recent();
  },

  created() {
    return faker.date.recent();
  },
});
