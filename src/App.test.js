// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidityYotta title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidityYotta/i);
    expect(titleElement).toBeInTheDocument();
});
