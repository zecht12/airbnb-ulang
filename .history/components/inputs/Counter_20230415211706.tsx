'use client'

import React, { useCallback } from 'react'

interface CounterProps {
    title: string;
    subtitle: string;
    value: number;
    onChange: (value: number) => void;
    }

const Counter: React.FC<CounterProps> = ({ title,subtitle,value,onChange }) => {
    const onAdd = useCallback(() => {
        onChange(value + 1);
    }, [onChange, value]);
    
    const onReduce = useCallback(() => {
        if (value === 1) {
            return;
        }
    
        onChange(value - 1);
    }, [onChange, value]);

    return (
        <div className='flex flex-row items-center justify-between'>
            <div className="flex flex-col">
                <div className="font-medium">
                    {title}
                </div>
                <div className="text-gray-500 font-light">
                    {subtitle}
                </div>
            </div>
            div.flex.flex-row.items-center
        </div>
    )
}

export default Counter