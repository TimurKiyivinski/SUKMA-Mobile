import angular from 'angular';
import angularMaterial from 'angular-material';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';

import template from './navbar.html';

class NavController {
    constructor($scope) {
        $scope.viewModel(this)
        $scope.primary = 'purple'
        $scope.accent = 'green'
        $scope.isPrimary = true

        this.helpers({
            currentUser() {
                return Meteor.user()
            }
        })
    }
}

export default angular.module('navbar', [
    angularMaterial,
    angularMeteor
])
.component('navbar', {
    templateUrl: 'imports/ui/components/navbar/navbar.html',
    controller: ['$scope', NavController]
});
