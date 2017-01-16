import { SEAT_TOGGLE, SEAT_REMOVE, SEAT_REMOVE_ALL } from './actionList';
import { getRowCol, getPosition } from './../utils/posTransform';
import { add, remove } from './../utils/immutableHelpers';

export const appReducer = (state = {}, action) => {
    const rowLength = state.seats[0].length;
    switch(action.type) {
        case SEAT_TOGGLE: {
            const { row, col } = action;
            const seatState = state.seats[row][col];
            // if seat is already occupied, do nothing
            if (seatState === 2) {
                return { ...state }
            }
            // toggle seat state
            state.seats[row][col] = (1 - seatState);
            // if seat is selected, remove it from selected otherwise add it to selected
            state.selected = seatState
                ? remove(state.selected, state.selected.indexOf(getPosition(row, col, rowLength)))
                : add(state.selected, getPosition(row, col, rowLength));
            return { ...state }
        }
        case SEAT_REMOVE: {
            const { row, col } = action;
            state.seats[row][col] = 0;
            state.selected = remove(state.selected, state.selected.indexOf(row * state.seats[0].length + col));
            return { ...state };
        }
        case SEAT_REMOVE_ALL: {
            state.selected.forEach((seat) => {
                const {row, col} = getRowCol(seat, rowLength);
                state.seats[row][col] = 0;
            });
            state.selected = [];
            return { ...state };
        }
        default:
            return state;
    }
};
