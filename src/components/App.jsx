import React from 'react';
import { Component } from 'react';
import { Form } from './Contacts/form';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  onChange = event => {
    this.setState({
      name: event.target.value,
    });
  };
  onChangeNumber = event => {
    this.setState({ number: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    this.state.contacts.push({
      name: this.state.name,
      id: nanoid(),
      number: this.state.number,
    });

    console.log(this.state.contacts);
  };

  filtered = event => {
    this.setState({ filter: event.target.value });
    console.log(this.state.filter);
  };
  render() {
    const visibleContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    console.log(visibleContact);
    return (
      <div>
        <Form
          onChangeNumber={this.onChangeNumber}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          name={this.state.name}
        />
        <div>
          <h2>CONTACTS</h2>
          <input
            type="text"
            value={this.state.filter}
            onChange={this.filtered}
          />

          <ul>
            {visibleContact.map(({ name, id, number }) => {
              return (
                <li key={id}>
                  {name}:{number}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
