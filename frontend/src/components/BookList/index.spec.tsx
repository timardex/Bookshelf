import React from 'react';
import { shallow } from 'enzyme';
import BookList from './index';

const bookshelf = [] as Array<any>
describe('<BookList />', () => {
    const app = shallow(<BookList bookshelf={bookshelf} selectedFilter={'string'} search={'string'}/>);

    it('should check if BookList exist or not', () => {
        expect(app.find('.book-list').exists()).toBeTruthy();
    });

    it('should check props passed in', () => {
        expect(app.find('.book-list').props()).not.toBeUndefined();
    });
});