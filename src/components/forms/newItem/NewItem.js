import { Button, Container, Grid, TextField } from '@mui/material';
import { useState, useRef, Fragment } from 'react';

import './newItem.scss';

const NewItem = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [imageDimensions, setImageDimensions] = useState(null);
    const [coords, setCoords] = useState([]);
    const [polygonClicked, setPolygonClicked] = useState(false);
    const [circleClicked, setCircleClicked] = useState([]);
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

    const handleClick = e => {
        if (e.target.nodeName === 'circle') {
            let currentCircleIndex = e.target.getAttribute('data-coord-index');
            let currentCircleClicked = circleClicked;
            if (!currentCircleClicked[currentCircleIndex]) {
                currentCircleClicked[currentCircleIndex] = true;
                setCircleClicked(currentCircleClicked);
            }
        } else if (e.target.nodeName === 'polygon') {
            if (!polygonClicked) {
                setPolygonClicked(true);
            }
        }
    };

    const handleMouseDown = e => {
        if (!imgViewRef.current.contains(e.target)) {
            return;
        }

        const newCoords = [...coords, [e.nativeEvent.offsetX, e.nativeEvent.offsetY]];
        setCoords(newCoords);
    };
    const polygonPoints = coords.map(coord => coord.join(',')).join(',');
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
                            <svg
                                style={{
                                    position: 'absolute',
                                    inset: '0px',
                                    height: '100%',
                                    width: '100%',
                                }}
                            >
                                <polygon
                                    points={polygonPoints}
                                    style={{
                                        stroke: 'none',
                                        fill: 'rgba(207, 119, 35, 0.60)',
                                        cursor: 'pointer',
                                    }}
                                ></polygon>
                                {coords.map((coord, index) => (
                                    <circle
                                        key={index}
                                        cx={coord[0]}
                                        cy={coord[1]}
                                        r={5}
                                        className='image-mapper-point'
                                        data-area-index={0}
                                        data-coord-index={0}
                                        style={{
                                            fill: 'rgb(255, 255, 255)',
                                            stroke: 'rgb(51, 51, 51)',
                                            strokeWidth: 1,
                                            opacity: 0.6,
                                            cursor: 'pointer',
                                        }}
                                    />
                                ))}
                            </svg>
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

                    <span className='result'>{polygonPoints}</span>

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
