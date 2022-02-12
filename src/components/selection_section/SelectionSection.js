import styled from 'styled-components';
import CatPic1 from '../../images/categories/pic1.png';
import CatPic2 from '../../images/categories/pic2.png';
import CatPic3 from '../../images/categories/pic3.png';
import CatPic4 from '../../images/categories/pic4.png';
import CatPic5 from '../../images/categories/pic5.png';
import CatPic6 from '../../images/categories/pic6.png';

const Main = styled.div`
  z-index: 1;
  margin: 0 auto;
  max-width: 1110px;
  padding-top: 100px;
  padding-bottom: 120px;
  /*background-color: white;*/
`

const FirstLine = styled.p`
  font-family: 'Gilroy-Light';
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 29px;
  text-align: center;
  color: #333333;
  margin: unset;
`

const SecondLine = styled.p`
  font-family: 'NotoSerif-Bold';
  font-style: normal;
  font-size: 30px;
  line-height: 41px;
  text-align: center;
  color: #333333;
  margin-top: 14px;
  //margin-bottom: 61px;
`

const CatigoriesConts = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Gilroy-Regular';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 61px 0 55px 0;
  .category{
    z-index: 1;
    border: 1px solid #D6D6D6;
    width: 165px;
    height: 61px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .current_cat{
    width: 165px;
    //border: 0px solid #333333;
    background-color: #333333;
    color: white;
  }
  .oth_cat{
    z-index: 2;
    width: 165px;
    position: absolute;
    margin: 0px 6px 6px 0px;
    height: 61px;
    border: 1px solid #D6D6D6;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s linear; 
  }
  .oth_cat:hover{
    margin: 0px 0px 0px 0px;
    background-color: #9c7750;
    color: white;
  }
`

const CatigoriesPics = styled.div`
  height: 590px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  .pic{
    width: 350px;
    height: 280px;
  }
  .pic_cont{
    display: flex;
    position: relative;
    transition: 0.5s;
  }
  .pic_cont:hover{
  transform: scale(1.1);
  }
  .pic_caption{
    width: 350px;
    position: absolute;
    font-family: 'Gilroy-Regular';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FFFFFF;
    
    top: 222px;
    margin: 0 auto;
  }
`

const SelectionSection = () =>{
  return(
    <Main>
      <div className='ИСПРАВИТЬ НА ФЛЕКС !!!!!!!!!!!!!!!!!!'>
        <FirstLine>К мероприятиям</FirstLine>
        <SecondLine>Настоящая красота здесь!</SecondLine>
      </div>
      <CatigoriesConts>
        <div className='category current_cat'>
          <div>Свадьба</div>
        </div>
        <div className='category'>
          <div className='oth_cat'>Мужу</div>
        </div>
        <div className='category'>
          <div className='oth_cat'>Жене</div>
        </div>
        <div className='category'>
          <div className='oth_cat'>Партнеру</div>
        </div>
        <div className='category'>
          <div className='oth_cat'>Коллекции</div>
        </div>
        <div className='category'>
          <div className='oth_cat'>Редкость</div>
        </div>
      </CatigoriesConts>
      <CatigoriesPics>
        <div className='pic_cont'>
          <img src={CatPic1} className='pic' alt=''/>
          <p className='pic_caption'>Кольца</p>
        </div>
        <div className='pic_cont'>
          <img src={CatPic2} className='pic' alt=''/>
          <p className='pic_caption'>Серьги</p>
        </div>
        <div className='pic_cont'>
          <img src={CatPic3} className='pic' alt=''/>
          <p className='pic_caption'>Подвески</p>
        </div>
        <div className='pic_cont'>
          <img src={CatPic4} className='pic' alt=''/>
          <p className='pic_caption'>Запонки</p>
        </div>
        <div className='pic_cont'>
          <img src={CatPic5} className='pic' alt=''/>
          <p className='pic_caption'>Браслеты</p>
        </div>
        <div className='pic_cont'>
          <img src={CatPic6} className='pic' alt=''/>
          <p className='pic_caption'>Часы</p>
        </div>
      </CatigoriesPics>
    </Main>
  );
};
  
  export default SelectionSection; 