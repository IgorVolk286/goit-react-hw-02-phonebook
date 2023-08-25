import React from 'react';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { FormInput, Input } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  onSubmitForm = event => {
    event.preventDefault();

    this.props.addContacts(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormInput onSubmit={this.onSubmitForm}>
        <label htmlFor={nanoid()}>NAME</label>
        <Input
          id={nanoid()}
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.onChangeInput}
        />
        <label htmlFor={nanoid()}>NUMBER</label>
        <Input
          id={nanoid()}
          type="tel"
          name="number"
          value={this.state.number}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.onChangeInput}
        />
        <button type="submit">ADD CONTACT</button>
      </FormInput>
    );
  }
}
