import styled from 'styled-components';
import ListArrow from '../../images/icons/ListArrow.svg';

const Main = styled.div`
  z-index: 1;
  margin: 0 auto;
  max-width: 1110px;
`

const MainCont = styled.div`
  padding: 100px 0 120px 0;
`

const CaptionsCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FirstLine = styled.p`
  font-family: 'Gilroy-Light';
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 29px;
  //text-align: center;
  color: white;
`

const SecondLine = styled.p`
  font-family: 'NotoSerif-Bold';
  font-style: normal;
  //font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  //text-align: center;
  color: white;

  margin-top: 15px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 63px 0 0 150px;
  width: 773px;
  align-items: center;
`

const List = styled.div`
  height: 105px;  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ListItem = styled.div`
  display: flex;
  align-items: center;
  .list_item_pic{
    width: 17px;
    height: 17px;
  }
  .list_item_text{
    padding-left: 20px;
    font-family: 'Gilroy-Light';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
  }
`

const Subscription = styled.div`

`

const MailingBorder = styled.div`
  width: 448px;
  height: 114px;
  border: 1px solid white;
`

const Mailing = styled.div`
  position: absolute;
  width: 418px;
  height: 85px;
  background: white;
  margin: 15px;
  display: flex;
  align-items: center;
`

const InputwButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 22px;
  width: 100%;
  .email_input{
    width: 180px;
    height: 45px;
    border: 1px solid #D6D6D6;
    padding-left: 20px;
    font-family: Gilroy;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(51, 51, 51, 0.5);
  }
  .email_input:focus{
    padding-left: 0px;
    width: 195px;
    padding-left: 5px;
  }
`

const SubBtn = styled.div`
  .sub_button{
    width: 159px;
    height: 45px;
    background: #333333;
    border: none;
    font-family: Gilroy;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: white;
    transition: 0.5s linear;
  }
  .sub_button:hover{
    color: black;
    background: white;
    border: 1px solid black;
  }
`

const MailingSection = () =>{
  return(  
    <Main>
      <MainCont>
        <CaptionsCont>
          <FirstLine> Полезные советы и персональный предложения </FirstLine>
          <SecondLine> Эксклюзивная рассылка </SecondLine>
        </CaptionsCont>  
        <Content>
            <List>
              <ListItem>
                <img src={ListArrow} alt='' className='list_item_pic'></img>
                <p className='list_item_text'> Личный менеджер </p>
              </ListItem>
              <ListItem>
                <img src={ListArrow} alt='' className='list_item_pic'></img>
                <p className='list_item_text'> Доставка и оформление </p>
              </ListItem>
              <ListItem>
                <img src={ListArrow} alt='' className='list_item_pic'></img>
                <p className='list_item_text'> Индивидуальный дизайн </p>
              </ListItem>
            </List>
            <Subscription>
              <MailingBorder>
                <Mailing>
                  <InputwButton>
                    <input type='text' name='email' placeholder='Ваш E-Mail' className='email_input'/>
                    <SubBtn href=''><button className='sub_button'>Отправить</button></SubBtn>
                  </InputwButton>
                </Mailing>
              </MailingBorder>
            </Subscription>
        </Content>
      </MainCont>
    </Main>
  );
};
    
  export default MailingSection; 