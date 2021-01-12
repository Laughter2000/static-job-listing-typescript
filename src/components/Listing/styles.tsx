import styled from 'styled-components';

export const CardList = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 30px auto 0;
  width: 100%;
  justify-content: center;
`;

export const FilterList = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  width: 90%;
  background-color: white;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin: 20px auto;
  padding: 30px 20px;
  border-radius: 5px;
  position: relative;
  bottom: 50px;

  @media only screen and (min-width: 841px) {
    padding: 30px 20px;
    height: 100%;
  }
`;

export const Filters = styled.div`
  flex: 0 0 80%;
  display: flex;
  flex-flow: row wrap;
`;

export const FilterWrap = styled.div`
  display: flex;
`;

export const FilterItem = styled.span`
  margin-right: 7px;
  font-size: 18px;
  color: hsl(180, 29%, 50%);
  background-color: hsl(180, 52%, 96%);
  border-radius: 5px;
  padding: 0 7px;
  padding-right: 0;
  margin-top: 20px;
  margin-right: 10px;
  cursor: pointer;
  display: flex;
`;

export const Span = styled.span`
  padding: 5px 0;
`;

export const RemoveIcon = styled.img`
  background-color: hsl(180, 29%, 50%);
  margin-left: 5px;
  padding: 5px 7px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  &:hover {
    background-color: hsl(180, 14%, 20%);
  }
`;

export const SpanText = styled.span`
  display: inline-block;
  align-self: center;
  font-weight: 700;
  flex: 0 0 15%;
  color: hsl(180, 29%, 50%);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
