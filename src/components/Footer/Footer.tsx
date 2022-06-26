import React from 'react';
import { FilterType } from '../../types';
import { useNotesStore, useViewNotesStore } from '../Contexts/hooks';
import { observer } from 'mobx-react';
import './footer-style.scss';
import { Button, Typography } from '../../ui-components';

export const Footer = observer(() => {
  const viewNotesStore = useViewNotesStore();  
  const notesStore = useNotesStore();

  const handleActiveClick = () => viewNotesStore.filterOnlyActive();
  const handleAllClick = () => viewNotesStore.filterAll();
  const handleCompletedClick = () => viewNotesStore.filterOnlyCompleted();

  const handleClearAllCompleted = () => notesStore.clearCompletedNotes();

  return (
    <div className="footer footer__container">
      <div className="footer__counter">
        <Typography>
          {viewNotesStore.filteredNotes.length} notes
        </Typography>
      </div>
      <div className="footer__filters">
        <Button
          className="footer__filter"
          onClick={handleAllClick}
          active={viewNotesStore.activeFilter === FilterType.ALL}
        >
          All
        </Button>
        <Button
          className="footer__filter"
          onClick={handleActiveClick}
          active={viewNotesStore.activeFilter === FilterType.ACTIVE}
        >
          Active
        </Button>
        <Button
          className="footer__filter"
          onClick={handleCompletedClick}
          active={viewNotesStore.activeFilter === FilterType.COMPLETED}
        >
          Completed
        </Button>
      </div>
      <div className="footer__right">
        <Button
          onClick={handleClearAllCompleted}
          secondary
        >
          Clear completed
        </Button>
      </div>
    </div>
  );
});
