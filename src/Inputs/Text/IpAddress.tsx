import React, {ChangeEvent, Component} from 'react';
import {StandardInputState} from '../../App';
import Validator from 'validatro';

export default class IpAddress extends Component<unknown, StandardInputState> {
  state = {
    value: '',
  };

  validInput() {
    try {
      return Validator.validate(this.state, {
        value: ['ip'],
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
      <label htmlFor="ip" className={
        `block text-sm font-medium sm:mt-px sm:pt-2 ${label}`
      }>
        Valid Ip: {isValid ? 'Yeh' : 'Nah'}
      </label>

      <div className={
        'mt-1 sm:mt-0 sm:col-span-2'
      }>
        <input id="ip" value={value} onChange={this.updateInput} type="text"
          placeholder="1.1.1.1" className={
            'block w-full shadow-sm focus:ring-indigo-500 rounded-md' +
            ' focus:border-indigo-500 sm:text-sm border-gray-300'
          }/>
      </div>
    </>);
  }
}
