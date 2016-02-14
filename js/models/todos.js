// Model data for the Todo; takes a string for title and a boolean
// to indicate whether or not it's completed
Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});

// Fixture data
Todos.Todo.FIXTURES = [
    {
        id: 1,
        title: 'Learn Ember.js',
        isCompleted: true
    },
    {
        id: 2,
        title: '...',
        isCompleted: false
    },
    {
        id: 3,
        title: 'Profit',
        isCompleted: false
    }
]