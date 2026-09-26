import Navigation from '../../components/Navigation';

import OriginStorySection from './comps/OriginStorySection';


import StoryInFramesSection from './comps/StoryInFramesSection';
import PhilosophySection from './comps/PhilosophySection';
import HowWeWorkSection from './comps/HowWeWorkSection';
import CTASection from './comps/CTASection';
import WhatWeBelieveSection from './comps/WhatWeBelieveSection';
import HowWeWorkRemotely from '../../components/HowWeWorkRemotely';
import Footer from '../../components/Footer';

const InSide_Landing = () => {


  return (
    <>
      

      <div>

        <Navigation />

        <OriginStorySection />

          {/* <MindsetSection/> */}
          <StoryInFramesSection />
          <PhilosophySection />
          <HowWeWorkSection />
          <HowWeWorkRemotely variant="dark" />
          <CTASection />
          <WhatWeBelieveSection />
          <Footer />

      </div>
    </>
  );
};

export default InSide_Landing;
