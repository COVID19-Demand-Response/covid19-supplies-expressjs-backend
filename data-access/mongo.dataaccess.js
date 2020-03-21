var express = require('express');
ObjectID = require('mongodb').ObjectID;

let mongoDataAccess = {
    add: function(app, collection, data) {
        console.log('Creating record for collection: ' + collection);
        app.db.collection(collection).insertOne(data);
    },
    update: function(app, collection, data) {
        let id = data._id;
        delete data._id;
        const update = {"$set": data};
        
        app.db.collection(collection).updateOne({ "_id": new ObjectID(id) }, update, { "upsert": false })
        .then(result => {
            if(result.matchedCount > 0) {
                console.log("Updated " + result);
            } else {
                console.log("No matching records found in collection " + collection + " for id " + id);
            }
            
        })
        .catch(err => console.error(`Failed to add review: ${err}`));
    },
    delete: function(app, collection, id) {
        app.db.collection(collection).remove(
            { "_id": new ObjectID(id) },
            {
              justOne: true
            }
            );
    },
    view: async function(app, collection, id) {
        let doc = {};
        try {
            id = new ObjectID(id);
            doc = app.db.collection(collection).findOne(
                { "_id": id },
                {}
                );
            await doc.then(doc => {
                console.log(doc);
            }).catch(err => {
                doc = {};
                console.log(err);
            });
        } catch(err) {
            console.log(err);
        };

        return doc;
    },
    search: function(app, collection, criteria) {
        console.log('controller called');
    }
};


module.exports = mongoDataAccess;