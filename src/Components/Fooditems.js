import * as PropTypes from 'prop-types';
import '../App.css';
import {useState} from "react";
import RecipeModal from "./ReceipeModal";

const FoodItems = ({items}) => {
    const [showRecipe, setShowRecipe] = useState(false);
    const [selectedFoodItem, setSelectedFoodItem] = useState({})

    const showRecipeModal = (foodItem) => {
        setSelectedFoodItem(foodItem);
        setShowRecipe(true);
    }

    const FoodItem = ({foodItem}) => {
        return (
            <div className="foodItem" onClick={() => showRecipeModal(foodItem)}>
                <img width="360" height="200" src={foodItem.imageUrl} alt="some food Image"/>
                <p id="foodItemName">{foodItem.name}</p>
                <p id="foodItemDescription">{foodItem.description}</p>
            </div>
        )
    }
    const renderFoodItems = items.map((foodItem) => <FoodItem foodItem={foodItem}/>)

    return (
        <div>
            <div className="foodItems">{renderFoodItems}</div>
            <RecipeModal onClose={() => setShowRecipe(false)} showRecipe={showRecipe} foodItem={selectedFoodItem}/>
        </div>
    );
}

FoodItems.propTypes = {items: PropTypes.arrayOf(PropTypes.any)};

export default FoodItems;