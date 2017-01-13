import {
    SEAT_TOGGLE,
    SEAT_REMOVE,
    SEAT_REMOVE_ALL
} from './actionList.js';

/**
 * If seat is free, select it, otherwise free it
 * @param {number} row
 * @param {number} col
 */
export const seatToggle = (row, col) => ({
    type: SEAT_TOGGLE,
    row: row,
    col: col
});

/**
 * Free selected seat
 * @param {number} row
 * @param {number} col
 */
export const removeSeat = (row, col) => ({
    type: SEAT_REMOVE,
    row: row,
    col: col
});

/**
 * Free all selected seats
 */
export const removeAllSeats = () => ({
    type: SEAT_REMOVE_ALL
});
