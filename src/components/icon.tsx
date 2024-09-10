/** @format */

import React from "react";

interface IIcon {
    iconName: string;
    fill?: number;
    wght?: number;
    grad?: number;
    opsz?: number;
    className?: string;
    dark?: boolean;
    darkInactive?: boolean;
}

export default function Icon({
    iconName,
    fill = 0,   //  0   - 1
    wght = 100, //  100 - 700 
    grad = -50, // -50  - 200
    opsz = 20,  //  20  - 48
    className,
    dark = false,
    darkInactive = false
}: IIcon) {
    return (
        <div style={{ fontVariationSettings: `'FILL' ${fill}, 'wght' ${wght}, 'GRAD' ${grad}, 'opsz' ${opsz}`, display: "flex", justifyContent: "center", alignItems: "center" }} className={className}>
            <span className='material-symbols-outlined'>{iconName}</span>
        </div>
    );
}

{
    /*	${dark && "dark"} ${
                              darkInactive && "dark-inactive"
                    }*/
}
