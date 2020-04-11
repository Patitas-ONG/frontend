import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  firstName() {
    return faker.name.firstName();
  },

  lastName() {
    return faker.name.lastName();
  },

  userName() {
    return faker.lorem.word();
  },
  phoneNumber() {
    return faker.phone.phoneNumber();
  },
  email() {
    return faker.internet.email();
  },

  updated() {
    return faker.date.recent();
  },

  created() {
    return faker.date.recent();
  },

  afterCreate(user, server) {
    user.update({
      location: server.create('location')
    });
  }
});
