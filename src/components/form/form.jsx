import React from 'react';
import { nanoid } from 'nanoid';
import { Component } from 'react';
// import PropTypes from 'prop-types';
import { FormInput, Input, TitleInput, AddButton } from './Form.styled';

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
        <TitleInput htmlFor={nanoid()}>NAME</TitleInput>
        <Input
          id={nanoid()}
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[A-Za-zА-Яа-я]{1}[A-Za-zА-Яа-я-\'\s]*[A-Za-zА-Яа-я]{1}$) "
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.onChangeInput}
          placeholder="Enter Name your friend"
        />
        <TitleInput htmlFor={nanoid()}>NUMBER</TitleInput>
        <Input
          id={nanoid()}
          type="tel"
          name="number"
          value={this.state.number}
          pattern="^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$"
          title="Phone number must be +38(000)000-00-00"
          required
          onChange={this.onChangeInput}
          placeholder="Enter Phone your friend"
        />
        <AddButton type="submit">ADD CONTACT</AddButton>
      </FormInput>
    );
  }
}
