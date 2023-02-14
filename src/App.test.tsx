import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import '@testing-library/jest-dom'
import {App} from "./App";
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

test('full app rendering/navigating', async () => {
    render(<App />, {wrapper: BrowserRouter})
    const user = userEvent.setup();
    expect(screen.getByText(/a-store/i)).toBeInTheDocument();
    await user.click(screen.getByText(/made-in-alpha/i))
    expect(screen.getByText(/Сделано в Альфе/i)).toBeInTheDocument()
})