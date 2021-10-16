import {fireEvent, render} from "@testing-library/react";
import App from "./App";

describe("App",() => {
    it("should ask user to select week to render foodItems when non of the week is selected",() => {
        const component = render(<App/>)

        const {getByText} = component;
        expect(getByText('Please select the week to show foodItems')).toBeInTheDocument();
        expect(component).toMatchSnapshot();
    })

    it("should render menu header and buttons to ask the user to select the week for foodItems",() => {
        const component = render(<App/>)

        const {getByTestId} = component;
        expect(getByTestId('week1')).toBeInTheDocument();
        expect(getByTestId('week2')).toBeInTheDocument();
        expect(getByTestId('week3')).toBeInTheDocument();
        expect(getByTestId('week4')).toBeInTheDocument();
        expect(getByTestId('week5')).toBeInTheDocument();
    })

    it("should render menu header for selected week",() => {
        const component = render(<App/>)

        const {getByTestId,rerender,getByText} = component;

        fireEvent.click(getByTestId('week1'))
        rerender(<App />)

        expect(getByText('Menu for Oct 16 - Oct 22')).toBeInTheDocument();
    })

    it("should render food items for selected week",() => {
        const component = render(<App/>)

        const {getByTestId,rerender,getAllByTestId} = component;

        fireEvent.click(getByTestId('week1'))
        rerender(<App />)

        expect(component).toMatchSnapshot();
        expect(getAllByTestId('foodItemImage').length).toBe(9)
        expect(getAllByTestId('foodItemName').length).toBe(9)
        expect(getAllByTestId('foodItemDescription').length).toBe(9)
    })
})