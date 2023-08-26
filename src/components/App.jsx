import React from 'react';
import { Component } from 'react';
// import { Form } from './form/form';
import { nanoid } from 'nanoid';
import { FilterCon } from './FilterContacts/FilterContacts';
import { ContactList } from './ContactsList/ContactList';
import { Layout } from './Layout';
import { Title, TitleBook } from './App.styled';
import { GlobalStyle } from './GlobalStyled';
import { FormFormikF } from './form/FormFormik';

const contactList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: contactList,
    filter: '',
  };

  filtered = event => {
    this.setState({ filter: event.target.value });
    console.log(this.state.filter);
  };

  addContacts = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    console.log(contact);
    if (this.state.contacts.some(cont => cont.name === contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !== id),
    }));
    console.log(id);
  };

  render() {
    const visibleContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <Layout>
        <Title>PHONEBOOK</Title>
        {/* <Form
          // onSubmit={this.formSubmitGetData}
          addContacts={this.addContacts}
        /> */}
        <FormFormikF addContacts={this.addContacts} />
        <TitleBook>CONTACTS</TitleBook>
        <FilterCon filter={this.state.filter} contFilter={this.filtered} />
        <ContactList
          dataRender={visibleContact}
          onClickDelete={this.deleteContact}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}
