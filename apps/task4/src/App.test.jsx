import '@testing-library/jest-dom'
import App from './App'
import { fireEvent, render, screen } from '@testing-library/react'

test("testing todo list", ()=>{
    render(<App/>)

    const cityPlaceholder =screen.getByPlaceholderText(/add city/i)
    fireEvent.change(cityPlaceholder , {target :{value:"Indore"}})
  
    // fireEvent.click(screen.getByRole('button' , {name:/add/i}))
    //  fireEvent.change(cityPlaceholder , {target :{value:"Mumbai"}})

    const addbutton = screen.getByRole('button' , {name:/add/i})
    fireEvent.click(addbutton)
    

    // const cities = screen.getByRole('listitem')

    const deleteButton = screen.getByText('x')
  fireEvent.click(deleteButton)
  expect(screen.queryByText(/Indore/i)).not.toBeInTheDocument()

})