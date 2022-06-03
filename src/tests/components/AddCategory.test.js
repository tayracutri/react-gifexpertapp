import { shallow } from 'enzyme'
import React from 'react';
import { AddCategory } from "../../components/AddCategory"
import '@testing-library/jest-dom';

describe('test on addcategory', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should show the component', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('should simulate a change on the input', () => {
        const input = wrapper.find('input');
        const value = 'tayra';


        input.simulate('change', { target: value })
    });


    test('should simulate a submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should call setcategories and clean textbox', () => {
        const value = 'hi';

        //simulate inputchange
        wrapper.find('input').simulate('change', { target: { value } });

        // simulate submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(wrapper.find('input').prop('value')).toBe('hi');
    })
});
