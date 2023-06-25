'use client';

import { TALENT_DATA, TALENT_STAGE } from '@/constants';
import React, { useState } from 'react';
import { IOnChangeStatus } from '@/interfaces';
import TRANSLATION from '@/locale';
import CandidateCard from './components/CandidateCard';

const TalentList: React.FC = () => {
  const { message } = TRANSLATION;

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
    return <p className="text-center text-gray-600">{message.emptyTalent}</p>;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-wrap">
          {Object.entries(TALENT_STAGE).map(([key, value]) => (
            <div
              role="presentation"
              key={key}
              className={`mr-4 cursor-pointer ${activeTab === value ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
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
