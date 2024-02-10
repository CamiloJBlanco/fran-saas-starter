import Image from "next/image";
import styled from 'styled-components';
import { media } from 'utils/media';

export default function HeroIllustration() {
  return (
    <ImageContainer>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <Image src={"/franUrl.png"} alt="Condo Image" width={400} height={400} />
      </div>
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  flex: 1;

  position: relative;
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;