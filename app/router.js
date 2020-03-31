import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('story', function() {
    this.route('new');
    this.route('edit');
  });
  this.route('pet', function() {
    this.route('new');
    this.route('edit');
  });
  this.route('person');

  this.route('user', function() {
    this.route('new');
    this.route('edit');
  });
});
