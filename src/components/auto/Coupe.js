import React from 'react';
import ImageMap from './ImageMap';
import coupe from '../../img/Coupe.png';

const Coupe = () => {
    return (
        <ImageMap
            src={coupe}
            width='800px'
            height='600px'
            areas={[
                {
                    coords: [
                        338, 250, 385, 249, 408, 258, 429, 278, 449, 266, 468, 265, 485, 278, 498,
                        302, 505, 340, 503, 369, 529, 361, 530, 349, 527, 336, 531, 262, 529, 237,
                        525, 209, 523, 197, 524, 188, 503, 189, 496, 201, 468, 209, 428, 214, 386,
                        227,
                    ],
                    alt: 'coupe Right Wing',
                    title: 'coupe RightWing',
                },
                {
                    coords: [502, 370, 533, 362, 658, 337, 689, 329, 720, 320, 711, 354, 495, 398],
                    alt: 'coupe Right Threshold',
                    title: 'coupe RightThreshold',
                },
                {
                    coords: [
                        530, 361, 526, 340, 527, 242, 527, 229, 520, 197, 538, 151, 554, 123, 562,
                        112, 579, 107, 602, 107, 624, 109, 628, 119, 644, 183, 664, 201, 669, 215,
                        673, 246, 664, 288, 662, 313, 655, 337,
                    ],
                    alt: 'coupe Door',
                    title: 'coupe door',
                },
            ]}
        />
    );
};

export default Coupe;
