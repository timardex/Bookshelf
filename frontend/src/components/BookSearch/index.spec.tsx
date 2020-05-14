import React from 'react';
import { shallow } from 'enzyme';
import BookSearch from './index';

describe('<BookSearch />', () => {
    const setSearchrMock = jest.fn();
    const app = shallow(<BookSearch setSearch={setSearchrMock} search={'string'}/>)
    it('should check if BookSearch exist or not', () => {
        expect(app.find('.book-search').exists()).toBeTruthy();
    });
    it('should check props passed in', () => {
        expect(app.find('.book-search').props()).not.toBeUndefined();
    });
})