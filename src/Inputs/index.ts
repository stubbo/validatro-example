import Text from './Text';
import Misc from './Misc';
import {ComponentClass} from 'react';

export interface Inputs {
  [key: string]: {
    [key: string]: ComponentClass<unknown, unknown>;
  };
}

const inputs: Inputs = {
  Text,
  Misc
}

export default inputs;
