import { render, screen } from "@testing-library/react"
import DisplayCards from "../Components/DisplayCards"
import Cart_Mock from '../utils/CardMock.json'
import "@testing-library/jest-dom";

it('should render the display card items', () => {
    render(<DisplayCards resData={Cart_Mock} />)

    const cartItems = screen.getByText('Shah Ghouse Hotel & Restaurant')
    expect(cartItems).toBeInTheDocument()
})