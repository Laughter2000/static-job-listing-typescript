import styled, { css } from 'styled-components';

const animatedCss = css`
  opacity: 1;
  transform: translateY(0);
`;
export const Card = styled.div<{ featured: boolean; animated: boolean }>`
  display: flex;
  flex-flow: row wrap;
  flex: 0 0 90%;
  height: 300px;
  width: 90%;
  background-color: white;
  justify-content: center;
  margin: 20px auto;
  padding: 30px 20px;
  border-radius: 5px;
  box-shadow: 2px 5px 10px hsl(180, 8%, 52%);
  border-left: ${(props) => (props.featured ? `7px hsl(180, 29%, 50%) solid` : 'initial')};
  transform: translateY(50px);
  opacity: 0;
  transition: 500ms all ease-in-out;
  ${(props) => props.animated && animatedCss};

  @media only screen and (min-width: 841px) and (max-width: 1249px) {
    flex: 0 0 45%;
    margin-left: 2%;
    margin-right: 2%;
  }

  @media only screen and (min-width: 1250px) {
    padding: 20px 0;
    height: 160px;
  }
`;

export const CardType = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 0;
  padding-bottom: 10px;
  border-bottom: 1px hsl(180, 8%, 52%) solid;
  position: relative;
  bottom: 50px;

  @media only screen and (min-width: 1250px) {
    border-bottom: none;
    position: static;
    flex: 0 0 40%;
    margin: 0 5%;
  }
`;

export const CardGeneric = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  flex: 0 0 100%;
`;

export const CardTop = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  align-items: center;
  flex: 0 0 100%;

  @media only screen and (min-width: 1250px) {
    flex: 0 0 75%;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  flex: 0 0 100%;

  @media only screen and (min-width: 1250px) {
    flex: 0 0 25%;
    align-self: center;
  }
`;

export const CardBottom = styled(CardTop)`
  position: relative;
  bottom: 50px;

  @media only screen and (min-width: 1250px) {
    position: static;
    flex: 0 0 40%;
    margin: 0 5%;
  }
`;

export const Header4 = styled.h3`
  font-weight: 700;
  color: hsl(180, 29%, 50%);
  cursor: pointer;
`;

export const Header3 = styled.h3`
  cursor: pointer;
  font-weight: 700;
  color: hsl(180, 14%, 20%);
  flex: 0 0 90%;
  margin-top: 0;
  &:hover {
    color: hsl(180, 29%, 50%);
  }
`;

export const Notify = styled.span<{ featured: boolean }>`
  display: inline-block;
  color: white;
  margin: 0 5px 0 12px;
  border-radius: 20px;
  padding: 7px 10px 3px;
  font-size: 13px;
  background-color: ${(props) => (props.featured ? `hsl(180, 14%, 20%)` : `hsl(180, 29%, 50%)`)};
`;

export const Span = styled.span`
  display: inline-block;
  color: hsl(180, 8%, 52%);
  margin-right: 7px;
  font-size: 18px;
`;

export const Dot = styled(Span)`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: hsl(180, 8%, 52%);
`;

export const SpanText = styled(Span)`
  color: hsl(180, 29%, 50%);
  background-color: hsl(180, 52%, 96%);
  border-radius: 5px;
  padding: 5px 7px;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: hsl(180, 29%, 50%);
    color: white;
  }
`;
