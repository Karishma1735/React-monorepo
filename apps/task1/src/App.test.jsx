import '@testing-library/jest-dom'
import App from './App'
import { fireEvent, render, screen } from '@testing-library/react'

test("Verifying form data" , ()=>{
    render(<App/>)
    const inputlabel = screen.queryByLabelText(/username/i)
    const inputplaceholder = screen.getByPlaceholderText('enter your username')
    fireEvent.change(inputlabel,{target:{value:"Karishma"}})
    expect(inputlabel).toHaveValue("Karishma")

      const passswordlabel = screen.queryByLabelText(/password/i)
    const passwordplaceholder = screen.getByPlaceholderText('enter your password')
    fireEvent.change(passswordlabel,{target:{value:"1234567"}})
    expect(passswordlabel).toHaveValue("1234567")

      const agelabel = screen.queryByLabelText(/age/i)
    const ageplaceholder = screen.getByPlaceholderText('enter your age')
    fireEvent.change(agelabel,{target:{value:"20"}})
    expect(agelabel).toHaveValue("20")


  fireEvent.click(screen.getByRole('button', { name: /submit/i }));


  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  expect(screen.getByText(/Request sent to db with below request data/i)).toBeInTheDocument();

  const details = screen.getAllByRole('listitem');
  expect(details[0]).toHaveTextContent('Username : Karishma');
  expect(details[1]).toHaveTextContent('Password : 1234567');
  expect(details[2]).toHaveTextContent('Age : 20');

})
