import React from 'react';
import Link from 'next/link';
import TRANSLATION from '@/locale';
import { LANDING_PAGE_STYLE } from '@/app/styles';

const LandingPage: React.FC = () => {
  const { landingPage } = TRANSLATION;
  return (
    <div className={LANDING_PAGE_STYLE.landingPageContainer}>
      <section className={LANDING_PAGE_STYLE.textCenter}>
        <p data-testid="landingTitle" className={LANDING_PAGE_STYLE.landingPageTitle}>{landingPage.landingTitle}</p>
        <p data-testid="landingDesc" className={LANDING_PAGE_STYLE.landingPageDesc}>{landingPage.landingDesc}</p>
        <button type="button" className={LANDING_PAGE_STYLE.landingPageBtn}>
          <Link data-testid="landingButton" href="/talent-list">{landingPage.landingButton}</Link>
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
