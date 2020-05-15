import React from 'react';
import { shallow } from 'enzyme';
import LoadMore from './index';

describe('<LoadMore />', () => {
    const setNumberOfBooksMock = jest.fn();
    const app = shallow(<LoadMore numberOfBooks={8} setNumberOfBooks={setNumberOfBooksMock}/>);

    it('should check if LoadMore exist or not', () => {
        expect(app.find('.load-more').exists()).toBeTruthy();
    });
    
    it('should check props passed in', () => {
        expect(app.find('.load-more').props()).not.toBeUndefined();
    });
    it('should handle click events', () => {
      app.find('.btn').simulate('click')
    });
});