import { useState } from 'react';
import { Container, Grid, Radio } from '@mui/material';
import Hatchback from '../auto/Hatchback';
import Sedan from '../auto/Sedan';
import SUV from '../auto/SUV';
import Coupe from '../auto/Coupe';
import Convertible from '../auto/Convertible';

let carTypes = [
    { type: 'Sedan', img: <Sedan /> },
    { type: 'Hatchback', img: <Hatchback /> },
    { type: 'SUV', img: <SUV /> },
    { type: 'Coupe', img: <Coupe /> },
    { type: 'Convertible', img: <Convertible /> },
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
                        {selectedType &&
                            carTypes.find(carType => carType.type === selectedType) &&
                            carTypes.find(carType => carType.type === selectedType).img}
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Main;
