import React from "react";
interface Props {
    heading: string;
    isUppercase?: boolean;
    styles?: string;
}
function GradientHeading({ heading, isUppercase = true, styles }: Props) {
    return (
        <h2 className={`max-w-[520px] m-auto text-4xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-emerald-600 to-indigo-800 bg-clip-text text-transparent ${styles}`}>
            {isUppercase ? heading.toUpperCase() : heading}
        </h2>
    );
};

export { GradientHeading };
