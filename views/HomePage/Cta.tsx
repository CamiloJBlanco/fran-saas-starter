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
            Discover a comprehensive suite of premium features designed to enhance the experience for Home Units Residents and HOA Managers alike.
            Our platform revolutionizes communication and task management, offering seamless integration and intuitive user adoption.
            With Natural Language Understanding and conversational flexibility, users can interact effortlessly.
            We prioritize user satisfaction with a focus on enhanced user experience, robust data security, and personalized services.
            Our round-the-clock customer support ensures continuous assistance, while time-saving automation drives increased productivity.
            HOA Managers benefit from reduced workloads through automation and tailored solutions that cater to various HOA needs.
            Our platform is adaptable, allowing users to stay ahead of evolving Real Estate trends and market dynamics.
            Experience the future of Real Estate management with us.
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
