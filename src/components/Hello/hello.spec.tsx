import * as React from 'react';
import Hello from './';
import { mount } from "enzyme";


describe('Test hello !', () => {
  test('hello render', () => {
    const HelloComponent = mount(
      <Hello/>
    );
    expect(HelloComponent.find('h1').html()).toMatch(/Hello React Typescript boilerplate. Fuck you/)
  })
});
