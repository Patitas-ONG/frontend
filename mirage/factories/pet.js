import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

const PET_TYPES = [
  'cat', 'dog', 'horse'
];

const PET_CONDITIONS = [
  'excellent', 'very-good', 'good', 'not-good', 'bad'
];

const BAD_CONDITIONS_TAG = [
  'wounded', 'starved', 'injured', 'mistreated'
];

export default Factory.extend({
  gender() {
    return faker.random.number(1);
  },

  age() {
    return faker.random.number(8);
  },

  condition() {
    return faker.random.arrayElement(PET_CONDITIONS);
  },

  description() {
    return faker.lorem.paragraph();
  },

  type() {
    return faker.random.arrayElement(PET_TYPES);
  },

  updated() {
    return faker.date.recent();
  },

  created() {
    return faker.date.recent();
  },

  afterCreate(pet, server) {
    pet.update({
      name: faker.name.firstName(pet.gender),
      photos: server.createList('photo', Math.floor(Math.random() * 10)),
    });
  }
});
