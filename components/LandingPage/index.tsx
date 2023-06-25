import React from 'react';
import Link from 'next/link';
import TRANSLATION from '@/locale';

const LandingPage: React.FC = () => {
  const { dashboard } = TRANSLATION;
  return (
    <div className="flex items-center justify-center">
      <section className="text-center">
        <p className="text-2xl lg:text-4xl font-bold text-blue-900 mb-4">{dashboard.dashboardTitle}</p>
        <p className="text-md lg:text-lg text-gray-600">{dashboard.dashboardDesc}</p>
        <button type="button" className="bg-blue-900 text-white rounded-full px-6 py-2 mt-4 hover:bg-blue-800">
          <Link href="/talent-list" className="">{dashboard.dashboardButton}</Link>
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
