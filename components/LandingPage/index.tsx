import React from 'react';
import Link from 'next/link';
import TRANSLATION from '@/locale';
import landingPageStyle from '@/app/styles';

const LandingPage: React.FC = () => {
  const { landingPage } = TRANSLATION;
  return (
    <div className={landingPageStyle.landingPageContainer}>
      <section className={landingPageStyle.textCenter}>
        <p data-testid="landingTitle" className={landingPageStyle.landingPageTitle}>{landingPage.landingTitle}</p>
        <p data-testid="landingDesc" className={landingPageStyle.landingPageDesc}>{landingPage.landingDesc}</p>
        <button type="button" className={landingPageStyle.landingPageBtn}>
          <Link data-testid="landingButton" href="/talent-list">{landingPage.landingButton}</Link>
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
