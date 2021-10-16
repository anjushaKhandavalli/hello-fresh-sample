import * as PropTypes from "prop-types";

const RecipeModal = ({showRecipe, onClose, foodItem}) => {
    if(!showRecipe) return null

    return(
        <div className="recipeModal" data-testid="recipeModal" onClick={onClose}>
            <div className="recipe">
                <h2>{foodItem.name}</h2>
                <h3>{foodItem.recipeData.headline}</h3>
                <h4>Plant-Based | Ready in 5 | Serves 2</h4>
                <p className="recipeInfo">{foodItem.recipeData.description}</p>
                <h5>Ingredients</h5>
                <ul className="recipeInfo">{foodItem.recipeData.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}</ul>
            </div>
        </div>
    )
}

RecipeModal.propTypes = {showRecipe: PropTypes.bool.isRequired};
export default RecipeModal;