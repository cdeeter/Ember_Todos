// Edit a todo
Todos.EditTodoView = Ember.TextField.extend({
    didInsertElement: function() {
        this.$().focus();
    }
});

// Register the view with Handlebars
Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);