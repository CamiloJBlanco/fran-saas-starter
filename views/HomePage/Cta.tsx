import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';

export default function Cta() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <OverTitle>Features</OverTitle>
          <SectionTitle>Want to know more about echoassist&apos;s features?</SectionTitle>
          <Description>
            Explore a comprehensive array of premium features meticulously crafted to elevate the experience for both Home Unit Residents and HOA Managers.
            Our platform redefines communication and task management, seamlessly integrating with intuitive user adoption at its core.
            With advanced Natural Language Understanding (NLU) and conversational flexibility, users can engage effortlessly.
            Our paramount focus lies in user satisfaction, underscored by enhanced user experience, stringent data security measures, and personalized services.
            HOA Managers reap the rewards of streamlined workflows through automation and bespoke solutions tailored to meet diverse HOA requirements.
            Embracing adaptability, our platform empowers users to stay abreast of evolving Real Estate trends and market dynamics.
          </Description>
          <ButtonGroup>
            <Button onClick={() => setIsModalOpened(true)}>
              Subscribe to the newsletter <span>&rarr;</span>
            </Button>
            <NextLink href="/features" passHref>
              <OutlinedButton transparent>
                Features <span>&rarr;</span>
              </OutlinedButton>
            </NextLink>
          </ButtonGroup>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
  text-align: justify;
  ${media('<=tablet')} {
    font-size: 1.6rem;
    padding: 0 0.3rem;
  }
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;
