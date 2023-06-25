import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TalentList from '../page';

describe('Talent List Page', () => {
  it('snapshot stages', async () => {
    render(<><TalentList /></>);

    const labelStageList = await screen.findAllByTestId(/labelStage/i);
    expect(labelStageList.map((labelStage) => labelStage.textContent)).toMatchInlineSnapshot(`
      [
        "NEW",
        "SHORTLIST",
        "INTERVIEW",
        "HIRED",
        "REJECT",
      ]
    `);
  });

  it('click to change tab', async () => {
    render(<TalentList />);

    const labelReject = await screen.findByText('REJECT');
    const rejectButton = await screen.findByTestId(/btnReject/i);
    const shortlistButton = await screen.findByTestId(/btnShortlist/i);

    expect(rejectButton).toBeInTheDocument();
    expect(shortlistButton).toBeInTheDocument();
    fireEvent.click(rejectButton);

    expect(labelReject).toBeInTheDocument();
    fireEvent.click(labelReject);
  });
});
