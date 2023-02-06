import React from 'react';
import ImageMap from './ImageMap';
import convertible from '../../img/Convertible.png';

const Convertible = () => {
    return (
        <ImageMap
            src={convertible}
            width='800px'
            height='600px'
            areas={[
                {
                    coords: [
                        113, 354, 198, 378, 188, 343, 188, 263, 205, 198, 122, 190, 101, 206, 91,
                        244, 98, 288, 100, 310, 98, 331,
                    ],
                    alt: 'convertible Left Door',
                    title: 'convertible LeftDoor',
                },
                {
                    coords: [
                        303, 419, 357, 421, 592, 418, 754, 408, 746, 394, 754, 319, 754, 291, 743,
                        257, 737, 258, 741, 285, 738, 292, 581, 315, 358, 300, 338, 262, 328, 303,
                        295, 322,
                    ],
                    alt: 'convertible Bumper',
                    title: 'convertible Bumper',
                },
            ]}
        />
    );
};

export default Convertible;
