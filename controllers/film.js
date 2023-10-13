const { error } = require("console");
const { response } = require("express");
const { request } = require("http");

//without using ORM/sequelize
const getAllFilms = (request, response) => {
  pool.query("SELECT * FROM films ORDER BY id ASC", (error, result) => {
    if (error) {
      throw error;
    }
    response.status(200).json(result.rows);
  });
  //declare findAll by sequlize
};

//findAll
//findById
//listCategory
//findByCategory
