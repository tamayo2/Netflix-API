import './Home.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from "../../components/TitleCards/TitleCards.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className='hero'>
                <img src={hero_banner} alt='' className='banner-img'/>
                <div className='hero-caption'>
                    <img src={hero_title} alt='' className='caption-img'/>
                    <p>“Atrapado en un motín en prisión, un abogado de derechos humanos se hace pasar por recluso para sobrevivir, hasta que el caos y una pérdida personal revelan su lado más oscuro”.</p>
                    <div className='hero-btns'>
                        <button className='btn'><img src={play_icon} alt='' />Play </button>
                        <button className='btn dark-btn'><img src={info_icon} alt='' />More Info</button>
                    </div>
                    <TitleCards />
                </div>
            </div>
            <div className='more-cards'>
                <TitleCards title={"Blockbuster Movies"}/>
                <TitleCards title={"Only on Netflix"} />
                <TitleCards title={"Upcoming"}/>
                <TitleCards title={"Top Pics for you"}/>
            </div>
            <Footer />
        </div>
    )
}

export default Home;