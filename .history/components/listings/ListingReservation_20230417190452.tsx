'use client';

import { Range } from '';
import Buttons from "../Buttons";
import Calendar from "../inputs/Calendar";

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