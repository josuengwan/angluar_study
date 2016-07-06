angular.module('todomvc')
    .controller('TodomvcCtrl', function ($scope, todomvcStorage) {

        $scope.todos = todomvcStorage.get();

        $scope.addTodo = function (todoTitle) {
            todoTitle = todoTitle.trim();
            if (!todoTitle) return;
            todomvcStorage.post(todoTitle)
        };

        $scope.remove = function (id) {
            if (!id) return;
            todomvcStorage.delete(id);
        }

        $scope.$watch('status', function () {
            if ($scope.status === 'completed') {
                $scope.statusFilter = {completed: true}
            } else if ($scope.status === 'active') {
                $scope.statusFilter = {completed: false}
            } else {
                $scope.statusFilter = {}
            }
        });

        $scope.clearCompleted = function () {
            todomvcStorage.deleteCompleted();
        }

    });