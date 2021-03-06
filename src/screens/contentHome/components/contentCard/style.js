import styled from "styled-components";

export const ContentCard = styled.div`
  margin: 20px 0;
  max-width: 24%;
  min-width: 220px;
  background-color: #fff;
  max-height: 100vh;
  min-height: 200px;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media (max-width: 478px) {
    max-width: 100%;
  }
`;

export const Container = styled.div`
  padding: 15px 10px;
  background-color: #e5e5e5;
`;
// backgroud-image: ${({ bgImg }) => `url(${bgImg})`};

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px 0;
`;

export const ProductImage = styled.div`
  height: auto;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  width: fit-content;
  margin: auto;
  img,
  video {
    max-width: 100%;
  }
`;

export const Cross = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
  background: rgba(0, 0, 0, 0.47);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexScroll = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  padding: 0 2px 5px 2px;
  -ms-overflow-style: none;
  scrollbar-width: 2px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 2px;
  margin: 2px;
  background: #ffffff;
  border: 2px solid rgba(207, 207, 207, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  white-space: nowrap;
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 0.6rem;
    line-height: 14px;
    align-items: flex-end;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const CategoryGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  span {
    margin-left: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 0.7rem;
    line-height: 14px;
    display: flex;
    align-items: flex-end;
    letter-spacing: -0.02em;
    color: #3b5998;
    white-space: nowrap;
  }
`;

export const ContentWrapper = styled.div`
  background: #f8fafc;
  border-radius: 10px;
  padding: 10px;
  font-size: 0.85rem;
  max-height: 200px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 19px;
    display: flex;
    align-items: flex-end;
    letter-spacing: -0.02em;
    span {
      font-weight: 400;
      margin-left: 15px;
    }
  }
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 0.85rem;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const ProductOverviewWrap = styled.div`
  position: absolute;
  bottom: 0px;
  left: 5px;
  ul {
    list-style: none;
    padding: 0;
    li {
      display: flex;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 0.8rem;
      line-height: 14px;
      display: flex;
      align-items: center;
      letter-spacing: -0.02em;
      color: #ffffff;
      padding: 4px 0;
      span {
        margin-left: 7px;
        filter: drop-shadow(0px 0px 4px #000);
      }
    }
  }
`;
