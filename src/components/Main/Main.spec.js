import React from 'react';
import renderer from 'react-test-renderer';
import Main from './Main';

describe('Maintest Component', () => {
  it('displays correctly without props', () => {
    const component = renderer.create(<Main />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
