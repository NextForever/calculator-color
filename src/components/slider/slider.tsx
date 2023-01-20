import styles from './slider.module.scss';
import classNames from 'classnames';

export interface SliderProps {
    className?: string;
}

export const Slider = ({ className }: SliderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            Slider<h1>Heading 1</h1>
        </div>
    );
};
