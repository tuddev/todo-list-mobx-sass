import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNotesStore } from '../Contexts/hooks';
import { observer } from 'mobx-react';
import './form-style.scss';

export const Form = observer(() => {
  const notesStore = useNotesStore();

  const [value, setValue] = useState('');

  
  const handleSubmit = function (event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      if (!value.trim()) return;

      notesStore.addNote({
        id: uuidv4(),
        isChecked: false,
        title: value,
      });
      
      setValue('');
    }
  };
  
  const handleTextChange = function (event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  };

  return (
    <div className="form">
      <input
        placeholder="What needs to do?"
        className="form__input"
        value={value} 
        id="standard-basic"
        onChange={handleTextChange}
        onKeyDown={handleSubmit}
      />
    </div>
  );
});