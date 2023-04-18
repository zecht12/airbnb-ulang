'use client'
import EmptyState from '@/components/EmptyState';
import React from 'react'
import { useEffect } from 'react'

interface ErrorStateProps { error: Error }
    const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
        useEffect(() => {
        console.error(error);
        }, [error]);

    return ( 
        <EmptyState title="ummm" subtitle="Something went wrong!" />
    );
}

export default ErrorState;