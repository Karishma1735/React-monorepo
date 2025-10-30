import '@testing-library/jest-dom'
import App from './App'
import { fireEvent, render, screen } from '@testing-library/react'

test("testing todo list", ()=>{
    render(<App/>)

    const cityPlaceholder =screen.getByPlaceholderText(/add city/i)
    fireEvent.change(cityPlaceholder , {target :{value:"Indore"}})
  
    const addbutton = screen.getByRole('button' , {name:/add/i})
    fireEvent.click(addbutton)
    


    const deleteButton = screen.getByText('x')
  fireEvent.click(deleteButton)
  expect(screen.queryByText(/Indore/i)).not.toBeInTheDocument()

})