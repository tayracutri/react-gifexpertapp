import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { useFecthGifs } from './hooks/useFecthGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFecthGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeInDown"> {category} </h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="grid-card">

                {data.map(img => (
                    <GifGridItem key={img.id} {...img} />

                ))
                }
            </div>

        </>
    )
}
GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}