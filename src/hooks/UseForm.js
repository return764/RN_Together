import {useState} from 'react';

export const useForm = initForm => {
  if (!(initForm instanceof Object)) {
    console.error('useForm need pass Object as a parameter');
    throw new Error('useForm Error');
  }

  const [form, setForm] = useState(initForm);
  const resetForm = () => setForm(initForm);
  let setters = {};

  const fields = Object.keys(initForm);
  const setFields = fields.map(field => {
    return [field, 'set' + field.replace(field[0], field[0].toUpperCase())];
  });

  for (const a of setFields) {
    let [field, setField] = a;

    setters[setField] = value => {
      setForm({...form, [field]: value});
    };
  }

  return [form, resetForm, setters];
};
