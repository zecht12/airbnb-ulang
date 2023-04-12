'use client';

interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle,center }) => {
    return ( 
    <div className={center ? 'text-center' : 'text-start'}>
        <div className="text-2xl font-bold font-poppins">
        {title}
        </div>
        <div className="font-light text-neutral-500 font-poppins mt-1">
            {subtitle}
        </div>
    </div>
    );
}

export default Heading;