import React, { PropTypes } from 'react';
import { getRowCol } from './../../utils/posTransform';

export const SelectedSeat = (props) => {
    const { row, col } = getRowCol(props.seatNumber, props.seatsPerRow);
    return (
        <div>
            Row: {row + 1}, Col: {col + 1}&nbsp;
            (<a href="#" onClick={() => props.onRemoveClick(row, col)}>remove</a>)
        </div>
    );
};

SelectedSeat.propTypes = {
    onRemoveClick: PropTypes.func.isRequired,
    seatNumber: PropTypes.number.isRequired,
    seatsPerRow: PropTypes.number.isRequired
};
