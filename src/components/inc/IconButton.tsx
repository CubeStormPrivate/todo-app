import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


interface IconButtonProps {
    icon: IconProp,
    styles?: string,
    handler?: (param?: any) => void
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, styles, handler }) => {
    return (
        <div
            className={`${styles} text-lg font-bold uppercase rounded-md m-2`}
            onClick={handler}
        >
            <FontAwesomeIcon
                icon={icon}
            />
        </div>
    );
}