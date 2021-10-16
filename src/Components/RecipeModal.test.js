import {fireEvent, getByTestId, render} from "@testing-library/react";
import ReceipeModal from "./ReceipeModal";

describe("RecipeModal", () => {
    const mockFoodItem = {
            "id": "94298",
            "imageUrl": "https://cdn.pixabay.com/photo/2021/10/10/18/04/food-6697924_1280.jpg",
            "name": "3 Chicken Wings",
            "description": "Tender, Spicy and Juicy.",
            "recipeData": {
                "description": "There\u2019s nothing like the simple things in life - the smell of freshly cut grass, sitting outside on a nice sunny day, spending time with friends and family. Well here is a recipe that delivers simple culinary pleasures - some nice fresh fish with a crispy crust, crunchy potato wedges and some delightfully sweet sugar snap peas flavoured with cooling mint. Slip into something comfortable and relax into a delicious dinner!",
                "headline": "with Sweet Potato Wedges and Minted Snap Peas",
                "ingredients": [
                    "375g Sweet Potatoes",
                    "1 Tsp Paprika",
                    "2 Tbsps Parmesan Cheese",
                    "1 Lemon",
                    "A Few Sprigs Thyme",
                    "25g Panko Breadcrumbs",
                    "1 Tbsp Butter",
                    "2 Cod Fillets",
                    "150g Sugar Snap Peas",
                    "A Few Sprigs Mint",
                    "75ml Sour Cream"
                ],
            }
        }

    it("should not render recipe modal when showRecipe is false",() => {
        const {queryByTestId} = render(<ReceipeModal showRecipe={false} foodItem={mockFoodItem} onClose={jest.fn()}/>)

        expect(queryByTestId('recipeModal')).not.toBeInTheDocument()
    })

    it("should render recipe modal when showRecipe is true",() => {
        const {getByTestId} = render(<ReceipeModal showRecipe={true} foodItem={mockFoodItem} onClose={jest.fn()}/>)

        expect(getByTestId('recipeModal')).toBeInTheDocument();
    })

    it("should render recipe modal with recipe information",() => {
        const component = render(<ReceipeModal showRecipe={true} foodItem={mockFoodItem} onClose={jest.fn()}/>)

        expect(component).toMatchSnapshot();
    })

    it("should call onClose on click of recipe modal",() => {
        const mockOnClose = jest.fn()
        const {getByTestId} = render(<ReceipeModal showRecipe={true} foodItem={mockFoodItem} onClose={mockOnClose}/>)

        fireEvent.click(getByTestId('recipeModal'))
        expect(mockOnClose).toBeCalledTimes(1);
    })
})