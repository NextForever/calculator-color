import styles from './timer.module.scss';
import classNames from 'classnames';
export interface TimerProps {
    className?: string;
}

export const Timer = ({ className }: TimerProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            Timer<button>Button</button>
        </div>
    );
};
