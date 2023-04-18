'use client'

import React from 'react'
import useCountries from '@/app/hooks/useCountries';

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

const CountrySelect = () => {
    return (
        <div>CountrySelect</div>
    )
}

export default CountrySelect