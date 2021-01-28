import React, {ChangeEvent, Component} from 'react';
import {StandardInputState} from '../../App';
import Validator from 'validatro';

export default class Required extends Component<unknown, StandardInputState> {
  state = {
    value: '',
  };

  validInput() {
    try {
      return Validator.validate(this.state, {
        value: ['required'],
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

  render() {
    const isValid = this.validInput();
    const {value} = this.state;
    const label = isValid ? 'text-green-600' : 'text-red-600';

    return (<>
      <label htmlFor="required" className={
        `block text-sm font-medium sm:mt-px sm:pt-2 ${label}`
      }>
        Is Required: {isValid ? 'Yeh' : 'Nah'}
      </label>

      <div className={
        'mt-1 sm:mt-0 sm:col-span-2'
      }>
        <input id="required" value={value} onChange={this.updateInput}
          type="text" placeholder="required" className={
          'block w-full shadow-sm focus:ring-indigo-500 rounded-md' +
          ' focus:border-indigo-500 sm:text-sm border-gray-300'
        }/>
      </div>
    </>);
  }
}
