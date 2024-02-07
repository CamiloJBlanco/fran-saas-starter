import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';
import styled from 'styled-components';
import { EnvVars } from 'env';
import { media } from 'utils/media';

interface ShareWidgetProps {
  title: string;
  slug: string;
}

export default function ShareWidget({ title, slug }: ShareWidgetProps) {
  const shareMessage = 'New article: ' + title;

  return (
    <Wrapper>
      <FacebookShareButton title={shareMessage} url={"https://www.condo.com.ar/"}>
        <FacebookIcon />
      </FacebookShareButton>
      <WhatsappShareButton title={shareMessage} url={"https://wa.me/5493413247522"}>
        <WhatsappIcon />
      </WhatsappShareButton>
      <LinkedinShareButton title={shareMessage} url={"https://www.linkedin.com/company/condo-srl/"}>
        <LinkedinIcon />
      </LinkedinShareButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  position: sticky;
  align-items: flex-start;
  margin-left: -10rem;
  margin-top: -22.4rem;
  top: 50%;
  z-index: var(--z-sticky);
  transform: translateY(-50%);

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${media('<=largeDesktop')} {
    transform: translateY(-50%) scale(0.8);
  }

  ${media('<=desktop')} {
    display: none;
  }
`;
