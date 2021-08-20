import React, { useEffect, useState } from 'react';
import { useFecthGifs } from './hooks/useFecthGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from './helpers/GetGifs';


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
