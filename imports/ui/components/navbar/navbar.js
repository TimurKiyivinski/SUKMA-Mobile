import angular from 'angular';
import { Meteor } from 'meteor/meteor';

import template from './navbar.html';

class NavController {
    constructor($scope) {
        $scope.viewModel(this)

        this.helpers({
            currentUser() {
                return Meteor.user()
            }
        })
    }
}

export default angular.module('navbar', [])
.component('navbar', {
    templateUrl: 'imports/ui/components/navbar/navbar.html',
    controller: ['$scope', NavController]
});
