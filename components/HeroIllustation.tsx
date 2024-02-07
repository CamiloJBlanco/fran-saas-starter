import Image from "next/image";
import styled from 'styled-components';
import { media } from 'utils/media';

export default function HeroIllustration() {
  const condoImage = "https://static.wixstatic.com/media/53ea4d_1bb2f90d97d0407ab8be326b1df7687d~mv2.png/v1/fill/w_476,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/53ea4d_1bb2f90d97d0407ab8be326b1df7687d~mv2.png"

  return (
    // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
    //   <Image src={condoImage} alt="Condo Image" width={500} height={190} />
    // </div>
    <ImageContainer>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <Image src={condoImage} alt="Condo Image" width={500} height={190} />
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