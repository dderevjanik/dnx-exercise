import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { seatToggle } from './../../redux/actions';
import './Seat.css';

export const SeatComponent = (props) => (
    <div
        className={`seat ${props.state
            ? (props.state === 1)
                ? 'selected'
                : 'occupied'
            : 'free'}`}
        onClick={() => props.onSeatClick(props.row, props.col)}>

        <input
            type="checkbox"
            checked={props.state}
            onChange={() => null}/>
    </div>
);

SeatComponent.propTypes = {
    col: PropTypes.number.isRequired,
    onSeatClick: PropTypes.func.isRequired,
    row: PropTypes.number.isRequired,
    state: PropTypes.number.isRequired
};

export const Seat = connect(
    () => ({}),
    (dispatch) => ({
        onSeatClick: (row, col) => dispatch(seatToggle(row, col))
    }),
)(SeatComponent)
