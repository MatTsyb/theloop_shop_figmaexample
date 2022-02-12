import styled from 'styled-components';
import blackbackground from '../images/blcksectionbg.jpg';
//import headerbackground from '../images/bgc.png';
import BackGroundImage from '../images/bgc.png';
import Welcome from '../components/first_section/welcome/Welcome';
import SelectionSection from '../components/selection_section/SelectionSection';
import SalonsSection from '../components/salons_section/SalonsSection';
import BlogSection from '../components/blog_section/BlogSection';
import GallerySection from '../components/gallery_section/GallerySection';
import MailingSection from '../components/mailing_section/MailingSection';
//import LinksSection from '../components/links_section/LinksSection';

const WhiteSection = styled.div`
  color: #333333;
  background-color: #FFFFFF;
  width: 100%;
`

const WelcomeSection = styled.div`
  background: url(${BackGroundImage});
  background-size: cover;
  background-color: #333333;
  color: #FFFFFF;
  max-width: 100%;
  min-width: 100%;
`

const BlackSalonsSection = styled.div`
  color: #FFFFFF;
  background-color: black;  
  background: url(${blackbackground});
  background-size: cover;
  max-width: 100%;
  min-width: 100%;
`

const BlackMailSection = styled.div`
  color: #FFFFFF;
  background-color: black;  
  background: url(${blackbackground});
  background-size: cover;
  max-width: 100%;
  min-width: 100%;
`

function Homepage() {
  return(
    <div className='home_page'>
      <WelcomeSection>
        <Welcome/>
      </WelcomeSection>
      <WhiteSection>
        <SelectionSection/>
      </WhiteSection>
      <BlackSalonsSection>
        <SalonsSection/>
      </BlackSalonsSection>
      <WhiteSection>
        <BlogSection/>
      </WhiteSection>
      <WhiteSection>
        <GallerySection/>
      </WhiteSection>
      <BlackMailSection>
        <MailingSection/>  
      </BlackMailSection>
    </div>
  );
}

export default Homepage;