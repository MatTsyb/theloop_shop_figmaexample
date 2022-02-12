import styled from 'styled-components';
import Visa from '../../images/icons/Visa.svg';
import MasterCard from '../../images/icons/MasterCard.svg';
import Phone from '../../images/icons/Phone.svg';
import Mail from '../../images/icons/Mail.svg';
import YT from '../../images/icons/contacts/YT.svg';
import VK from '../../images/icons/contacts/VK.svg';
import FB from '../../images/icons/contacts/FB.svg';
import TT from '../../images/icons/contacts/TT.svg';
import E from '../../images/icons/contacts/E.svg';

const Main = styled.div`
  z-index: 1;
  margin: 0 auto;
  max-width: 1110px;
`

const MainCont = styled.div`
  padding: 80px 0 60px 0;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

const LinkCont = styled.div`
  width: 255px;
`

const ContTitle = styled.div`
  font-family: 'Gilroy-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const TitleDivider = styled.div`
  height: 0.1px;
  border: 0.1px solid #333333;
  margin: 10px 0 30px 0;
`

const MainContent = styled.div`
  font-family: 'Gilroy-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  .payment_text{
    margin-bottom: 21px;
  }
  .contacts{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .contacts_image{
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }
  .socials_text{
    margin-bottom: 21px;
  }
`

const List = styled.div`
  .list_href{
    text-decoration: none;
    color: #333333;
    transition: 0.3s linear;
  }
  .list_href:hover{
    font-weight: bold;
    font-size: 17px;
  }
  .list_item{
    margin-bottom: 15px;
    list-style-type: none;
  }
`

const Cards = styled.div`
  display: flex;
  .cards_item{
    margin-right: 20px;
    width: 45px;
    height: 30px;
  }
`

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 201px;
  .soc_item{
    width: 25px;
    height: 25px;
  }
`

const LinksSection = () =>{
  return(  
    <Main>
      <MainCont>
        <Content>
          <LinkCont>
            <ContTitle> Полезные ссылки </ContTitle>
            <TitleDivider></TitleDivider>
            <MainContent>
              <List>
                <ul>
                  <a href='' className='list_href'><li className='list_item'> Доставка </li> </a>
                  <a href='' className='list_href'><li className='list_item'> Оплата </li> </a>
                  <a href='' className='list_href'><li className='list_item'> Акции </li> </a>
                  <a href='' className='list_href'><li className='list_item'> Политика конфеденциальности </li> </a>
                </ul>
              </List>
            </MainContent>
          </LinkCont>
          <LinkCont>
            <ContTitle> Оплата </ContTitle>
            <TitleDivider></TitleDivider>
            <MainContent> 
              <p className='payment_text'> Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Ullamcorper <br/> justo, nec, pellentesque. </p> 
            </MainContent>
            <Cards>
              <img src={Visa} alt='Visa' className='cards_item'/>
              <img src={MasterCard} alt='Master Card' className='cards_item'/>
            </Cards>
          </LinkCont>
          <LinkCont>
            <ContTitle> Контакты </ContTitle>
            <TitleDivider></TitleDivider>
            <MainContent>
              <div className='contacts'>
                <img src={Phone} alt='Phone' className='contacts_image'/>
                <p className='contacts_text'> 8 (812) 234-56-55 </p>
              </div>
              <div className='contacts'>
                <img src={Phone} alt='Phone' className='contacts_image'/>
                <p className='contacts_text'> 8 (812) 234-56-66 </p>
              </div>
              <div className='contacts'>
                <img src={Mail} alt='Mail' className='contacts_image'/>
                <p className='contacts_text'> ojjo@ojjo.ru </p>
              </div>
            </MainContent>
          </LinkCont>
          <LinkCont>
            <ContTitle> Социальные сети </ContTitle>
            <TitleDivider></TitleDivider>
            <MainContent>
              <p className='socials_text'> Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Ullamcorper <br/> justo, nec, pellentesque. </p>
              <Socials>
                <img src={YT} alt='' className='soc_item'/>
                <img src={VK} alt='' className='soc_item'/>
                <img src={FB} alt='' className='soc_item'/>
                <img src={TT} alt='' className='soc_item'/>
                <img src={E} alt='' className='soc_item'/>
              </Socials>
            </MainContent>
          </LinkCont>
        </Content>
      </MainCont>
    </Main>
  );
};
    
  export default LinksSection; 