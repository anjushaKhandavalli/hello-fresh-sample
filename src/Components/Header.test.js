import {render} from "@testing-library/react";
import Header from "./Header";

describe('Header',() => {
    it("should render the app header",() => {
        const component = render(<Header />)

        expect(component).toMatchSnapshot();
    })
})