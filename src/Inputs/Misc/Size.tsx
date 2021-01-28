import React, {ChangeEvent, Component} from 'react';
import {StandardInputState} from '../../App';
import Validator from 'validatro';

interface sizeState extends StandardInputState{
  size: number;
}

export default class Size extends Component<unknown, sizeState> {
  state = {
    value: '',
    size: 5,
  };

  validInput() {
    try {
      return Validator.validate(this.state, {
        value: [`size:${this.state.size}`],
      }).test();
    } catch (e) {
      return false;
    }
  }

  updateInput = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: event.target.value ?? '',
    })
  }

  updateSize = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      size: Number(event.target.value ?? 0),
    })
  }

  render() {
    const isValid = this.validInput();
    const {value, size} = this.state;
    const label = isValid ? 'text-green-600' : 'text-red-600';

    return (<>
      <label htmlFor="ip" className={
        `block text-sm font-medium sm:mt-px sm:pt-2 ${label}`
      }>
        Is size: {isValid ? 'Yeh' : 'Nah'}
      </label>

      <div className={
        'mt-1 sm:mt-0 sm:col-span-2 flex flex-col sm:flex-row'
      }>
        <input id="size" value={size} onChange={this.updateSize} type="number"
          placeholder="10" className={
            'block w-full shadow-sm focus:ring-indigo-500 rounded-md' +
            ' focus:border-indigo-500 sm:text-sm border-gray-300 sm:mr-2'
          }/>
        <input id="length" value={value} onChange={this.updateInput} type="text"
          placeholder={`I should be ${size} chars long :)`} className={
            'block w-full shadow-sm focus:ring-indigo-500 rounded-md sm:ml-2 ' +
            'focus:border-indigo-500 sm:text-sm border-gray-300 mt-2 sm:mt-0'
          }/>
      </div>
    </>);
  }
}
