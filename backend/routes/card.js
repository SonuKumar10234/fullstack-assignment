const express = require('express');
const { getCards, postCard, getCardByTitle } = require('../controllers/cardController');

const cardRoutes = express.Router();

// /cards is already added in base path of router in app.js
cardRoutes.get('/', getCards) // endpoint to retrieve all the cards.
.post('/', postCard) // endpoint to add a new card to the help center.
.get('/:title', getCardByTitle) //This endpoint to retrieve the details of a single card by its title.

module.exports = cardRoutes;