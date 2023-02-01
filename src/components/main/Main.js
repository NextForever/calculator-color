import { useState } from 'react';
import { Container, Grid, Radio } from '@mui/material';

import './main.scss';
import sedan from '../../img/Sedan.png';
import hatchback from '../../img/Hatchback.png';
import suv from '../../img/SUV.png';
import coupe from '../../img/Coupe.png';
import convertible from '../../img/Convertible.png';

let carTypes = [
    { type: 'Sedan', img: sedan, id: 1 },
    { type: 'Hatchback', img: hatchback, id: 2 },
    { type: 'SUV', img: suv, id: 3 },
    { type: 'Coupe', img: coupe, id: 4 },
    { type: 'Convertible', img: convertible, id: 5 },
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
                            carTypes.find(carType => carType.type === selectedType) && (
                                <img
                                    src={
                                        carTypes.find(carType => carType.type === selectedType).img
                                    }
                                    alt={selectedType}
                                />
                            )}
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Main;
