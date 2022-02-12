import styled from 'styled-components';
import Favorite from '../../../images/icons/Favorite.svg';
import Contacts from '../../../images/icons/Contacts.svg';
import '../../../App.css';
import OJJOLogo from '../../../images/OJJO.svg';
import SearchIcon from '../../../images/icons/Search.svg'

const Main = styled.div`
  z-index: 1;
  margin: 0 auto;
  max-width: 1110px;
  .divider_margin{
    margin: unset;
    margin-top: 80px;
  }
`

const HeaderLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  font-style: normal;
  font-family: 'Gilroy';
`

const Header1stCont = styled.div`
  width: 321px;
  display: flex;
  justify-content: space-between;
  a{
    font-weight: normal;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    line-height: 21px;
    transition: 0.3s linear;
  }
  a:hover{
    font-size: 18px;
    font-family: 'Gilroy-Medium';
  }
  .itemHeader{
    margin-left: 10px;
  }
`

const Header2stCont = styled.div`
  margin-left: 22px;
  p{
    text-transform: uppercase;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.05em;
  }
`

const Header3rdCont = styled.div`
  width: 348px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 21px;
  .search{
    display: flex;
    align-items: center;
    width: 75px;
    height: 24px;
    font-family: 'Gilroy-Medium';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    transition: 0.3s linear;
  }
  .search_button{
    display: flex;
    background: none;
    border: none;
  }
  .search_button:hover{
    cursor: pointer;
  }
  .search_icon{
    width: 18px;
    height: 18px;
  }
  .search_input{
    width: 60px;
    margin-left: 13px;
    background: none;
    border: none;
    color: #FFFFFF;
    font-family: 'Gilroy-Medium';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    border-radius: 5px;
    transition: 0.3s linear;
  }
  .search_input:focus{
    background: #FFFFFF;
    color: #333333;
    border-radius: 5px;
    font-size: 16px;
  }
  .cont_fav{
    display: flex;
    justify-content: space-between;
    align-items: end;
    height: 24px;
    width: 63px;
  }
  .header_contacts{
    width: 16px;
    height: 16px;
  }
  .header_favorite{
    margin-left: 29.64px;
    width: 16.29px;
    height: 14.57px;
  }
`

const Header = () => {
  return(
  <Main>
    <HeaderLine>
      <Header1stCont>
        <a href=''>Контрагентам</a>
        <a href='' className='itemHeader'>Дизайнерам</a>
        <a href='' className='itemHeader'>Вакансии</a>
      </Header1stCont>
      <Header2stCont>
        <a href='/'><img src={OJJOLogo} alt="OJJO" className='ojjo_logo'/></a>
      </Header2stCont>
      <Header3rdCont>
        <div className='search'> 
          <button className='search_button'><img src={SearchIcon} alt='' className='search_icon'/></button>
          <input type='text' name='search' placeholder='Поиск' className='search_input'></input> 
        </div>
        <p>Вход/регистрация</p>
        <div className='cont_fav'>
          <a href=''><img src={Contacts} alt="Contacts" className='header_contacts'/></a>
          <a href=''><img src={Favorite} alt="Favorite" className='header_favorite'/></a>
        </div>
      </Header3rdCont>
    </HeaderLine>
  </Main>
  );
};

export default Header; 