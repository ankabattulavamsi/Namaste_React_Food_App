import { render, screen } from "@testing-library/react";
import ContactUs from "../Components/ContactUs";

it('should render contact us page', () => {
    render(<ContactUs />)

    const contactName = screen.getByText('Contact Us')

    expect(contactName).toBeInTheDocument()
})


it('should render username inpput', () =>{
    render(<ContactUs />)

    const userNameInput = screen.getByPlaceholderText('user name')
    expect(userNameInput).toBeInTheDocument()
})

it('should render email inpput', () =>{
    render(<ContactUs />)

    const emailInput = screen.getByPlaceholderText('email')
    expect(emailInput).toBeInTheDocument()
})

it('should render submit button in contact us page', () => {
    render(<ContactUs />)

    const submitBtn = screen.getByRole('button', {name: 'Submit'})

    expect(submitBtn).toBeInTheDocument()
})