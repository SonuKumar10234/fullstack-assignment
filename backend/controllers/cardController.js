const Card = require('../models/Card');

// get all cards
exports.getCards = async (req, res) => {
    try {
        const cards = await Card.find({});
        res.json({ cards, status: 200 });
    } catch (error) {
        res.json({error:error});
    }
}

// create a new card
exports.postCard = async (req, res) => {
    try {
        const card = new Card(req.body);
        await card.save();
        res.json({message:'Card created', status: 201});
    } catch (error) {
        res.json({error:error});
    }
}

// get specific card by its title
exports.getCardByTitle = async (req, res) => {
    try {
        const title = req.params.title;
        const card = await Card.findOne({title: title});
        res.json({card, status: 200});
    } catch (error) {
        res.json({error:error});
    }

}