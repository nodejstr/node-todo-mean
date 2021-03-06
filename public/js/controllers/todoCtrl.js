/*global todomvc */
'use strict';

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
todomvc.controller('TodoCtrl', function TodoCtrl($scope, $location, todoStorage, filterFilter, socket) {
    var todos = $scope.todos = todoStorage.get();
    $scope.newTodo = '';
    $scope.remainingCount = filterFilter(todos, {completed: false}).length;
    $scope.editedTodo = null;

    if ($location.path() === '') {
        $location.path('/');
    }

    $scope.location = $location;

    $scope.$watch('location.path()', function (path) {
        $scope.statusFilter = (path === '/active') ?
        { completed: false } : (path === '/completed') ?
        { completed: true } : null;
    });

    $scope.$watch('remainingCount == 0', function (val) {
        $scope.allChecked = val;
    });

    $scope.addTodo = function () {
        var newTodo = $scope.newTodo.trim();
        if (newTodo.length === 0) {
            return;
        }
        var todo = {
            title: newTodo,
            completed: false
        }
        todos.push(todo);
        todoStorage.add(todo);

        $scope.newTodo = '';
        $scope.remainingCount++;
    };

    $scope.editTodo = function (todo) {
        $scope.editedTodo = todo;
    };

    $scope.doneEditing = function (todo) {
        $scope.editedTodo = null;
        todo.title = todo.title.trim();

        if (!todo.title) {
            $scope.removeTodo(todo);
        } else {
            todoStorage.update(todo);
        }
    };

    $scope.removeTodo = function (todo) {
        $scope.remainingCount -= todo.completed ? 0 : 1;
        todos.splice(todos.indexOf(todo), 1);
        todoStorage.del(todo);
    };

    $scope.todoCompleted = function (todo) {
        if (todo.completed) {
            $scope.remainingCount--;
        } else {
            $scope.remainingCount++;
        }
        todoStorage.update(todo);
    };

    $scope.clearCompletedTodos = function () {
        var toDel = todos.filter(function (val) {
            return val.completed;
        });
        $scope.todos = todos = todos.filter(function (val) {
            return !val.completed;
        });

        toDel.forEach(function (todo) {
            todoStorage.del(todo);
        });
    };

    $scope.markAll = function (completed) {
        todos.forEach(function (todo) {
            todo.completed = completed;
            todoStorage.update(todo);
        });
        $scope.remainingCount = completed ? 0 : todos.length;
    };
});
