import { small, medium, big } from './Button.module.css';

const SMALL = 0;
const MEDIUM = 1;
const BIG = 2;

const getSizeStyle = size => {
    switch (size) {
        case SMALL: return small;
        case MEDIUM: return medium;
        case BIG: return big;
        default: return medium;
    }
}

export { getSizeStyle, SMALL, MEDIUM, BIG }