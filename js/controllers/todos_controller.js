// Controller for the Todo based on Ember's naming conventions
Todos.TodosController = Ember.ArrayController.extend({
    actions: {
        createTodo: function() {
            // Get the todo title set by the "New Todo" text field
            var title = this.get('newTitle');
            if (!title.trim()) { return; }
            
            // Create the new Todo model
            var todo = this.store.createRecord('todo', {
                title: title,
                isCompleted: false
            });
            
            // Clear the "New Todo" text field
            this.set('newTitle', '');
            
            // Save the new model
            todo.save();
        },
        
        clearCompleted: function() {
            // Get the completed todos and remove them
            var completed = this.filterBy('isCompleted', true);
            completed.invoke('deleteRecord');
            completed.invoke('save');
        }
    },
    
    // Get the remaining incomplete todos
    remaining: function() {
        return this.filterBy('isCompleted', false).get('length');
    }.property('@each.isCompleted'),
    
    // Return text for 'item' or 'items' depending on remaining length
    inflection: function() {
        var remaining = this.get('remaining');
        return remaining === 1 ? 'item' : 'items';
    }.property('remaining'),
    
    // Return details about whether or not a todo was completed
    hasCompleted: function() {
        return this.get('completed') > 0;
    }.property('completed'),
    
    // Get the number of completed todos
    completed: function() {
        return this.filterBy('isCompleted', true).get('length');
    }.property('@each.isCompleted'),
    
    // Check box if all are done
    allAreDone: function(key, value) {
        if (value === undefined) {
            // Get behavior: Check if every todo's isCompleted property is true
            return !!this.get('length') && this.isEvery('isCompleted');
        } else {
            // Set behavior: Complete all todos
            this.setEach('isCompleted', value);
            this.invoke('save');
            return value;
        }
    }.property('@each.isCompleted')
    
})