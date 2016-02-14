// Todo controller
Todos.TodoController = Ember.ObjectController.extend({
    
    actions: {
        // Indicate if the todo is being edited
        editTodo: function() {
            this.set('isEditing', true);
        },
        
        // Accept edit changes when the user presses enter or focuses out
        acceptChanges: function() {
            // No longer editing the todo
            this.set('isEditing', false);
            
            // If no title (nothing was entered), remove the todo
            if (Ember.isEmpty(this.get('model.title'))) {
                var todo = this.get('model');
                todo.deleteRecord();
            } else {
                // Otherwise, save what was there
                this.get('model').save();
            }
        },
        
        // Remove the todo and save changes
        removeTodo: function() {
            var todo = this.get('model');
            todo.deleteRecord();
            todo.save();
        }
    },
    
    isEditing: false,

    // Indicate if the todo was completed
    isCompleted: function(key, value) {
        var model = this.get('model');
        
        if (value === undefined) {
            // Property being used as getter
            return model.get('isCompleted');
        } else {
            // Property being used as a setter
            model.set('isCompleted', value);
            model.save();
            return value;
        }
    }.property('model.isCompleted')
});