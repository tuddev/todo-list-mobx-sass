import React from 'react';
import { Note } from '../Note';
import { useViewNotesStore } from '../Contexts/hooks';
import { observer } from 'mobx-react';
import './notes-list-style.scss';

export const NotesList = observer(() => {
  const viewNotesStore = useViewNotesStore();

  return (
    <ul className="notes-list">
      {
        viewNotesStore.filteredNotes.map((value) => {
          return <li key={value.id}  className="notes-list__item">
            <Note 
              id={value.id} 
              isChecked={value.isChecked} 
              title={value.title}
            />
          </li>;
        })
      }
    </ul>
  );
});