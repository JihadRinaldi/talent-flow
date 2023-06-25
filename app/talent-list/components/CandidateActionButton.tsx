import React from 'react';
import { TALENT_STAGE } from '@/constants';
import { ICandidate, IOnChangeStatus } from '@/interfaces';
import TRANSLATION from '@/locale';

interface IProps {
  candidate: ICandidate;
  onChangeStatus: ({ candidate, newStatus }: IOnChangeStatus) => void;
}

const CandidateActionButton = ({ candidate, onChangeStatus }: IProps) => {
  const { candidateActionButton } = TRANSLATION;
  const ActionBuilder = () => {
    switch (candidate.stage) {
      case TALENT_STAGE.NEW:
        return (
          <>
            <button
              type="button"
              className="inline-block bg-red-200 rounded-md px-3 py-1 text-sm text-gray-700"
              onClick={() => onChangeStatus({ candidate, newStatus: TALENT_STAGE.REJECT })}
            >
              {candidateActionButton.btnReject}
            </button>
            <button
              type="button"
              className="inline-block bg-green-200 rounded-md px-3 py-1 text-sm text-gray-700"
              onClick={() => onChangeStatus({ candidate, newStatus: TALENT_STAGE.SHORTLIST })}
            >
              {candidateActionButton.btnShortlist}
            </button>
          </>
        );
      case TALENT_STAGE.SHORTLIST:
        return (
          <>
            <button
              type="button"
              className="inline-block bg-red-200 rounded-md px-3 py-1 text-sm text-gray-700"
              onClick={() => onChangeStatus({ candidate, newStatus: TALENT_STAGE.REJECT })}
            >
              {candidateActionButton.btnReject}
            </button>
            <button
              type="button"
              className="inline-block bg-green-200 rounded-md px-3 py-1 text-sm text-gray-700"
              onClick={() => onChangeStatus({ candidate, newStatus: TALENT_STAGE.INTERVIEW })}
            >
              {candidateActionButton.btnInterview}
            </button>
          </>
        );
      case TALENT_STAGE.INTERVIEW:
        return (
          <>
            <button
              type="button"
              className="inline-block bg-red-200 rounded-md px-3 py-1 text-sm text-gray-700"
              onClick={() => onChangeStatus({ candidate, newStatus: TALENT_STAGE.REJECT })}
            >
              {candidateActionButton.btnReject}
            </button>
            <button
              type="button"
              className="inline-block bg-green-200 rounded-md px-3 py-1 text-sm text-gray-700"
              onClick={() => onChangeStatus({ candidate, newStatus: TALENT_STAGE.HIRED })}
            >
              {candidateActionButton.btnHire}
            </button>
          </>
        );
      case TALENT_STAGE.HIRED:
      case TALENT_STAGE.REJECT:
        return null;
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <ActionBuilder />
    </div>
  );
};

export default CandidateActionButton;
