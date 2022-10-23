import { logger } from './helpers';

const add = (a: number, b: number): number => {
  logger(`Add: ${a}, ${b}`);
  return a + b;
};

export default add;