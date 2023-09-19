import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test("render without crashing", () => {
  render(<App />);
});

describe('renders InputSection and able/disable of send button', () => {
  test('get by text & placeholder', () => {
    render(<App />);
    const buttonElement = screen.getByText(/send/i);
    expect(buttonElement).toBeDisabled();
    const inputElement = screen.getByPlaceholderText(/type your question here.../i);
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: 'Test Input' } });
    expect(buttonElement).toBeEnabled();
    expect(inputElement.getAttribute("value")).toEqual("Test Input");
  });

  test('get by test ID', () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId("input");
    const button = getByTestId("button");
    expect(button).toBeDisabled();
    fireEvent.change(input, { target: { value: 'Test Input' } });
    expect(button).toBeEnabled();
    fireEvent.change(input, { target: { value: '' } });
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(input.getAttribute("value")).toEqual('');
  });

  test('click button to send and input is empty', async () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId("input");
    const button = getByTestId("button");
    fireEvent.change(input, { target: { value: 'Test Input' } });
    fireEvent.click(button);
    expect(input.getAttribute("value")).toEqual("");
  });
});

describe('Chat functioning properly', () => {
  test("chat appears after click sending", async () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId("input");
    const button = getByTestId("button");
    fireEvent.change(input, { target: { value: 'Test Input' } });
    fireEvent.click(button);
    await waitFor(() => {
      expect(getByTestId("chatDisplay")).toBeInTheDocument();
      expect(getByTestId("chatLast")).toBeInTheDocument();
    });
  });
});
