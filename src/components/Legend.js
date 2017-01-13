import React, { PropTypes } from 'react';
import './Legend.css';

export const Legend = (props) => (
    <div className="legend">
        <span className="legend-green">&nbsp;</span> ({props.freeSeats}) Free Seats
        <span className="legend-yellow">&nbsp;</span> ({props.selectedSeats}) Selected Seats
        <span className="legend-red">&nbsp;</span> ({props.occupiedSeats}) Occupied Seats
    </div>
);

Legend.propTypes = {
    freeSeats: PropTypes.number.isRequired,
    occupiedSeats: PropTypes.number.isRequired,
    selectedSeats: PropTypes.number.isRequired
};
