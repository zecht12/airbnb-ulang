'use client'

import React from 'react'
import useCountries from '@/app/hooks/useCountries';
import Select from 'react-select';

export type CountrySelectValue = {
    flag: string;
    label: string;
    latlng: number[],
    region: string;
    value: string
}

interface CountrySelectProps {
    value?: CountrySelectValue;
    onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
    const {getAll} = useCountries();

    return (
        <div>
            <Select placeholder="Anywhere" isClearable options={getAll()} value={value} onChange={(value) => onChange(value as Coun)} />
        </div>
    )
}

export default CountrySelect