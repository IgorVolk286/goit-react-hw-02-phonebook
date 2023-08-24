import React from 'react';
import { nanoid } from 'nanoid';
import { Component } from 'react';

export class Form extends Component {
  render() {
    return (
      <div>
        <h1>PHONEBOOK</h1>
        <form onSubmit={this.props.onSubmit}>
          <label htmlFor={nanoid()}>Name</label>
          <input
            id={nanoid()}
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.props.onChange}
          />
          <label htmlFor={nanoid()}>NUMBER</label>
          <input
            id={nanoid()}
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.props.onChangeNumber}
          />
          <button type="submit">ADD CONTACT</button>
        </form>
      </div>
    );
  }
}
