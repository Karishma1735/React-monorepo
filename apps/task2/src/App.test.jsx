import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import App from './App'

test("testing stopwatch timers" , ()=>{
    render(<App/>)
    expect(screen.getByText("Timer")).toBeInTheDocument()


})

test("start and stop button check" ,()=>{
    render(<App/>)
   
    const startbutton = screen.getByRole('button' , {name:/start/i})
        jest.useFakeTimers();
    fireEvent.click(startbutton)
    act(()=>{
           jest.advanceTimersByTime(1000)
    })

    fireEvent.click(screen.getByText(/stop/i))
 
})

test ("Check for reset button" , ()=>{
    render(<App/>)
    // const resetButton = screen.getByText(/reset/i)
    // fireEvent.click(resetButton)
    fireEvent.click(screen.getByText(/reset/i));
   expect(screen.getByText(/0 min 0 seconds/i)).toBeInTheDocument()
})
