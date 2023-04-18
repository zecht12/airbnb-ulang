'use client';

import { Range } from "react-date-range";

import Buttons from "../Buttons";
import Calendar from "../inputs/CalendaR";

interface ListingReservationProps {
    price: number;
    dateRange: Range,
    totalPrice: number;
    onChangeDate: (value: Range) => void;
    onSubmit: () => void;
    disabled?: boolean;
    disabledDates: Date[];
}

const ListingReservation = () => {
    return (
        <div>ListingReservation</div>
    )
}

export default ListingReservation