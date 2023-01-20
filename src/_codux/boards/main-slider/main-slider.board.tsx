import { createBoard } from '@wixc3/react-board';
import { MainSlider } from '../../../components/main-slider/main-slider';

export default createBoard({
    name: 'MainSlider',
    Board: () => <MainSlider />
});
