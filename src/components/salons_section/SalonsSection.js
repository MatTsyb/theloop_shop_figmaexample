import styled from 'styled-components';

const Main = styled.div`
  margin: 0 auto;
  z-index: 1;
  max-width: 1110px;
`

const MainCont = styled.div`
  padding: 100px 0;
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
`

const SecondLine = styled.p`
  font-family: 'NotoSerif-Bold';
  font-style: normal;
  font-size: 30px;
  line-height: 41px;
  margin-top: 15px;
`

const ThirdLine = styled.p`
  text-align: center;
  width: 730px;
  font-family: 'Gilroy-Light';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  margin-top: 45px;
`

const SalonsBtn = styled.a`
  margin-top: 60px;
  .salons_button{
    width: 224px;
    height: 51px;
    border: none;
    cursor: pointer;
    background: #FFFFFF;
    font-family: 'Gilroy-Regular';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: 0.2s linear; 
  }
  .salons_button:hover{
    color:  #cec2b5;
    background: #997b5c;
  }
`


const SalonsSection = () =>{
  return(  
    <Main>
      <MainCont>
        <FirstLine>
          Не знаете, что выбрать?
        </FirstLine>
        <SecondLine>
          Посетите наши салоны в Москве
        </SecondLine>
        <ThirdLine>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque<br/> 
          egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec<br/> 
          pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices<br/> 
          imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.
        </ThirdLine>
        <SalonsBtn href=''><button className='salons_button'>Наши салоны</button></SalonsBtn>
      </MainCont>
    </Main>
  );
};

export default SalonsSection; 