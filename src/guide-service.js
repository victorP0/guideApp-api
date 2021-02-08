const guideService = {
    getAllGuides(knex) {
      return knex
      .select("*")
      .from("guides");
    },
  
    getGuide(knex, id) {
      return knex
      .select("*")
      .from("guides")
      .where ({id:'id'});
    },
  
    insertGuide(knex, newGuide) {
      return knex
      .insert(newGuide)
      .into("guides")
      .returning("*")
      .then(rows => {
        return rows[0]
      });
    },

    editGuide(knex, id, newGuide) {
      return knex("guides")
      .where({id:id})
      .update(newGuide)
      .returning("*");
    },    
  
    deleteGuide(knex, id) {
      return knex("guides")
      .where({ id: 'id' })
      .delete();
    },
  };
  
  module.exports = guideService;
  