import React, { PropTypes } from 'react';
import { SelectedSeat } from './SelectedSeat';

export const SelectedSeats = (props) => (
    <ul>
    {
        props.selected.map((seatNumber, ind) => (
            <li key={ind}>
                <SelectedSeat
                    onRemoveClick={props.onRemoveClick}
                    seatNumber={seatNumber}
                    seatsPerRow={props.seatsPerRow}
                />
            </li>
        ))
    }
    </ul>
);

SelectedSeats.propTypes = {
    onRemoveClick: PropTypes.func.isRequired,
    selected: PropTypes.arrayOf(PropTypes.number).isRequired,
    seatsPerRow: PropTypes.number.isRequired
};
