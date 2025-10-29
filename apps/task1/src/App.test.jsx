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

})

test("submit formdata" , ()=>{
    render(<App/>)

  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  expect(screen.getByText(/Request sent to db with below request data/i)).toBeInTheDocument();
  expect(screen.getByText(/username : Karishma/i)).toBeInTheDocument();
  expect(screen.getByText(/password : 1234567/i)).toBeInTheDocument();
  expect(screen.getByText(/age : 20/i)).toBeInTheDocument();

})