import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeSeat, removeAllSeats } from './../redux/actions';
import { seatsType } from './../utils/customProps';
import { Seats } from './Seats/Seats';
import { Legend } from './Legend';
import { SelectedSeats } from './Selected/SelectedSeats';
import './SeatsSelector.css';

export const SeatsSelectorComponent = (props) => (
    <div className="seats-selector">
        <table>
            <thead>
                <tr>
                    <th>{/* Empty Cell */}</th>
                    { props.seats[0].map((seat, colInd) =>
                        (<th key={colInd}> {colInd + 1} </th>)) }
                </tr>
            </thead>
            <Seats seats={props.seats}/>
        </table>
        <div className="selected-seats">
            <div><strong>Selected Seats ({props.selected.length}): </strong></div>
            <SelectedSeats
                onRemoveClick={props.onRemoveClick}
                selected={props.selected}
                seatsPerRow={props.seats[0].length}/>
            {
                (props.selected.length > 1)
                    ? <a href="#" onClick={() => props.onRemoveAllClick()}>remove all seats</a>
                    : null
            }
        </div>
        <Legend
            freeSeats={props.seats.length * props.seats[0].length - props.selected.length - props.occupied}
            occupiedSeats={props.occupied}
            selectedSeats={props.selected.length}/>
    </div>
);

SeatsSelectorComponent.propTypes = {
    onRemoveAllClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    occupied: PropTypes.number.isRequired,
    seats: seatsType.isRequired,
    selected: PropTypes.arrayOf(PropTypes.number).isRequired
};

export const SeatsSelector = connect(
    (state) => ({
        occupied: state.occupied,
        seats: state.seats,
        selected: state.selected
    }),
    ((dispatch) => ({
        onRemoveAllClick: () => dispatch(removeAllSeats()),
        onRemoveClick: (row, col) => dispatch(removeSeat(row, col))
    }))
)(SeatsSelectorComponent);
