import * as React from 'react';
import {render, screen} from "@testing-library/react";
// import { Thing } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const Component = () => <div>Component</div>

    render(<Component />)
    const component = screen.getByText("Component");
    expect(component !== null).toBeTruthy()
  });
});