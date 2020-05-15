import React from 'react';
import { shallow } from 'enzyme';
import ClearFilter from './index';

describe('<ClearFilter />', () => {
    const setSelectedFilterMock = jest.fn();
    const setSearchMock = jest.fn();
    const app = shallow(<ClearFilter btnText={'Clear'} setSelectedFilter={setSelectedFilterMock} setSearch={setSearchMock}/>);

    it('should check if ClearFilter exist or not', () => {
        expect(app.find('.clear-filter').exists()).toBeTruthy();
    });
    
    it('should check props passed in', () => {
        expect(app.find('.clear-filter').props()).not.toBeUndefined();
    });
    it('should handle click events', () => {
      app.find('.btn').simulate('click')
    });
});