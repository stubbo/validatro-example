import React, {Component} from 'react';
import Inputs, {Inputs as InputKeys} from './Inputs';

export interface StandardInputState {
  value: string;
}

type PossibleInputs = keyof InputKeys;
type PossibleInput = keyof InputKeys[PossibleInputs];

export default class App extends Component {
  renderInput = (cat: PossibleInputs, input: PossibleInput, k: number) => {
    const Component = Inputs[cat][input];

    return (
      <div key={k} className={
        'sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t' +
        ' sm:border-gray-200 sm:pt-5'
      }>
        <Component/>
      </div>
    );
  }

  renderCategory = (index: PossibleInputs, k: number) => {
    const inputs = Object.keys(Inputs[index]);
    return (
      <div key={k}
        className="sm:mt-4 md:mt-6 lg: mt-16">
        <div>
          <div>
            <h3 className={
              'text-lg leading-6 font-medium text-gray-900 capitalize'
            }>
              {index}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Validation for {index} based fields
            </p>
          </div>

          {}
          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            {inputs.map((i, x) => this.renderInput(index, i, x))}
          </div>
        </div>
      </div>
    );
  }

  public render() {
    return (
      <form className="px-10 max-w-2xl mx-auto mt-10">
        {Object.keys(Inputs).map(this.renderCategory)}
      </form>
    );
  }
}
