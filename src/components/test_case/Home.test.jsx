/* eslint linebreak-style: ["error", "windows"] */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../Home/Home';
import store from '../../redux/store';

require('@testing-library/jest-dom');

describe('Test for Rocket component', () => {
  it('renders Rocket component without any error', () => {
    const output = render(<Provider store={store}><Home /></Provider>);
    expect(output).toMatchSnapshot();
  });
});
