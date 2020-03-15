import { positive, negative, neutral, disabled } from './Button.module.css';

const POSITIVE = 0;
const NEUTRAL = 1;
const NEGATIVE = 2;
const DISABLED = 3;

const getColorStyle = color => {
    switch (color) {
        case POSITIVE: return positive;
        case NEUTRAL: return neutral;
        case NEGATIVE: return negative;
        case DISABLED: return disabled;
        default: return neutral;
    }
}

export { getColorStyle, POSITIVE, NEUTRAL, NEGATIVE, DISABLED }