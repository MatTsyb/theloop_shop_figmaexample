import styled from 'styled-components';

const Main = styled.div`
  z-index: 1;
  margin: 0 auto;
  max-width: 1110px;
`

const MainCont = styled.div`
  height: 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Gilroy-Medium';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
`

const Divider = styled.div`
  width: 100%;
  border: 1px solid #333333;
`

const Footer = () =>{
  return( 
    <Main>
      <Divider></Divider>
      <MainCont>
        <p> (c) 2020 OJJO jewelry </p>
        <p> Договор публичной офферты </p>
        <p> Контрагентам </p>
        <p> Сделано Mattsyb по дизайну с Figma.info </p>
      </MainCont>
    </Main>
  );
};
    
export default Footer; 