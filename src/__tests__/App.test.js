import React from "react";
import {shallow} from 'enzyme';
import AppComponent from '../../src/App'; 
let wrapper
beforeEach(()=>{
wrapper = shallow(<AppComponent/>)
})
describe('Testing App',()=>{
    it('Render as expected',()=>{
                expect(wrapper).toMatchSnapshot();
    })
    test('',()=>{})
})