import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('<App />', () => {
    const app = shallow(<App />)
    it('should check if App exist or not', () => {
        expect(app.find('.App').exists()).toBeTruthy();
    })
})