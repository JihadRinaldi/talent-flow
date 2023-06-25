import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CandidateActionButton from '../components/CandidateActionButton';
import {
  MOCK_CANDIDATE_INTERVIEW,
  MOCK_CANDIDATE_NEW,
  MOCK_CANDIDATE_REJECT,
  MOCK_CANDIDATE_SHORTLIST,
  MOCK_CANDIDATE_STAGE_NULL,
} from '../__mocks__/candidateData';

describe('CandidateActionButton', () => {
  const onChangeStatusMock = jest.fn();

  afterEach(() => {
    onChangeStatusMock.mockClear();
  });

  it('renders the buttons for the NEW stage', async () => {
    render(
      <CandidateActionButton
        candidate={MOCK_CANDIDATE_NEW}
        onChangeStatus={onChangeStatusMock}
      />,
    );

    const rejectButton = await screen.findByTestId(/btnReject/i);
    const shortlistButton = await screen.findByTestId(/btnShortlist/i);

    fireEvent.click(rejectButton);
    expect(onChangeStatusMock).toHaveBeenCalledWith({ candidate: MOCK_CANDIDATE_NEW, newStatus: 'reject' });
    expect(onChangeStatusMock).toHaveBeenCalledTimes(1);

    fireEvent.click(shortlistButton);
    expect(onChangeStatusMock).toHaveBeenCalledWith({ candidate: MOCK_CANDIDATE_NEW, newStatus: 'shortlist' });
    expect(onChangeStatusMock).toHaveBeenCalledTimes(2);
  });

  it('renders the buttons for the SHORTLIST stage', async () => {
    render(
      <CandidateActionButton
        candidate={MOCK_CANDIDATE_SHORTLIST}
        onChangeStatus={onChangeStatusMock}
      />,
    );

    const rejectButton = await screen.findByTestId(/btnReject/i);
    const interviewButton = await screen.findByTestId(/btnInterview/i);

    fireEvent.click(rejectButton);
    expect(onChangeStatusMock).toHaveBeenCalledWith({ candidate: MOCK_CANDIDATE_SHORTLIST, newStatus: 'reject' });
    expect(onChangeStatusMock).toHaveBeenCalledTimes(1);

    fireEvent.click(interviewButton);
    expect(onChangeStatusMock).toHaveBeenCalledWith({ candidate: MOCK_CANDIDATE_SHORTLIST, newStatus: 'interview' });
    expect(onChangeStatusMock).toHaveBeenCalledTimes(2);
  });

  it('renders the buttons for the INTERVIEW stage', async () => {
    render(
      <CandidateActionButton
        candidate={MOCK_CANDIDATE_INTERVIEW}
        onChangeStatus={onChangeStatusMock}
      />,
    );

    const rejectButton = await screen.findByTestId(/btnReject/i);
    const hireButton = await screen.findByTestId(/btnHire/i);

    fireEvent.click(rejectButton);
    expect(onChangeStatusMock).toHaveBeenCalledWith({ candidate: MOCK_CANDIDATE_INTERVIEW, newStatus: 'reject' });

    fireEvent.click(hireButton);
    expect(onChangeStatusMock).toHaveBeenCalledWith({ candidate: MOCK_CANDIDATE_INTERVIEW, newStatus: 'hired' });
  });

  it('does not render any buttons for the HIRED or REJECT stage', () => {
    render(
      <CandidateActionButton
        candidate={MOCK_CANDIDATE_REJECT}
        onChangeStatus={onChangeStatusMock}
      />,
    );

    const hireButton = screen.queryAllByTestId(/btnHired/i);
    const rejectButton = screen.queryAllByTestId(/btnReject/i);
    const interviewButton = screen.queryAllByTestId(/btnInterview/i);
    const shortlistButton = screen.queryAllByTestId(/btnShortlist/i);

    expect(hireButton.length).toEqual(0);
    expect(rejectButton.length).toEqual(0);
    expect(interviewButton.length).toEqual(0);
    expect(shortlistButton.length).toEqual(0);
  });

  it('does not render any buttons for NULL stage', () => {
    render(
      <CandidateActionButton
        candidate={MOCK_CANDIDATE_STAGE_NULL}
        onChangeStatus={onChangeStatusMock}
      />,
    );

    const hireButton = screen.queryAllByTestId(/btnHired/i);
    const rejectButton = screen.queryAllByTestId(/btnReject/i);
    const interviewButton = screen.queryAllByTestId(/btnInterview/i);
    const shortlistButton = screen.queryAllByTestId(/btnShortlist/i);

    expect(hireButton.length).toEqual(0);
    expect(rejectButton.length).toEqual(0);
    expect(interviewButton.length).toEqual(0);
    expect(shortlistButton.length).toEqual(0);
  });
});
