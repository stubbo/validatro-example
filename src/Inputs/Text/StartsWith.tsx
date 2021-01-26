import React, {ChangeEvent, Component} from 'react';
import {StandardInputState} from '../../App';
import Validator from 'validatro';

interface StartsWithState extends StandardInputState{
  startsWith: string;
}

export default class IpAddress extends Component<unknown, StartsWithState> {
  state = {
    value: '',
    startsWith: '',
  };

  validInput() {
    try {
      return Validator.validate(this.state, {
        value: [`starts_with:${this.state.startsWith}`],
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

  updateWith = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      startsWith: event.target.value ?? '',
    })
  }

  render() {
    const isValid = this.validInput();
    const {value, startsWith} = this.state;
    const label = isValid ? 'text-green-600' : 'text-red-600';

    return (<>
      <label htmlFor="ip" className={
        `block text-sm font-medium sm:mt-px sm:pt-2 ${label}`
      }>
        Valid Starts with: {isValid ? 'Yeh' : 'Nah'}
      </label>

      <div className={
        'mt-1 sm:mt-0 sm:col-span-2 flex flex-col sm:flex-row'
      }>
        <input id="ip" value={startsWith} onChange={this.updateWith} type="text"
          placeholder="hi" className={
            'block w-full shadow-sm focus:ring-indigo-500 rounded-md' +
            ' focus:border-indigo-500 sm:text-sm border-gray-300 sm:mr-2'
          }/>
        <input id="ip" value={value} onChange={this.updateInput} type="text"
          placeholder="hi, how are you?" className={
            'block w-full shadow-sm focus:ring-indigo-500 rounded-md sm:ml-2 ' +
            'focus:border-indigo-500 sm:text-sm border-gray-300 mt-2 sm:mt-0'
          }/>
      </div>
    </>);
  }
}
