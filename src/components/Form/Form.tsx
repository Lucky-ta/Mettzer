import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { FormInput, FormContainer, FormButton } from '.';

function Form() {
  return (
    <FormContainer>
      <FormInput placeholder="Article name" type="text" />
      <FormButton><BsSearch /></FormButton>
    </FormContainer>
  );
}

export default Form;
