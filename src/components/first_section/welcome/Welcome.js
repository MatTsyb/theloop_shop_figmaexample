import styled from 'styled-components';
import data from './data';

const Main = styled.div`
  z-index: 1;
  margin: 0 auto;
  max-width: 1110px;
  margin-top: -110px;
  .divider_margin{
    margin: unset;
    margin-top: 80px;
  }
`

const SloganXBtn = styled.div`
  padding-top: 600px;
  text-align: center;
`

const Slogan = styled.p`
  font-family: 'NotoSerif-Bold';
  line-height: 49px;
  font-style: normal;
  font-size: 36px;
  line-height: 49px;
`

const CatalogBtn = styled.a`
  .catalog_button{
    width: 261px;
    height: 51px;
    background-color: #333333;
    //padding: unset;
    margin-top: 50px;
    border: 1px solid #FFFFFF;
    cursor: pointer;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FFFFFF;
    transition: 0.2s linear; 
  }
  .catalog_button:hover{
    color:  #cec2b5;
    border-color: #997b5c;
  }
`

const ContentDivider = styled.div`
  z-index: 1;
  position: absolute;
  max-width: 100%;
  min-width: 99.8%;
  height: 0px;
  border: 1px solid #FFFFFF;
  left: 0px;
  margin-top: 80px;
`

const PartnersContainer = styled.div`
  display: flex;
  overflow: hidden;
  .partner_cont{
    //width: 175px;
    display: flex;
    margin: 30px 0;
  }
  .partner_pic{
    width: 160px;
    height: 60px;
  }
  .partner_line{
    border: 0.1px solid white;
    height: 58px;
    margin: unset;
    margin: 0px 14px;
    width: 0.1px;
  }
`

function Welcome() {
  return(
    <Main>
      <SloganXBtn>
          <Slogan> Долго, дорого, богато! </Slogan>
        <CatalogBtn href='/catalog'><button className='catalog_button'>Каталог изделий</button></CatalogBtn>
      </SloganXBtn>
      <ContentDivider></ContentDivider>
      <div className='divider_margin'></div>
      <PartnersContainer>
          {data.map((item) => {
              return (
                <div className='partner_cont'>
                  <img src={item.image} alt='Picture' className='partner_pic'/>
                  <div className='partner_line'></div>
                </div>
              );
          })}
      </PartnersContainer>
    </Main>
  );
}

export default Welcome;