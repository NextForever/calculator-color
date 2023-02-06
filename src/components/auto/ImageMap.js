import React, { useState } from 'react';

const ImageMap = ({ src, width, height, alt, areas }) => {
    const [selectedArea, setSelectedArea] = useState(null);
    const handleClick = (event, area) => {
        event.preventDefault();
        console.log(area.title);
        if (selectedArea === area) {
            setSelectedArea(null);
        } else {
            setSelectedArea(area);
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            <img src={src} width={width} height={height} alt={alt} useMap='#image-map' />
            <map name='image-map'>
                {areas.map((area, index) => (
                    <area
                        key={index}
                        shape='poly'
                        coords={area.coords.join(',')}
                        alt={area.alt}
                        title={area.title}
                        onClick={event => handleClick(event, area)}
                        style={{
                            cursor: 'pointer',
                            outline: selectedArea === area ? '2px solid red' : 'none',
                            backgroundColor: selectedArea === area ? area.colorArea : 'transparent',
                        }}
                    />
                ))}
            </map>
        </div>
    );
};

export default ImageMap;
