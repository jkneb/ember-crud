App.Store = DS.Store.extend({
    /* adapter: DS.FixtureAdapter */
    
    // in this demo we are using the LocalStorageAdapter to persist data
    adapter: DS.LSAdapter
});