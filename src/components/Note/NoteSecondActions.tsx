import React, { SyntheticEvent } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '../../ui-components';

type NoteSecondActionsProps = {
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
  setValue: (value: string) => void;
  deleteNote: (id: string) => void;
  editNote: (id: string, newTitle: string) => void;
  value: string;
  id: string
};

export function NoteButtons({ 
  isEdit, setIsEdit, deleteNote, editNote, setValue, value, id,
}: NoteSecondActionsProps) {
  const handleEdit = function(event: SyntheticEvent) {
    event.stopPropagation();
    setIsEdit(!isEdit);
    setValue(value);
  }; 

  const handleDelete = function(event: SyntheticEvent) {
    event.stopPropagation();
    deleteNote(id);
  }; 

  const handleEditDone = function() {
    setIsEdit(false);
    editNote(id, value);
  };

  const handleEditCancel = function() {
    setIsEdit(false);
  };
  
  return <div className="note__control-buttons">
      <IconButton
        onClick={!isEdit ? handleEdit : handleEditDone} 
      >
        {!isEdit ? <EditIcon color="action"/> : <DoneIcon color="action"/>}
      </IconButton>
      
      <IconButton
        onClick={!isEdit ? handleDelete : handleEditCancel}
      >
         {!isEdit ? <DeleteIcon color="warning"/> : <CancelIcon color="warning"/>}
      </IconButton>
  </div>;
}