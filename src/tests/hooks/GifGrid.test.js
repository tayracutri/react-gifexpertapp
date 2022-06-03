import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFecthGifs } from '../../components/hooks/useFecthGifs';
import '@testing-library/jest-dom';
jest.mock('../../components/hooks/useFecthGifs')





describe('test on GifGrid', () => {
    const category = 'Dani';


    test('should show istelf correctly', () => {

        useFecthGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />)

        expect(wrapper).toMatchSnapshot();
    });


    test('should show itmes after img being uploaded', () => {


        const data = [{
            id: 1,
            url: 'htpps://google.com',
            title: 'Dani'
        },
        {
            id: 2,
            url: 'htpps://facebook.com',
            title: 'any title'
        },
        ]

        useFecthGifs.mockReturnValue({
            data,
            loading: false
        });


        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(data.length)


    });

});
