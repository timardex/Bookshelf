import React from 'react';
import { shallow } from 'enzyme';
import FilterType from './FilterType';

const bookshelf = [] as Array<any>
describe('<FilterType />', () => {
    const setSelectedFilterMock = jest.fn();
    const app = shallow(<FilterType bookshelf={bookshelf} type={'string'} setSelectedFilter={setSelectedFilterMock} selectedFilter={'string'}/>);

    it('should check if FilterType exist or not', () => {
        expect(app.find('.book-filter').exists()).toBeTruthy();
    });

    it('should check props passed in', () => {
        expect(app.find('.book-filter').props()).not.toBeUndefined();
    });

    it('should check if filter-handler exist or not', () => {
      expect(app.find('.filter-handler').exists()).not.toBeTruthy();
    });
});