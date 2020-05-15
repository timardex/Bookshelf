import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('<App />', () => {
    const app = shallow(<App />);

    it('should check if App exist or not', () => {
        expect(app.find('.App').exists()).toBeTruthy();
    });

    it('should check if container exist or not', () => {
        expect(app.find('.container').exists()).toBeFalsy();
    });

    it('should check if clear-filter exist or not', () => {
        expect(app.find('.clear-filter').exists()).toBeFalsy();
    });
});