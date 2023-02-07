import { Button, Container, Grid } from '@mui/material';
import { useState } from 'react';

const NewItem = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [imageDimensions, setImageDimensions] = useState(null);

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
                    {imagePreview && (
                        <div
                            className='img-view'
                            style={{
                                width: `${imageDimensions.width}px`,
                                height: `${imageDimensions.height}px`,
                            }}
                        >
                            {imageDimensions && (
                                <div>
                                    Image dimensions: {imageDimensions.width} x
                                    {imageDimensions.height}
                                </div>
                            )}
                        </div>
                    )}
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={10}>
                    {imagePreview && <img className='img-view' src={imagePreview} alt='img' />}
                </Grid>
                <Grid item xs={2}>
                    Инструменты выделения областей
                </Grid>
            </Grid>
        </Container>
    );
};

export default NewItem;
