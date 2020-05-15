import React from 'react';
import { shallow } from 'enzyme';
import LoadingScreen from './index';

describe('<LoadingScreen />', () => {
    const app = shallow(<LoadingScreen loadingText={'Some text'} />);

    it('should check if LoadingScreen exist or not', () => {
        expect(app.find('.loading').exists()).toBeTruthy();
    });
    
    it('should check props passed in', () => {
        expect(app.find('.loading').props()).not.toBeUndefined();
    });
});