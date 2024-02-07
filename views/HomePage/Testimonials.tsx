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
    companyLogoUrl: 'https://media.licdn.com/dms/image/D4D0BAQGa6SA7ZwG5tA/company-logo_200_200/0/1693661534859/condo_srl_logo?e=2147483647&v=beta&t=G8_ZclfMF1KqqkyP4qUnaZEhu3xwtS7vU85qQijHQ80',
    content: `Really good. I am so pleased with this product. I didn't even need training.`,
    author: {
      name: 'Pedro Ignacio Chiesa',
      title: 'CEO & Founder Condo Srl',
      avatarUrl: 'https://media.licdn.com/dms/image/C4D03AQFgMCYXkclc7A/profile-displayphoto-shrink_800_800/0/1651726795904?e=1712793600&v=beta&t=bRH-YDLLUS2hYY5J5JVGGp_AqYga-5npkoi9grkVcIU',
    },
  },
  {
    companyLogoUrl: 'https://media.licdn.com/dms/image/D4D0BAQGa6SA7ZwG5tA/company-logo_200_200/0/1693661534859/condo_srl_logo?e=2147483647&v=beta&t=G8_ZclfMF1KqqkyP4qUnaZEhu3xwtS7vU85qQijHQ80',
    content: `It's really wonderful. I use saas product often. Thank You! Saas product has really helped our business.`,
    author: {
      name: 'Camilo Blanco de la Vega',
      title: 'Co-Founder Fran Bot',
      avatarUrl: 'https://media.licdn.com/dms/image/C4E03AQG65meXF0G_Cw/profile-displayphoto-shrink_800_800/0/1596047638192?e=1712793600&v=beta&t=mSCKcC48O4DqxmhQPBhkgxFxHWlQ8XUMjjjCpiJFcNY',
    },
  },
  {
    companyLogoUrl: 'https://media.licdn.com/dms/image/D4D0BAQGa6SA7ZwG5tA/company-logo_200_200/0/1693661534859/condo_srl_logo?e=2147483647&v=beta&t=G8_ZclfMF1KqqkyP4qUnaZEhu3xwtS7vU85qQijHQ80',
    content: `Since I invested in saas product I made over 100,000 dollars profits. It really saves me time and effort. Saas product is exactly what our business has been lacking.`,
    author: {
      name: 'Augusto Masetti',
      title: 'Co-Founder Fran Bot',
      avatarUrl: 'https://media.licdn.com/dms/image/D4D03AQEUCtLA7WI_rA/profile-displayphoto-shrink_800_800/0/1683959263443?e=1712793600&v=beta&t=_fw15_8hhiivjMW65SkbJFhidaLyh_Qbg6Drm4oG4ZY',
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
