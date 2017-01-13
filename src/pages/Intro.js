import React from 'react';
import { SeatsSelector } from './../components/SeatsSelector';

export const IntroPage = (props) => {
    return (
        <div>
            <h1>Select Your Seat</h1>
            <SeatsSelector/>
        </div>
    );
};
