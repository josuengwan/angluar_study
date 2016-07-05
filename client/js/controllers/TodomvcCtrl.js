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
            }
            
            $scope.todos.push(newTodo);
        };

        $scope.$watch('status', function () {
            if ($scope.status === 'completed') {        // Completed 클릭시
                $scope.statusFilter = {completed: true};  // 필터를 설정한다.
            } else if ($scope.status === 'active') {    // Active 클릭시
                $scope.statusFilter = {completed: false}; // 필터를 설정한다.
            } else {                                    // All 클릭시
                $scope.statusFilter = {};                 // 필터를 해제한다.
            }
        });

        $scope.clearCompleted = function () {
            var incompleteTodos = $scope.todos.filter(function (todo) {
                return !todo.completed;
            });
            angular.copy(incompleteTodos, $scope.todos);
        }
    });