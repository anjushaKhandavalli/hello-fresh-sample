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
            <div className="foodItem" data-testid={foodItem.id} onClick={() => showRecipeModal(foodItem)}>
                <img width="360" height="200" data-testid="foodItemImage" src={foodItem.imageUrl} alt="some food"/>
                <p id="foodItemName" data-testid="foodItemName">{foodItem.name}</p>
                <p id="foodItemDescription" data-testid="foodItemDescription">{foodItem.description}</p>
            </div>
        )
    }
    const renderFoodItems = items.map((foodItem) => <FoodItem key={foodItem.id} foodItem={foodItem}/>)

    return (
        <div>
            <div className="foodItems">{renderFoodItems}</div>
            <RecipeModal onClose={() => setShowRecipe(false)} showRecipe={showRecipe} foodItem={selectedFoodItem}/>
        </div>
    );
}

FoodItems.propTypes = {items: PropTypes.arrayOf(PropTypes.any)};

export default FoodItems;