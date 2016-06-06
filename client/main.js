import angular from 'angular';
import angularMaterial from 'angular-material';
import angularMaterialIcons from 'angular-material-icons';
import angularMeteor from 'angular-meteor';
import navbar from '../imports/ui/components/navbar/navbar';
//import auth from '../imports/components/auth/auth';
import sukma from '../imports/ui/components/sukma/sukma';
import '../imports/startup/accounts-config.js'

angular.module('SUKMA-Mobile', [
    angularMaterial,
    angularMaterialIcons,
    angularMeteor,
    navbar.name,
    sukma.name,
    'accounts.ui'
])
.config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('lime');
})

function onReady() {
    angular.bootstrap(document, ['SUKMA-Mobile']);
}

if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}
