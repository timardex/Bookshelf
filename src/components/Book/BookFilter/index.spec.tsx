import React from 'react';
import { shallow } from 'enzyme';
import BookFilter from './index';

const bookshelf = [] as Array<any>
describe('<BookFilter />', () => {
    const setSelectedFilterMock = jest.fn();
    const app = shallow(<BookFilter bookshelf={bookshelf} setSelectedFilter={setSelectedFilterMock} selectedFilter={'string'}/>);

    it('should check if BookFilter exist or not', () => {
        expect(app.find('.filter-type').exists()).toBeTruthy();
    });
    
    it('should check props passed in', () => {
        expect(app.find('.filter-type').props()).not.toBeUndefined();
    });
});