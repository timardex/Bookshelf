import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

const bookshelf = [] as Array<any>;

describe('<Header />', () => {
    const setSelectedFilterMock = jest.fn();
    const setSearchMock = jest.fn();
    const app = shallow(<Header
        booksLength={8}
        selectedFilter={'string'}
        setSelectedFilter={setSelectedFilterMock}
        search={'string'}
        setSearch={setSearchMock}
        bookshelf={bookshelf}
    />);

    it('should check if Header exist or not', () => {
        expect(app.find('header').exists()).toBeTruthy();
    });
    
    it('should check props passed in', () => {
        expect(app.find('header').props()).not.toBeUndefined();
    });
});