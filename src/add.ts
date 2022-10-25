import { logger } from './helpers';
import { LOG_MSG } from './constants';

import type { NumType } from './types';

const add = (a: NumType, b: NumType): NumType => {
    logger(LOG_MSG);
    return a + b;
}

export default add;
