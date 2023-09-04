const express = require("express");
const router = express.Router();

const pokemonsController = require('../../controllers/pokemonsControlller')
router
  .route("/")
  .get(pokemonsController.getAllPokemon)
  .post(pokemonsController.createNewPokemon)
  .put(pokemonsController.updatePokemon)
  .delete(pokemonsController.deletePokemon);

router.route("/:id").get(pokemonsController.getPokemon);

module.exports = router;
