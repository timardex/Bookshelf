import React from 'react';
import { shallow } from 'enzyme';
import BookSorter from './index';

describe('<BookSorter />', () => {
    const setSelectedFilterMock = jest.fn();
    const app = shallow(<BookSorter setSelectedFilter={setSelectedFilterMock} selectedFilter={'string'}/>);

    it('should check if BookSorter exist or not', () => {
        expect(app.find('.sorter-type').exists()).toBeTruthy();
    });

    it('should check props passed in', () => {
        expect(app.find('.sorter-type').props()).not.toBeUndefined();
    });

    it('should handle click events', () => {
        app.find('.filter-handler').at(0).simulate('click');
        expect(setSelectedFilterMock).toHaveBeenCalled();
    });
});