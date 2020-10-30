//requiring the orm
const orm = require("../config/orm.js");

// taken from the readme: create code that will call the ORM functions using burger specific input for the ORM
let burger = {
    //all the burgers
    all: function(cb) {
        orm.all("burgers", function(res) {
          cb(res);
        });
      },

      //create burgers
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    //updating burgers
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;
