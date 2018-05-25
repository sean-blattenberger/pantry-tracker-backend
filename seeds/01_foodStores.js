const foodStores = require('../foodStores');

exports.seed = function(knex, Promise) {
    return knex('foodStores').del()
        .then(() => {
            return knex('foodStores').insert(foodStores);
        })
};