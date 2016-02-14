// Set up route for / url
Todos.Router.map(function() {
    // Retrieve the 'todos' view 
    this.resource('todos', { path: '/' }, function() {
        // Additional child routes go here
        this.route('active');
        this.route('completed');
    });
});

// Set the TodosIndex route with the model for todos
Todos.TodosIndexRoute = Ember.Route.extend({
    model: function() {
        return this.modelFor('todos');
    }
});

// Set the ActiveTodos route with the model for the active todos
Todos.TodosActiveRoute = Ember.Route.extend({
    model: function() {
        return this.store.filter('todo', function(todo) {
            return !todo.get('isCompleted');
        });
    },
    renderTemplate: function(controller) {
        this.render('todos/index', {controller: controller});
    }
});

// Set TodosRoute with the model for the completed todos
Todos.TodosCompletedRoute = Ember.Route.extend({
    model: function() {
        return this.store.filter('todo', function(todo) {
            return todo.get('isCompleted');
        });
    },
    renderTemplate: function(controller) {
        this.render('todos/index', {controller: controller});
    }
})

// Set TodosRoute with the existing todos as the model
Todos.TodosRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('todo');
    }
});