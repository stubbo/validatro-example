import React, {ChangeEvent, Component} from 'react';
import {StandardInputState} from '../../App';
import Validator from 'validatro';

interface RegexState extends StandardInputState{
  regex: string;
}

export default class Regex extends Component<unknown, RegexState> {
  state = {
    value: '',
    regex: '^\\dregex!$',
  };

  validInput() {
    try {
      return Validator.validate(this.state, {
        value: [`regex:${this.state.regex}`],
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

  updateRegex = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      regex: event.target.value ?? '^\\dRegex!$',
    })
  }

  render() {
    const isValid = this.validInput();
    const {value, regex} = this.state;
    const label = isValid ? 'text-green-600' : 'text-red-600';

    return (<>
      <label htmlFor="ip" className={
        `block text-sm font-medium sm:mt-px sm:pt-2 ${label}`
      }>
        Regex match: {isValid ? 'Yeh' : 'Nah'}
      </label>

      <div className={
        'mt-1 sm:mt-0 sm:col-span-2 flex flex-col sm:flex-row'
      }>
        <input id="regex" value={regex} onChange={this.updateRegex} type="text"
          placeholder="^\dregex!$ " className={
            'block w-full shadow-sm focus:ring-indigo-500 rounded-md' +
            ' focus:border-indigo-500 sm:text-sm border-gray-300 sm:mr-2'
          }/>
        <input id="check" value={value} onChange={this.updateInput} type="text"
          placeholder="1regex!" className={
            'block w-full shadow-sm focus:ring-indigo-500 rounded-md sm:ml-2 ' +
            'focus:border-indigo-500 sm:text-sm border-gray-300 mt-2 sm:mt-0'
          }/>
      </div>
    </>);
  }
}
