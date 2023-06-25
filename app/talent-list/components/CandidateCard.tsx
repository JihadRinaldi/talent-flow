import { ICandidate, IOnChangeStatus } from '@/interfaces';
import React from 'react';
import CandiateNote from './CandidateNote';
import CandidateActionButton from './CandidateActionButton';
import TALENT_LIST_STYLE from '../styles';

interface IProps {
  candidate: ICandidate;
  onChangeStatus: ({ candidate, newStatus }: IOnChangeStatus) => void;
}

const CandidateCard: React.FC<IProps> = ({ candidate, onChangeStatus }: IProps) => {
  const { candidateCardStyle } = TALENT_LIST_STYLE;
  return (
    <div key={candidate.id} className={candidateCardStyle.cardContainer}>
      <div className={candidateCardStyle.candidateData}>
        <h3 className={candidateCardStyle.textFullname}>{candidate.fullname}</h3>
        <div className={candidateCardStyle.textStage}>{candidate.stage}</div>
      </div>
      <div className={candidateCardStyle.infoContainer}>
        <CandiateNote notes={candidate.notes} />
        <CandidateActionButton candidate={candidate} onChangeStatus={onChangeStatus} />
      </div>
    </div>
  )
};

export default CandidateCard;
