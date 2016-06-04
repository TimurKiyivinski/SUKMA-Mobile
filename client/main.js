import angular from 'angular';
import angularMeteor from 'angular-meteor';
import navbar from '../imports/ui/components/navbar/navbar';
//import auth from '../imports/components/auth/auth';
import sukma from '../imports/ui/components/sukma/sukma';
import '../imports/startup/accounts-config.js'

angular.module('SUKMA-Media', [
  angularMeteor,
  navbar.name,
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
