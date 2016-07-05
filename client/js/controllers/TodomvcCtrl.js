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

        $scope.remove = function (id) {
            if(!id) return;

            var deletedTodoIdx = $scope.todos.findIndex(function (todo) {
                return todo.id === id;
            });

            if(deletedTodoIdx === -1) return;
             $scope.todos.splice((deletedTodoIdx),1);
        }
        
        $scope.addTodo = function (todoTitle) {
            todoTitle = todoTitle.trim();
            if(!todoTitle) return;
            
            var newId = !$scope.todos.length ?
                1 : $scope.todos[$scope.todos.length-1].id+1;
            
            var newTodo = {
                id: newId,
                title: todoTitle,
                completed: false
            };
            
            $scope.todos.push(newTodo);
        };
    });