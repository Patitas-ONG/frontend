import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

const STORY_TYPES = [
  'for-adoption', 'lost', 'found', 'follow-up'
]

export default Factory.extend({
  description() {
    return faker.lorem.paragraph();
  },

  type() {
    return faker.random.arrayElement(STORY_TYPES);
  },

  updated() {
    return faker.date.recent();
  },

  created() {
    return faker.date.recent();
  },

  afterCreate(story, server) {
    story.update({
      user: server.create('user'),
      pet: server.create('pet'),
      location: server.create('location')
    });
  }
});
