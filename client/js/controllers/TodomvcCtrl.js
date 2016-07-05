/**
 * Created by Jo_seungwan on 2016. 7. 5..
 */
angular.module('todomvc')
    .controller('todoctrl',function ($scope) {
        $scope.todos=[{
            id: 1,
            title: 'yoyoga play',
            completed: false
        },{
            id:2,
            title:'lovelove',
            completed: true
        }];
    });