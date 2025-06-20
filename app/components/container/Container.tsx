import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

function Container({ children }: Props) {
    return (
        <div className="px-4 lg:px-[7%] 2xl:px-0 max-w-[1600px] m-auto">
            {children}
        </div>
    );
};

export { Container };