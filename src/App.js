import styled from 'styled-components';
import './App.css';
//import blackbackground from './images/blcksectionbg.jpg';
//import headerbackground from './images/bgc.png';
import Header from './components/first_section/header/Header';
import Welcome from './components/first_section/welcome/Welcome';
/*import SecondSection from './components/second_section/SecondSection';
import SalonsSection from './components/salons_section/SalonsSection';
import BlogSection from './components/blog_section/BlogSection';
import GallerySection from './components/gallery_section/GallerySection';
import MailingSection from './components/mailing_section/MailingSection';*/
import LinksSection from './components/links_section/LinksSection';
import Footer from './components/footer/Footer';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Catalogpage from './pages/Catalogpage';

const WhiteSection = styled.div`
  color: #333333;
  background-color: #FFFFFF;
  width: 100%;
`

const HeaderSection = styled.div`
  color: #FFFFFF;
  a{
    color: #FFFFFF;
  }
  background-color: #333333
`

function App() {
  return (
    <div className='App'>
      <HeaderSection>
        <Header/>
      </HeaderSection>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/catalog' element={<Catalogpage/>} />
        </Routes>
      <WhiteSection>
        <LinksSection/>
      </WhiteSection>
      <WhiteSection>
        <Footer/>
      </WhiteSection>
    </div>
  );
}

export default App;
