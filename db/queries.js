const database = require('../database-connection')

module.exports = {
  list() {
    return database('foodStores').select()
  },
  read(id){
    return database('foodStores').select().where('id', id).first();
  },
  create(name){
    return database('foodStores')
    .insert(name)
    .returning('*')
    .then(record => record[0]);
  },
  update(id, name, amount){
    return database('foodStores')
    .update(name)
    .update(amount)
    .returning('*')
    .then(record => record[id]);
  },
  delete(id){
    return database('foodStores')
    .delete()
    .where('id', id)
  }
}
