import React from 'react';
import { Seat } from './Seat';
import { seatsType } from './../../utils/customProps';

export const Seats = (props) => (
    <tbody>
    {
        props.seats.map((row, rowInd) =>
            (<tr key={rowInd}>
                <td><b>Row {rowInd + 1}</b> </td>
                { row.map((seat, colInd) =>
                    (<td key={colInd}>
                        <Seat
                            state={seat}
                            row={rowInd}
                            col={colInd}
                        />
                    </td>)
                    )
                }
            </tr>))
    }
    </tbody>
)

Seats.propTypes = {
    seats: seatsType.isRequired
};
