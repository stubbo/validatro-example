import Text from './Text';
import {ComponentClass} from 'react';

export interface Inputs {
  [key: string]: {
    [key: string]: ComponentClass<unknown, unknown>;
  };
}

const inputs: Inputs = {
  Text,
}

export default inputs;
