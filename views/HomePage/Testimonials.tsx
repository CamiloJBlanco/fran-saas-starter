import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import Separator from 'components/Separator';
import { media } from 'utils/media';

const TESTIMONIALS = [
  {
    companyLogoUrl: '/franHappy.png',
    content: `Working with echoassist to develop and integrate Fran, Condo's AI-powered bot, was surprisingly seamless. Fran has revolutionized our customer experience, making interactions effortless and efficient.`,
    author: {
      name: 'Pedro Ignacio Chiesa',
      title: 'CEO & Founder Condo Srl',
      avatarUrl: 'https://media.licdn.com/dms/image/C4D03AQFgMCYXkclc7A/profile-displayphoto-shrink_800_800/0/1651726795904?e=1712793600&v=beta&t=bRH-YDLLUS2hYY5J5JVGGp_AqYga-5npkoi9grkVcIU',
    },
  },
  {
    companyLogoUrl: '/franWink.png',
    content: `Really good. I am so pleased with this product. I didn't even need training.`,
    author: {
      name: 'Micaela Belén Chicco',
      title: 'COO - Condo Srl',
      avatarUrl: 'https://media.licdn.com/dms/image/D5603AQGTJk_u_NAPYQ/profile-displayphoto-shrink_800_800/0/1690583711702?e=1712793600&v=beta&t=KsFjRj7Rozd6FK9UAtTn2L-e6Ev7l_MIf0aCGRsqJbw',
    },
  },
  {
    companyLogoUrl: '/franXd.png',
    content: `It's really wonderful. I use echoassist often. Thank You! echoassist has really helped our business.`,
    author: {
      name: 'Galo Bernardi',
      title: 'Project Leader - Condo Srl',
      avatarUrl: 'https://media.licdn.com/dms/image/D4D03AQE43vmZ-utsgg/profile-displayphoto-shrink_800_800/0/1699550489570?e=1712793600&v=beta&t=725LQlJuAQprbUV8Cre26KRnx4H6V8GIw8oZPApZRmw',
    },
  },
];

export default function Testimonials() {
  return (
    <div>
      <Separator />
      <TestimonialsWrapper>
        <Swiper modules={[Navigation, Autoplay, A11y]} slidesPerView={1} autoplay={{ delay: 8000 }} centeredSlides navigation loop>
          {TESTIMONIALS.map((singleTestimonial, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialCard>
                <NextImage
                  src={singleTestimonial.companyLogoUrl}
                  alt={`${singleTestimonial.author.name}'s company logo`}
                  width={40}
                  height={40}
                />
                <Content>“{singleTestimonial.content}”</Content>
                <AuthorContainer>
                  <AuthorImageContainer>
                    <NextImage src={singleTestimonial.author.avatarUrl} alt={singleTestimonial.author.name} width={48} height={48} />
                  </AuthorImageContainer>
                  <AuthorContent>
                    <AuthorName>{singleTestimonial.author.name}</AuthorName>
                    <AuthorTitle>{singleTestimonial.author.title}</AuthorTitle>
                  </AuthorContent>
                </AuthorContainer>
              </TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </TestimonialsWrapper>
      <Separator />
    </div>
  );
}

const TestimonialsWrapper = styled(Container)`
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    color: rgb(var(--secondary));

    ${media('<=desktop')} {
      display: none;
    }
  }

  .swiper-button-prev {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }

  .swiper-button-next {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

const Content = styled.blockquote`
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  font-style: italic;
  max-width: 60%;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.4rem;
`;

const AuthorTitle = styled.p`
  font-weight: bold;
`;

const AuthorName = styled.p`
  font-weight: normal;
`;

const AuthorImageContainer = styled.div`
  display: flex;
  border-radius: 10rem;
  margin-right: 1rem;
  overflow: hidden;
`;
