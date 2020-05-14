import React from 'react';
import { shallow } from 'enzyme';
import BookSorter from './index';


describe('<BookSorter />', () => {
    const setSelectedFilterMock = jest.fn();
    const app = shallow(<BookSorter setSelectedFilter={setSelectedFilterMock}/>)
    it('should check if BookSorter exist or not', () => {
        expect(app.find('.sorter-type').exists()).toBeTruthy();
    });
    it('should check props passed in', () => {
        expect(app.find('.sorter-type').props()).not.toBeUndefined();
    });
})