import React, {ChangeEvent, Component} from 'react';
import {StandardInputState} from '../../App';
import Validator from 'validatro';

interface InArrayState extends StandardInputState{
  array: string;
}

export default class InArray extends Component<unknown, InArrayState> {
  state = {
    value: '',
    array: '["In Array"]',
  };

  validInput() {
    try {
      return Validator.validate(this.state, {
        value: [`in_array:${this.state.array}`],
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

  updateArray = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      array: event.target.value ?? '["In Array"]',
    })
  }

  render() {
    const isValid = this.validInput();
    const {value, array} = this.state;
    const label = isValid ? 'text-green-600' : 'text-red-600';

    return (<>
      <label htmlFor="ip" className={
        `block text-sm font-medium sm:mt-px sm:pt-2 ${label}`
      }>
        In Array: {isValid ? 'Yeh' : 'Nah'}
      </label>

      <div className={
        'mt-1 sm:mt-0 sm:col-span-2 flex flex-col sm:flex-row'
      }>
        <input id="array" value={array} onChange={this.updateArray} type="text"
          placeholder={'["In Array"]'} className={
            'block w-full shadow-sm focus:ring-indigo-500 rounded-md' +
            ' focus:border-indigo-500 sm:text-sm border-gray-300 sm:mr-2'
          }/>
        <input id="in" value={value} onChange={this.updateInput} type="text"
          placeholder="In Array" className={
            'block w-full shadow-sm focus:ring-indigo-500 rounded-md sm:ml-2 ' +
            'focus:border-indigo-500 sm:text-sm border-gray-300 mt-2 sm:mt-0'
          }/>
      </div>
    </>);
  }
}
