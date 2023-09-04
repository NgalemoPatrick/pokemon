// const pokemondb = require('../models/Pokemon');


const data = {};

data.pokemon = require("../models/pokemons.json");

const getAllPokemon = (req, res) => {
  res.json(data.pokemon);
};

const createNewPokemon = (req, res) => {
  res.json({
    name: req.body.name,
  });
};
updatePokemon = (req, res) => {
  res.json({
    name: req.body.name,
  });
};
const deletePokemon = (req, res) => {
  res.json({ id: req.body.id });
};
const getPokemon = (req, res) => {
  res.json({
    id: req.params.id,
  });
};

module.exports = {
  getAllPokemon,
  createNewPokemon,
  updatePokemon,
  deletePokemon,
  getPokemon,
};
