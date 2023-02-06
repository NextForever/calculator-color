import React from 'react';
import ImageMap from './ImageMap';
import suv from '../../img/SUV.png';

const SUV = () => {
    return (
        <ImageMap
            src={suv}
            width='800px'
            height='600px'
            areas={[
                {
                    coords: [
                        601, 85, 621, 177, 639, 198, 641, 231, 637, 294, 642, 312, 635, 352, 692,
                        333, 706, 291, 731, 223, 730, 182, 714, 165, 660, 92, 653, 85,
                    ],
                    alt: ' suv Right Rear Door',
                    title: ' suv RightRearDoor',
                },
                {
                    coords: [
                        397, 271, 429, 295, 433, 311, 409, 340, 393, 372, 384, 403, 383, 417, 387,
                        436, 310, 448, 233, 441, 170, 435, 75, 422, 44, 416, 14, 396, 7, 373, 13,
                        351, 10, 318, 11, 301, 21, 289, 44, 306, 42, 273, 48, 275, 49, 314, 61, 323,
                        78, 328, 108, 335, 176, 337, 208, 334, 232, 322, 256, 284, 287, 278, 271,
                        298, 262, 317, 283, 318, 333, 308, 367, 299, 385, 286,
                    ],
                    alt: ' suv Bumper SUV',
                    title: ' suv BumperSUV',
                },
            ]}
        />
    );
};

export default SUV;
