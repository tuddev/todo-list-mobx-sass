import React, { useState } from 'react';
import { useNotesStore } from '../Contexts/hooks';
import { NoteButtons } from './NoteSecondActions';
import './note-style.scss';
export type NoteProps = {
  id: string;
  isChecked: boolean;
  title: string;
};

export function Note({ id, isChecked, title }: NoteProps) {
  const [isCurrentChecked, setIsCurrentChecked] = useState(isChecked);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(title);
  const notesStore = useNotesStore();

  const handleDeleteNote = (idNote: string) => () => notesStore.deleteNote(idNote);
  const handleEditNote = (idNote: string, valueNote: string) => () => notesStore.editNote(idNote, valueNote);

  const handleToggleCheck = () => {
    setIsCurrentChecked(!isCurrentChecked);
    notesStore.toggleNoteStatus(id);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setIsEdit(!isEdit);
      setValue(value);
      handleEditNote(id, value)();
    }
  };

  return <div className="note">
    <div
      className="note__container"
      onClick={!isEdit ? handleToggleCheck : () => void 0}
    >
      <div className="note__content">
        <input
          type="checkbox"
          className="note__checkbox"
          tabIndex={-1}
          onChange={handleToggleCheck}
          checked={isCurrentChecked}
        />
        {
          !isEdit 
            ? <div className="note__container-text">
                <div className={`note__text ${isCurrentChecked ? 'note__text--checked' : ''}`}>
                    {title}
                </div> 
              </div>
            : <input
                className="note__title-input"
                autoFocus 
                value={value} 
                onChange={handleValueChange}
                onKeyDown={handleKeyDown}
              />
        }
      </div>
      <div className="note__buttons">
        <NoteButtons
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          setValue={setValue}
          deleteNote={handleDeleteNote(id)}
          editNote={handleEditNote(id, value)}
          value={value}
          id={id}
        />
      </div>
    </div>
  </div>;
}