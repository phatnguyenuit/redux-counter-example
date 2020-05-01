import '@testing-library/jest-dom/extend-expect';
import { cleanup, fireEvent, render } from '@testing-library/react';

import Counter from '../Counter';
import React from 'react';
import { CounterProps } from '../Counter';

afterEach(cleanup);

describe('Test Counter', () => {
  const props = {
    id: 1,
    text: 'Counter 1',
    value: 0,
    onIncrease: jest.fn(),
    onDecrease: jest.fn(),
    onDelete: jest.fn(),
    onUpdate: jest.fn()
  } as CounterProps;
  const newProps = {
    ...props,
    id: 10,
    text: 'Counter 10',
    value: 10
  };
  it('should render display view without error', () => {
    const { getByTestId, rerender } = render(<Counter {...props} />);

    const text = getByTestId('text');
    const value = getByTestId('value');
    expect(text).toHaveTextContent('Counter 1');
    expect(value).toHaveTextContent('0');

    rerender(<Counter {...newProps} />);
    expect(text).toHaveTextContent('Counter 10');
    expect(value).toHaveTextContent('10');
  });
  it('should render editable view', () => {
    const { getByTestId } = render(<Counter {...props} />);

    let text = getByTestId('text');
    let value = getByTestId('value');
    const button_edit = getByTestId('button-edit');
    expect(text).toHaveTextContent('Counter 1');
    expect(value).toHaveTextContent('0');

    fireEvent.click(button_edit);
    const editableForm = getByTestId('counter-editable');
    const buttonCancel = getByTestId('button-cancel');
    text = getByTestId('text');
    value = getByTestId('value');

    expect(editableForm).toBeTruthy();
    expect(text.value).toEqual('Counter 1');
    expect(value.value).toEqual('0');

    fireEvent.click(buttonCancel);
    const displayCounter = getByTestId('counter');
    expect(displayCounter).toBeTruthy();
  });
});
