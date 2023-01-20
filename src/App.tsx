import styles from './App.module.scss';
import Classnames from 'classnames';

function App() {
    return (
        <div className={styles.App}>
            <header className={Classnames(styles['App-header'])}>
                <span>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#fff"
                        className={styles['header-menu']}
                    >
                        <g id="SVGRepo_iconCarrier">
                            {' '}
                            <path
                                d="M5 12H20"
                                stroke="#ffffff"
                                stroke-width="2"
                                stroke-linecap="round"
                            />{' '}
                            <path
                                d="M5 17H20"
                                stroke="#ffffff"
                                stroke-width="2"
                                stroke-linecap="round"
                            />{' '}
                            <path
                                d="M5 7H20"
                                stroke="#ffffff"
                                stroke-width="2"
                                stroke-linecap="round"
                            />{' '}
                        </g>
                    </svg>
                </span>
                <span>
                    <svg
                        viewBox="-25.6 -25.6 307.20 307.20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                        className={styles['header-logo']}
                    >
                        <path
                            d="M0.295,119.3972 C25.109,176.4012 88.073,185.9602 163.22,137.6432 C197.88,169.7222 206.515,207.7532 177.594,246.0352 C162.341,252.4512 145.586,255.9992 128,255.9992 C57.308,255.9992 -2.84217094e-14,198.6922 -2.84217094e-14,127.9992 C-2.84217094e-14,125.1082 0.106,122.2412 0.295,119.3972 Z M117.3535,94.6526 C128.5585,47.9576 159.8475,21.1736 209.0315,28.9156 C237.7015,52.3896 256.0005,88.0556 256.0005,127.9996 C256.0005,178.3946 226.8735,221.9786 184.5405,242.8566 C222.9965,188.0726 191.5705,130.2726 117.3535,94.6526 Z M128.0006,-1.42108547e-14 C155.4356,-1.42108547e-14 180.8516,8.635 201.6876,23.33 C131.7366,15.198 98.7036,73.505 103.3176,154.024 C57.8656,167.965 20.8376,157.693 1.2696,109.977 C10.0306,47.819 63.4266,-1.42108547e-14 128.0006,-1.42108547e-14 Z"
                            fill="#ff7b00"
                        ></path>
                    </svg>
                </span>
                <span className={styles['header-logo-brand']}>SL Box</span>
            </header>
        </div>
    );
}

export default App;
