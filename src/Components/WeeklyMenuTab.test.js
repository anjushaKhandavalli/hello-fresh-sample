import {fireEvent, getByText, render} from "@testing-library/react";
import WeeklyMenuTab from "./WeeklyMenuTab";
import {foodItems} from "../mockData/Receipes";

describe("WeeklyMenuTab", () => {
    it("should render `Please select the week to show foodItems` when there is no weekSpan", () => {
        const { getByText } = render(<WeeklyMenuTab weekSpan=''/>)

        expect(getByText('Please select the week to show foodItems')).toBeInTheDocument();
    })

    it("should render menu for week text when there is weekSpan", () => {
        const { getByText } = render(<WeeklyMenuTab weekSpan='Oct 16 - Oct 22'/>)

        expect(getByText('Menu for Oct 16 - Oct 22')).toBeInTheDocument();
    })

    it("should render buttons for 5 weeks", () => {
        const component = render(<WeeklyMenuTab weekSpan=''/>)

        expect(component).toMatchSnapshot();
    })

    it("should call setWeekSpan on click of week button with valid weekSpan", () => {
        const mockSetWeekSpan = jest.fn();
        const mockSetItems = jest.fn();
        const { getByTestId } = render(<WeeklyMenuTab weekSpan='Oct 16 - Oct 22' setWeekSpan={mockSetWeekSpan} setItems={mockSetItems}/>)

        fireEvent.click(getByTestId('week2'))

        expect(mockSetWeekSpan).toBeCalledTimes(1);
        expect(mockSetWeekSpan).toBeCalledWith("Oct 23 - Oct 29");
    })

    it("should call setItems on click of week button with valid foodItems", () => {
        const mockSetWeekSpan = jest.fn();
        const mockSetItems = jest.fn();
        const { getByTestId } = render(<WeeklyMenuTab weekSpan='Oct 16 - Oct 22' setWeekSpan={mockSetWeekSpan} setItems={mockSetItems}/>)

        fireEvent.click(getByTestId('week2'))

        expect(mockSetItems).toBeCalledTimes(1);
        expect(mockSetItems).toBeCalledWith(foodItems.slice(9, 18));
    })
})