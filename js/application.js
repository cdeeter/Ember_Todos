// Set the Ember application to the global object Todos
window.Todos = Ember.Application.create();

// Set up adapter to load fixture data
Todos.ApplicationAdapter = DS.FixtureAdapter.extend({
    namespace: 'todos-emberjs'
});