import React from 'react';
import { shallow, setState } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input, { UnconnectedInput } from './Input';
import { guessWord } from './actions';

/**
 * Factory function to create a ShallowWrapper for the Input component
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

setup();

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test('renders component without error', () => {
      const componentInput = findByTestAttr(wrapper, 'component-input');
      expect(componentInput.length).toBe(1);
    });
    test('renders the input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });
    test('renders the submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });
  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test('renders the component without error', () => {
      const componentInput = findByTestAttr(wrapper, 'component-input');
      expect(componentInput.length).toBe(1);
    });
    test('does not render the input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });
    test('does not render the submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    });
  });
});

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({
      success,
    });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('guessWord action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe('update state', () => {});

describe('guessWord action creator', () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = 'train';

  beforeEach(() => {
    // set up mock for 'guessWord'
    guessWordMock = jest.fn();
    // const props = {
    //   guessWord: guessWordMock,
    // };
    wrapper = shallow(<UnconnectedInput guessWord={guessWordMock} />);

    // add value to the input box
    wrapper.setState({ currentGuess: guessedWord });

    // simulate the click
    const submit = findByTestAttr(wrapper, 'submit-button');
    submit.simulate('click', { preventDefault() {} });
  });

  test('calls `guessWord` when button is clicked', () => {
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });
  test('calls `guessWord` with input value as argument', () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  });
  test('input box clears on submit', () => {
    expect(wrapper.state('currentGuess')).toBe('');
  });
});
