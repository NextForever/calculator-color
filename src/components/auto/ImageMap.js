import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedArea } from '../../redux/CreateSlice';

const ImageMap = ({ src, width, height, alt, areas }) => {
    const selectedArea = useSelector(state => state.selectedArea.selectedAreaParts);
    const dispatch = useDispatch();

    const [highlightedArea, setHighlightedArea] = useState(null);
    const handleMouseEnter = area => setHighlightedArea(area);
    const handleMouseLeave = () => setHighlightedArea(null);

    const handleClick = (event, area) => {
        event.preventDefault();
        dispatch(setSelectedArea(area.title));
    };

    return (
        <div style={{ position: 'relative' }}>
            <img src={src} width={width} height={height} alt={alt} useMap='#image-map' />
            <svg
                style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0',
                    height: '100%',
                    width: '100%',
                }}
            >
                {areas.map((area, index) => (
                    <polygon
                        key={index}
                        points={area.coords.join(',')}
                        alt={area.alt}
                        title={area.title}
                        onClick={event => handleClick(event, area)}
                        onMouseEnter={() => handleMouseEnter(area)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            cursor: 'pointer',
                            stroke:
                                selectedArea.includes(area.title) || highlightedArea === area
                                    ? '2px solid red'
                                    : 'none',
                            fill:
                                selectedArea.includes(area.title) || highlightedArea === area
                                    ? area.colorArea
                                    : 'transparent',
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};

export default ImageMap;
