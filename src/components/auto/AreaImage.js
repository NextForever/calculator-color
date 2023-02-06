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
                    alt='Image Map'
                    areas={[
                        {
                            coords: [
                                145, 366, 138, 318, 140, 307, 141, 271, 138, 246, 143, 228, 145,
                                212, 156, 197, 187, 211, 123, 226, 128, 240, 137, 255, 161, 269,
                                192, 272, 205, 269, 219, 263, 239, 259, 270, 260, 319, 258, 373,
                                259, 383,
                            ],

                            alt: 'left wing',
                            title: 'left wing',
                            colorArea: '#f5f5f5',
                        },
                        {
                            coords: [
                                260, 385, 272, 387, 268, 356, 277, 317, 286, 292, 298, 277, 315,
                                270, 335, 274, 346, 350, 291, 414, 247, 308, 219, 300, 209, 301,
                                200, 286, 187, 272, 194, 271, 212, 259, 261,
                            ],

                            alt: 'left door',
                            title: 'left door',
                            colorArea: '#ff0',
                        },
                    ]}
                />
            </Grid>
        </Container>
    );
};

export default AreaImage;
