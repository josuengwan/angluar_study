/**
 * Created by Jo_seungwan on 2016. 7. 5..
 */
angular.module('todomvc')
    .directive('todoStatus',function () {
        return {
            restrict: 'E',
            template:
            '<div class="btn-group" role="group" aria-label="...">'+
            '<button type="button" class="btn btn-default" ng-click="status='completed'">Completed </button>'+
            '<button type="button" class="btn btn-default" ng-click="status='active'">Active </button>'+
            '<button type="button" class="btn btn-default" ng-click="status=''">All </button>'+
            '<button type="button" class="btn btn-default" ng-click="clearCompleted()">Clear Completed </button>'+
        '</div>'
        };
    });