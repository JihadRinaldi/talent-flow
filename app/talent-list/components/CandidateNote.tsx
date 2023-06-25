import React from 'react';
import { INotes } from '@/interfaces';
import { talentListStyle } from './styles';

interface IProps {
  notes: INotes[];
}

const CandiateNote:React.FC<IProps> = ({ notes }: IProps) => {
  const { candidateNote } = talentListStyle;
  const HoverComponent = () => notes.reverse().slice(1).map((note) => (
    <div key={note.staff_name} className={candidateNote.hoverContainer}>
      <p className={candidateNote.nameStyle}>{notes.slice(-1)[0]?.staff_name}</p>
      <p className={candidateNote.noteStyle}>{notes.slice(-1)[0]?.note}</p>
    </div>
  ));
  if (notes.length) {
    return (
      <div className={candidateNote.mainContainer}>
        <div className={candidateNote.noteContainer}>
          <p className={candidateNote.nameStyle}>{notes.slice(-1)[0]?.staff_name}</p>
          <p className={candidateNote.noteStyle}>{notes.slice(-1)[0]?.note}</p>
        </div>
        <HoverComponent />
      </div>
    );
  }
  return null;
};

export default CandiateNote;
