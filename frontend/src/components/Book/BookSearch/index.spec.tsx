import React from 'react';
import { shallow } from 'enzyme';
import BookSearch from './index';

describe('<BookSearch />', () => {
    const setSearchrMock = jest.fn();
    const app = shallow(<BookSearch setSearch={setSearchrMock} search={'string'}/>);

    it('should check if BookSearch exist or not', () => {
        expect(app.find('.book-search').exists()).toBeTruthy();
    });

    it('should check props passed in', () => {
        expect(app.find('.book-search').props()).not.toBeUndefined();
    });

    it('should test if input search value is changed', () => {
        app.find('input').simulate('change', {target: {value: ''}});
        expect(app.find('input').text()).not.toEqual('something')
    });
});