import angular from 'angular';
import angularMeteor from 'angular-meteor';
import sukma from '../imports/components/sukma/sukma';
import '../imports/startup/accounts-config.js'

angular.module('SUKMA-Media', [
  angularMeteor,
  sukma.name,
  'accounts.ui'
]);

function onReady() {
    angular.bootstrap(document, ['SUKMA-Media']);
}

if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}
