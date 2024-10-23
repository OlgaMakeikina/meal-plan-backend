const MealModel = require('./MealModel');

// GET

module.exports.getMeal = async (req, res) => {
    const myMeal = await MealModel.find();
    res.send(myMeal);
}

module.exports.saveMeals = async (req, res) => {
    const { title } = req.body;
    MealModel.create({ title })
    .then((data) => {console.log('Meal added')
    res.send(data)
})
}

// DELETE
module.exports.deleteMeal = async (req, res) => {
    const { id } = req.params;  
    try {
        await MealModel.findByIdAndDelete(id);
        res.send('Deleted a meal');
    } catch (error) {
        res.status(500).send('Error deleting meal');
    }
}


// EDIT
module.exports.editMeal = async (req, res) => {
    const { _id, title } = req.body;
    MealModel.findByIdAndUpdate(_id, { title })
    .then(() => res.send("Meal edited"))
}