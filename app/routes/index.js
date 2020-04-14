import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return this.store.query('story', {
      include: 'user,pet,location,photos'
    });
  }
}
