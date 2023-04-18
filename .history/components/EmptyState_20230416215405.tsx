
'use client';

import { useRouter } from "next/navigation";

import Heading from "./Heading";
import Buttons from "./Buttons";

interface EmptyStateProps {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title = "No exact matches", subtitle = "Try changing or removing some of your filters.", showReset }) => {
    const router = useRouter();
    return (
        <div className="h-[60vh] flex-flex-col justify-center gap-2 items-center ">
            <Heading title={title} subtitle={subtitle} center />
            <div className="w-48 mt-4">
                <Buttons onClick={()=> router.push('/')} outline label="Remove all filter" />
            </div>
        </div>
    )
}

export default EmptyState