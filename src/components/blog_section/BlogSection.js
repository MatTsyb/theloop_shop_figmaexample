import styled from 'styled-components';
import Pic1 from '../../images/blog/pic1.jpg';
import Pic2 from '../../images/blog/pic2.jpg';
import Pic3 from '../../images/blog/pic3.jpg';

const Main = styled.div`
  z-index: 1;
  margin: 0 auto;
  max-width: 1110px;
`

const Body = styled.div`
  padding: 120px 0 60px 0;
`

const CaptionsCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FirstLine = styled.p`
  font-family: 'Gilroy-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 29px;
  //text-align: center;
  color: #333333;
`

const SecondLine = styled.p`
  font-family: 'NotoSerif-Bold';
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  //text-align: center;
  color: #333333;
  margin-top: 15px;
`

const BlogPics = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px 0;
  .pic_cont{
    display: flex;
    position: relative;
    transition: 0.75s;
  }
  .pic_cont:hover{
  transform: scale(1.1);
  }
  .pic_caption{
    width: 350px;
    position: absolute;
    font-family: 'Gilroy-Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 140%;
    text-align: center;
    color: #FFFFFF;
    padding: 248px 0 35px 0;
  }
`

const BlogBtn = styled.a`
  display: flex;
  justify-content: center;
  .blog_button{
    width: 255px;
    height: 51px;
    border: none;
    cursor: pointer;
    background: #333333;
    font-family: 'Gilroy-Regular';
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
  .blog_button:hover{
    color: black;
    background: white;
    border: 1px solid black;
  }
`

const BlogSection = () =>{
  return(  
    <Main>
      <Body>
        <CaptionsCont>
          <FirstLine>
            Полезные статьи
          </FirstLine>
          <SecondLine>
            Лучшие советы по подбору дорогих подарков
          </SecondLine>
        </CaptionsCont>
        <BlogPics>
          <a href='' className='pic_cont'>
            <img src={Pic1} className='pic'/>
            <p className='pic_caption'>Как выбрать <br/> часы для своей <br/> будущей жены</p>
          </a>
          <a href='' className='pic_cont'>
            <img src={Pic2} className='pic'/>
            <p className='pic_caption'>Запонки для мужа: <br/> 7 ключевых правил <br/> покупки аксессуара</p>
          </a>
          <a href='' className='pic_cont'>
            <img src={Pic3} className='pic'/>
            <p className='pic_caption'>Как выбрать <br/> обручальные кольца <br/> молодоженам</p>
          </a>
        </BlogPics>
        <BlogBtn href=''><button className='blog_button'>Читать наш блог</button></BlogBtn>
      </Body>
    </Main>
  );
};
  
export default BlogSection; 