import React, { useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FormInput, FormContainer, FormButton } from '.';
import MyContext from '../../contexts/MyContext';
import searchArticle from '../../services/searchApi';

function Form() {
  const { setArticles, setIsPageLoading } = useContext(MyContext);
  const [formData, setFormData] = useState('');

  const search = async () => {
    setIsPageLoading(true);
    const response = await searchArticle(formData);
    if (response.status === 'OK') {
      setIsPageLoading(false);
      console.log(response.data);
      return setArticles(response.data);
    }
    setIsPageLoading(false);
    return window.alert('Não foi encontrado nenhum resultado.');
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
