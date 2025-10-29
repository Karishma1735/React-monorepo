import '@testing-library/jest-dom'
import { act, fireEvent, render, screen } from '@testing-library/react'
import App from './App'

test("testing the max count" ,()=>{
    render(<App/>)

    expect(screen.getByText(/No. of Clicks until timer expires/i))
    jest.useFakeTimers()

    const timer  = screen.getByTestId(/timer/i)

    expect(timer).toHaveTextContent('10')
    act(()=>{
        jest.advanceTimersByTime(1000)
    }
)


 const button = screen.getByText('+');
  fireEvent.click(button);
  fireEvent.click(button);

  expect(screen.getByText('2')).toBeInTheDocument();

    expect(screen.getByText(/Time Left: 0/i)).toBeInTheDocument();
  expect(screen.queryByText('+')).not.toBeInTheDocument();


})
