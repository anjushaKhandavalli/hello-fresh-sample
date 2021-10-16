import {fireEvent, getByTestId, render} from "@testing-library/react";
import FoodItems from "./Fooditems";

describe("FoodItems", () => {

    const mockItems = [
        {
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
    },
        {
            "id": "94301",
            "imageUrl": "https://cdn.pixabay.com/photo/2021/10/10/18/03/food-6697917_1280.jpg",
            "name": "Chicken Livers and Portuguese Roll",
            "description": "Chicken Livers Topped with PERi-PERi Sauce",
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
        },]
    it("should render the items received",() => {
        const component = render(<FoodItems items={mockItems}/>)

        const { getAllByTestId } = component;

        expect(getAllByTestId("foodItemImage").length).toBe(2)
        expect(getAllByTestId("foodItemName").length).toBe(2)
        expect(getAllByTestId("foodItemDescription").length).toBe(2)
        expect(component).toMatchSnapshot();
    })

    it("should render recipe modal on click of foodItem", () => {
        const component = render(<FoodItems items={mockItems}/>)
        const { getByTestId } = component;

        fireEvent.click(getByTestId(mockItems[0].id))
        expect(getByTestId("recipeModal")).toBeInTheDocument();
    })

    it("should not render recipe modal when none of the foodItem selected", () => {
        const component = render(<FoodItems items={mockItems}/>)
        const { queryByTestId } = component;

        expect(queryByTestId("recipeModal")).not.toBeInTheDocument();
    })
})