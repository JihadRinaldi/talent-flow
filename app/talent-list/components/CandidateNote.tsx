import React from 'react';
import { INotes } from '@/interfaces';
import { TALENT_LIST_STYLE } from '../styles';

interface IProps {
  notes: INotes[];
}

const CandiateNote:React.FC<IProps> = ({ notes }: IProps) => {
  const { candidateNoteStyle } = TALENT_LIST_STYLE;
  const HoverComponent = () => notes.reverse().slice(1).map((note) => (
    <div key={note.staff_name} className={candidateNoteStyle.hoverContainer}>
      <p className={candidateNoteStyle.nameStyle}>{notes.slice(-1)[0]?.staff_name}</p>
      <p className={candidateNoteStyle.noteStyle}>{notes.slice(-1)[0]?.note}</p>
    </div>
  ));
  if (notes.length) {
    return (
      <div className={candidateNoteStyle.mainContainer}>
        <div className={candidateNoteStyle.noteContainer}>
          <p className={candidateNoteStyle.nameStyle}>{notes.slice(-1)[0]?.staff_name}</p>
          <p className={candidateNoteStyle.noteStyle}>{notes.slice(-1)[0]?.note}</p>
        </div>
        <HoverComponent />
      </div>
    );
  }
  return null;
};

export default CandiateNote;
