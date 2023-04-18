'use client';

import { Range } from 'react-date-range';
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

const ListingReservation:React.FC<ListingReservationProps> = ({price,dateRange, totalPrice, onChangeDate, onSubmit, disabled, disabledDates }) => {
    return (
        <div className='bg-white rounded-xl border-[1px] overflow-hidden border-neutral-200 '>
            <div className='flex- flex-row gap-1 p-4 items-center'>
                <div className='text-2xl font-semibold'>
                    $ {price}
                </div>
                <div className='font-light text-neutral-600'>
                    night
                </div>
            </div>
            <hr />
            <Calendar
        </div>
    )
}

export default ListingReservation