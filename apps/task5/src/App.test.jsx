import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App';

test("testing progress bar" , ()=>{
    render(<App/>)
     const heading = screen.getByText(/Progress bar/i);
    expect(heading).toBeInTheDocument();

       const input = screen.getByLabelText(/Input Percentage/i);
    expect(input).toBeInTheDocument();

    fireEvent.change(input , {target:{value:"150"}})
    

})



  test('updates progress bar', () => {
    render(<App />);
    const input = screen.getByLabelText(/Input Percentage/i);
    const progressBar = screen.getByText(/0/).querySelector('.progress')
    fireEvent.change(input, { target: { value: 50 } });

    expect(progressBar).toHaveStyle('width: 50%');
  });