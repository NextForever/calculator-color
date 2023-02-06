import React from 'react';
import ImageMap from './ImageMap';
import sedan from '../../img/Sedan.png';

const Sedan = () => {
    return (
        <ImageMap
            src={sedan}
            width='800px'
            height='600px'
            areas={[
                {
                    coords: [
                        494, 212, 502, 260, 508, 300, 519, 391, 635, 355, 631, 256, 626, 220, 612,
                        202, 587, 123, 555, 127, 539, 137, 522, 153,
                    ],
                    alt: 'sedan Right Door',
                    title: 'sedan RightDoor',
                },
                {
                    coords: [
                        23, 317, 39, 335, 35, 349, 102, 354, 206, 357, 209, 343, 251, 344, 383, 327,
                        404, 323, 397, 338, 392, 380, 384, 423, 363, 450, 323, 447, 319, 440, 242,
                        445, 44, 430, 30, 427, 16, 414, 11, 403, 15, 363, 10, 349, 15, 323,
                    ],
                    alt: 'sedan Bumper',
                    title: 'sedan Bumper',
                },
            ]}
        />
    );
};

export default Sedan;
