import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import { EnvVars } from 'env';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import Hero from 'views/HomePage/Hero';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="echoassist"
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          {/* Necesario conservar el componente
          <Partners /> */}
          <BasicSection imageUrl="/dronImage.svg" title="About us" overTitle="echoassist&apos;s History">
            <p style={{ textAlign: 'justify' }}>
              Echoassist disrupts Real Estate communication by providing tailored AI solutions for Homeowners Associations (HOAs),
              prioritizing data security and industry expertise to foster seamless interactions, optimize operations, and drive satisfaction
              for both managers and residents.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/tabletImage.svg" title="The best assistance for you" overTitle="Professionals" reversed>
            <p style={{ textAlign: 'justify' }}>
              Our team is uniquely qualified to build our startup due to the diverse skill set and expertise of its members. Our founders bring a unique blend of technical proficiency and firsthand industry experience, with backgrounds in AI engineering, entrepreneurship and understanding of complex cultural dynamics.
              <br /> <br />
              Additionally, our advisory board members offer strategic guidance in IP protection, business strategy, and Real Estate development, complementing our team&apos;s skills.<br /> <br />
              Moreover, our employees bring valuable firsthand experience in HOA Management and development, coupled with technical skills in areas such as GenAI and database management.
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          {/* <FeaturesGallery /> */}
          <Features />
          <Testimonials />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 8rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 8rem;
  }

  & > *:not(:first-child) {
    margin-top: 7rem;
  }
`;