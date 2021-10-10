import Container from 'components/Container';
import Page from 'components/Page';
import styled from 'styled-components';
import { media } from 'utils/media';

import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';
import Cta from 'views/ContactPage/Cta';

export default function ContactPage() {
  return (
    <div>
      <Page
        title="Contact"
        description="Minim sint aliquip nostrud excepteur cupidatat amet do laborum exercitation cupidatat ea proident."
      />
      <ContactContainer>
        <InformationSection />
        <FormSection />
      </ContactContainer>
      <Cta />
    </div>
  );
}

const ContactContainer = styled(Container)`
  margin-top: 8rem;
  margin-bottom: 8rem;
  display: flex;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;