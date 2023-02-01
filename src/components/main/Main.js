import { useState } from 'react';
import { Container, Grid, Radio } from '@mui/material';

import './main.scss';

let carTypes = [
    { type: 'Sedan', img: 'sedan.jpg' },
    { type: 'Hatchback', img: 'hatchback.jpg' },
    { type: 'SUV', img: 'suv.jpg' },
    { type: 'Coupe', img: 'coupe.jpg' },
    { type: 'Convertible', img: 'convertible.jpg' },
];

const Main = () => {
    const [selectedType, setSelectedType] = useState(null);

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    {carTypes.map(carType => (
                        <div key={carType.type}>
                            <Radio
                                type='radio'
                                id={carType.type}
                                value={carType.type}
                                checked={selectedType === carType.type}
                                onChange={e => setSelectedType(e.target.value)}
                            />
                            <label htmlFor={carType.type}>{carType.type}</label>
                        </div>
                    ))}
                </Grid>
                <Grid item xs={12} md={9}>
                    <div>
                        {selectedType && <img src={selectedType.img} alt={selectedType.type} />}
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Main;
