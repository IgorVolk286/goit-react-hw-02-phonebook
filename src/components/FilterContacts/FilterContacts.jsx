import React from 'react';
import { nanoid } from 'nanoid';
import { LabelFilterContact, InputFilter } from './FilterContacts.styled';

export const FilterCon = ({ filter, contFilter }) => {
  return (
    <LabelFilterContact LabelFilter htmlFor={nanoid()}>
      FILTER CONTACTS
      <InputFilter
        type="text"
        value={filter}
        onChange={contFilter}
        placeholder="Enter name"
      />
    </LabelFilterContact>
  );
};
