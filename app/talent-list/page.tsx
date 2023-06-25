'use client';

import { TALENT_DATA, TALENT_STAGE } from '@/constants';
import React, { useState } from 'react';
import { IOnChangeStatus } from '@/interfaces';
import TRANSLATION from '@/locale';
import CandidateCard from './components/CandidateCard';
import { TALENT_LIST_STYLE } from './styles';

const TalentList: React.FC = () => {
  const { message } = TRANSLATION;
  const { talentListStyle } = TALENT_LIST_STYLE;

  const [activeTab, setActiveTab] = useState(TALENT_STAGE.NEW);
  const [talentList, setTalentList] = useState(TALENT_DATA);

  const onTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const onChangeStatus = ({ candidate, newStatus }: IOnChangeStatus) => {
    const filteredTalent = talentList.filter((talent) => talent.id !== candidate.id);
    setTalentList([
      ...filteredTalent,
      {
        ...candidate,
        stage: newStatus,
      },
    ]);
  };

  const renderCandidateCards = () => {
    const filteredTalent = talentList.filter((data) => data.stage === activeTab);
    if (filteredTalent.length) {
      return filteredTalent.map(
        (candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} onChangeStatus={onChangeStatus} />
        ),
      );
    }
    return <p className={talentListStyle.emptyTalent}>{message.emptyTalent}</p>;
  };

  return (
    <div className={talentListStyle.mainContainer}>
      <div className={talentListStyle.stageContainer}>
        <div className={talentListStyle.contentWrapper}>
          {Object.entries(TALENT_STAGE).map(([key, value]) => (
            <div
              role="presentation"
              key={key}
              data-testid="labelStage"
              className={`${talentListStyle.textTalentStage} ${activeTab === value ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
              onClick={() => onTabClick(value)}
            >
              {key}
            </div>
          ))}
        </div>
      </div>
      <div>
        {renderCandidateCards()}
      </div>
    </div>
  );
};

export default TalentList;
