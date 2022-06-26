import React from 'react';
import { StorageProvider, NotesProvider, ViewNotesProvider } from '../Contexts';
import { Footer } from '../Footer';
import { Form } from '../Form';
import { NotesList } from '../NotesList';
import { storageStore, notesStore, viewNotesStore } from '../../stores';
import { Container, Typography } from '../../ui-components';
import './app-style.scss';

export function App() {
  return (
    <StorageProvider store={storageStore}>
      <NotesProvider store={notesStore}>
        <ViewNotesProvider store={viewNotesStore}>
          <Container >
            <Typography elementType='h1' bold large center>
              Todos
            </Typography>
            <Form />
            <NotesList />     
            <Footer /> 
          </Container>
        </ViewNotesProvider>
      </NotesProvider> 
    </StorageProvider>
  );
}