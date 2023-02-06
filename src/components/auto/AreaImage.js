import React from 'react';
import ImageMap from './ImageMap';
import hatchback from '../../img/Hatchback.png';
import { Container, Grid } from '@mui/material';

const AreaImage = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <ImageMap
                    src={hatchback}
                    width='800px'
                    height='600px'
                    areas={[
                        {
                            coords: [
                                142, 366, 259, 384, 261, 318, 260, 278, 260, 263, 263, 239, 267,
                                225, 269, 214, 274, 196, 242, 134, 219, 122, 186, 121, 172, 155,
                                161, 191, 145, 206, 140, 240, 139, 270, 138, 320,
                            ],
                            alt: 'Leftv Door',
                            title: 'LeftDoor',
                            colorArea: 'rgb(207, 119, 35)',
                        },
                        {
                            coords: [
                                300, 199, 306, 218, 414, 246, 497, 248, 574, 244, 638, 244, 698,
                                246, 722, 248, 730, 247, 703, 232, 672, 220, 597, 200, 454, 194,
                            ],
                            alt: 'Hood',
                            title: 'Hood',
                            colorArea: 'rgb(207, 119, 35)',
                        },
                        {
                            coords: [
                                272, 384, 270, 364, 272, 342, 279, 317, 288, 290, 301, 273, 321,
                                269, 335, 275, 351, 289, 377, 269, 411, 247, 306, 219, 298, 201,
                                287, 186, 274, 191, 271, 215, 263, 256, 263, 323, 262, 382,
                            ],
                            alt: 'Left Wing',
                            title: 'LeftWing',
                            colorArea: 'rgb(207, 119, 35)',
                        },
                        {
                            coords: [
                                76, 355, 142, 363, 138, 328, 140, 314, 142, 296, 139, 265, 141, 231,
                                144, 212, 155, 199, 186, 120, 151, 127, 122, 140, 96, 162, 69, 198,
                                52, 215, 48, 247, 49, 265, 51, 279,
                            ],
                            alt: 'Left Rear Door',
                            title: 'LeftRearDoor',
                            colorArea: 'rgb(207, 119, 35)',
                        },
                        {
                            coords: [75, 356, 272, 386, 277, 402, 80, 380, 72, 374],
                            alt: 'Threshold',
                            title: 'Threshold',
                            colorArea: 'rgb(207, 119, 35)',
                        },
                    ]}
                />
            </Grid>
        </Container>
    );
};

export default AreaImage;
