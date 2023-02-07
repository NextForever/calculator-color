import { Button, Container, Grid, TextField } from '@mui/material';
import { useState, useRef } from 'react';

import './newItem.scss';

const NewItem = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [imageDimensions, setImageDimensions] = useState(null);
    const [coords, setCoords] = useState([]);
    const imgViewRef = useRef(null);

    const handleImageChange = e => {
        const file = e.target.files[0];
        const fileType = file.type;
        const validImageTypes = ['image/jpeg', 'image/png'];

        if (!validImageTypes.includes(fileType)) {
            alert('Invalid image file type. Only jpeg and png files are allowed.');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
            const image = new Image();
            image.src = reader.result;
            image.onload = () => {
                setImageDimensions({
                    width: image.width,
                    height: image.height,
                });
            };
        };
        reader.readAsDataURL(file);
    };

    const handleMouseDown = e => {
        if (!imgViewRef.current.contains(e.target)) {
            return;
        }

        const newCoords = [...coords, [e.clientX, e.clientY]];
        setCoords(newCoords);
    };

    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}>
                    <Button variant='contained' component='label'>
                        Upload
                        <input hidden accept='image/*' type='file' onChange={handleImageChange} />
                    </Button>
                </Grid>
                <Grid item xs={10}>
                    {imageDimensions && (
                        <div>
                            Image dimensions: {imageDimensions.width} x{imageDimensions.height}
                        </div>
                    )}
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={10}>
                    {imagePreview && imageDimensions && (
                        <div
                            className='img-view'
                            style={{
                                width: `${imageDimensions.width}px`,
                                height: `${imageDimensions.height}px`,
                                position: 'relative',
                            }}
                            ref={imgViewRef}
                            onMouseDown={handleMouseDown}
                        >
                            {imagePreview && <img src={imagePreview} alt='img' width='100%' />}
                        </div>
                    )}
                </Grid>
                <Grid item xs={2}>
                    <span className='title-editeble'>Инструменты выделения областей</span>
                    {imagePreview && (
                        <TextField
                            fullWidth
                            label='Название детали'
                            id='fullWidth'
                            className='title-editeble'
                        />
                    )}

                    <div class='result'>
                        {coords.map((coord, index) => (
                            <div key={index}>
                                {coord[0]},{coord[1]},
                            </div>
                        ))}
                    </div>

                    {imagePreview && (
                        <Button variant='contained' id='paint'>
                            Сохранить
                        </Button>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
};

export default NewItem;
