import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import { EnvVars } from 'env';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Fran Bot"
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          {/* Necesario conservar el componente
          <Partners /> */}
          <BasicSection imageUrl="/demo-illustration-1.svg" title="About us" overTitle="Fran's History">
            <p style={{ textAlign: 'justify' }}>
              Since 2010 we have been dedicated exclusively to the administration of horizontal property consortia in the city of Rosario, providing security, value and confidence
              to the buildings, their owners and those who live in them. We work daily to offer a better service, focused on our clients, that is reliable and professional.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="The best assistance for you" overTitle="Professionals" reversed>
            <p style={{ textAlign: 'justify' }}>
              We have professionals who constantly advise us on legal and accounting aspects in order to comply with the current demands of our activity,
              being able to correctly safeguard the rights and obligations of our clients. <br /> <br />
              Likewise, we have a wide range of professionals and technicians for maintenance and improvement work, such as: electrical installations, maintenance of elevators,
              gates, disinfection, maintenance of water pumps, masonry, plumbing, gas fitters, architects, surveyors, engineers . and other suppliers who together with them make
              it possible to respond to the requirements of our clients. At the same time, in order to be able to sustain the quality of our service over time, we carry out a continuous
              evaluation of our suppliers, considering costs, deadlines, and completion of the work together with the opinion of our clients, thus monitoring closeness together with the
              customer of the service providers in the consortia we manage.<br /> <br />
              The administration is registered in the Public Registry of Consortium Administrators of the Municipality of Rosario, in full compliance with
              Ordinance No. 9008/12. Compliance with this municipal ordinance reinforces and provides an additional guarantee framework on the responsibility with which we carry out our work.
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          {/* <FeaturesGallery /> */}
          {/* <Features /> */}
          <Testimonials />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;