import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App></App>,
    environmentProps: {
        canvasWidth: 1920,
        windowWidth: 1920,
        canvasHeight: 75,
        windowHeight: 300,
    },
});
