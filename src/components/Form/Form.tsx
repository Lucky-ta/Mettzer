import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FormInput, FormContainer, FormButton } from '.';
import searchArticle from '../../services/searchApi';

function Form() {
  const [formData, setFormData] = useState('');

  const search = async () => {
    const response = await searchArticle(formData);
    console.log(response);
  };

  return (
    <FormContainer>
      <FormInput
        onChange={({ target }) => setFormData(target.value)}
        placeholder="Article name"
        type="text"
      />
      <FormButton
        onClick={search}
        type="button"
        disabled={formData.length === 0}
      >
        <BsSearch />
      </FormButton>
    </FormContainer>
  );
}

export default Form;
