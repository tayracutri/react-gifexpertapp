import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';




describe('test on gifgriditem', () => {

    const title = 'hi'
    const url = 'https://nojpx'
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('should show the component', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('should have a paragraph w the title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('should show an img with src and alt', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title);

    });



    test('should have an animation', () => {
        const div = wrapper.find('div');
        expect(div.prop('className')).toBe('card animate__animated fadeIn')
    })




});
