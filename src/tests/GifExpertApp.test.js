import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";
import React from 'react';

describe('test on gifexpertapp', () => {
    test('should match the snapshot', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test('should show the categories', () => {
        const categories = ['Dani', 'Tay'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })

})
