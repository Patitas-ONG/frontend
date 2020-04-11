import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  alwaysInlcudeLinkageData: true,
  embeded: true,

  init() {
    this._super(...arguments);
    this.include = ['user', 'pet', 'location']
  }
});
