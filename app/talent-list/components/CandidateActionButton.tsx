import React from 'react';
import { TALENT_STAGE } from '@/constants';
import { ICandidate, IOnChangeStatus } from '@/interfaces';
import TRANSLATION from '@/locale';
import { TALENT_LIST_STYLE } from '../styles';

interface IProps {
  candidate: ICandidate;
  onChangeStatus: ({ candidate, newStatus }: IOnChangeStatus) => void;
}

const CandidateActionButton = ({ candidate, onChangeStatus }: IProps) => {
  const { candidateActionButton } = TRANSLATION;
  const { candidateButtonStyle } = TALENT_LIST_STYLE;
  const ActionBuilder = () => {
    switch (candidate.stage) {
      case TALENT_STAGE.NEW:
        return (
          <>
            <button
              data-testid="btnReject"
              type="button"
              className={candidateButtonStyle.btnRed}
              onClick={() => onChangeStatus({ candidate, newStatus: TALENT_STAGE.REJECT })}
            >
              {candidateActionButton.btnReject}
            </button>
            <button
              data-testid="btnShortlist"
              type="button"
              className={candidateButtonStyle.btnGreen}
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
              data-testid="btnReject"
              type="button"
              className={candidateButtonStyle.btnRed}
              onClick={() => onChangeStatus({ candidate, newStatus: TALENT_STAGE.REJECT })}
            >
              {candidateActionButton.btnReject}
            </button>
            <button
              data-testid="btnInterview"
              type="button"
              className={candidateButtonStyle.btnGreen}
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
              data-testid="btnReject"
              type="button"
              className={candidateButtonStyle.btnRed}
              onClick={() => onChangeStatus({ candidate, newStatus: TALENT_STAGE.REJECT })}
            >
              {candidateActionButton.btnReject}
            </button>
            <button
              data-testid="btnHired"
              type="button"
              className={candidateButtonStyle.btnGreen}
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
    <div className={candidateButtonStyle.btnContainer}>
      <ActionBuilder />
    </div>
  );
};

export default CandidateActionButton;
