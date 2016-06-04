import angular from 'angular';
import angularMaterial from 'angular-material';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import { Photo } from '../../../api/photos.js';

import template from './sukma.html';

class SUKMAController {
    constructor($scope) {
        $scope.viewModel(this)
        $scope.primary = 'purple'
        $scope.accent = 'green'
        $scope.isPrimary = true

        this.helpers({
            photos() {
                return Photo.find({}, {
                    sort: {
                        createdAt: -1
                    }
                })
            },
            currentUser() {
                return Meteor.user()
            }
        })
    }

    //TODO: Add CRUD stubs
}

export default angular.module('sukma', [
    angularMaterial,
    angularMeteor
])
.config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('lime');
})
.component('sukma', {
    templateUrl: 'imports/ui/components/sukma/sukma.html',
    controller: ['$scope', SUKMAController]
});
