import styled from 'styled-components';
import Pic1 from '../../images/gallery/pic1.jpg';
import Pic2 from '../../images/gallery/pic2.jpg';
import Pic3 from '../../images/gallery/pic3.jpg';
import Pic4 from '../../images/gallery/pic4.jpg';
import Vid1 from '../../images/gallery/vid1.jpg';
import Vid2 from '../../images/gallery/vid2.jpg';


const Main = styled.div`
  z-index: 1;
  margin: 0 auto;
  max-width: 1110px;
`

const MainCont = styled.div`
  padding: 60px 0 150px 0;
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

const GalPics = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
  .pic{
    transition: 0.3s linear;
  }
  .pic:hover{
    transform: scale(1.05);
  }
  .vid{
    transition: 0.3s linear;
  }
  .vid:hover{
    transform: scale(1.05);
  }
`

const GallerySection = () =>{
    return(  
      <Main>
        <MainCont>
          <CaptionsCont>
            <FirstLine> #ojjo_jewerly </FirstLine>
            <SecondLine> Мы в социальных сетях </SecondLine>
          </CaptionsCont>  
          <GalPics>
            <img src={Vid1} alt='Gallery Video 1' className='vid'/>
            <img src={Pic1} alt='Gallery Picture 1' className='pic'/>
            <img src={Pic2} alt='Gallery Picture 2' className='pic'/>
            <img src={Pic3} alt='Gallery Picture 3' className='pic'/>
            <img src={Pic4} alt='Gallery Picture 4' className='pic'/>
            <img src={Vid2} alt='Gallery Video 2' className='vid'/>
          </GalPics>
        </MainCont>
      </Main>
    );
  };
    
  export default GallerySection; 