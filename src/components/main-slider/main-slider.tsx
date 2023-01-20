import styles from './main-slider.module.scss';
import classNames from 'classnames';
import { Slider } from '@mui/material';
import MediaCard from '../cards/cards';
export interface MainSliderProps {
    className?: string;
}

export const MainSlider = ({ className }: MainSliderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <video
                controls={true}
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/video-placeholder.mp4"
            />
            <Slider
                aria-label="Temperature"
                defaultValue={30}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
            />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
        </div>
    );
};
