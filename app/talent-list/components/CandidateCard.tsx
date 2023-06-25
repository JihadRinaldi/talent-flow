import { ICandidate, IOnChangeStatus } from '@/interfaces';
import React from 'react';
import CandiateNote from './CandidateNote';
import CandidateActionButton from './CandidateActionButton';

interface IProps {
  candidate: ICandidate;
  onChangeStatus: ({ candidate, newStatus }: IOnChangeStatus) => void;
}

const CandidateCard: React.FC<IProps> = ({ candidate, onChangeStatus }: IProps) => (
  <div key={candidate.id} className="flex flex-col gap-4 bg-white rounded-lg shadow-md p-4 mb-4">
    <div className="w-full flex flex-row justify-between items-center">
      <h3 className="text-lg font-semibold text-blue-900">{candidate.fullname}</h3>
      <div className="bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700">{candidate.stage}</div>
    </div>
    <div className="flex flex-wrap gap-4 flex-row justify-end items-start">
      <CandiateNote notes={candidate.notes} />
      <CandidateActionButton candidate={candidate} onChangeStatus={onChangeStatus} />
    </div>
  </div>
);

export default CandidateCard;
