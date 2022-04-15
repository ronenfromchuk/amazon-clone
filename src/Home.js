import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img
            className="home__image"
              src="https://m.media-amazon.com/images/I/711AoihP89L._SX3000_.jpg"
              alt=""
            />

            <div className="home__row">
                <Product title='Manchester United 2021/2022, Long Sleeve Jersey'
                price={79.99}
                image={'https://www.buyarrive.com/wp-content/uploads/2021/09/Ronaldo-7-Manchester-United-22-Home-Long-Sleeve-Jersey-by-adidas.jpg'}
                rating={5}
                />
                <Product title='ESP LTD Kill em All Guitar Metallica Limited Ed with CoA and Case Hetfield Hammett'
                price={299.99}
                image={'https://www.bhphotovideo.com/images/images1000x1000/esp_lmetallicamaster_ltd_limited_edition_master_1278636.jpg'}
                rating={5}
                />
            </div>

            <div className="home__row">
            <Product title='VEICK Resistance Bands Set, Strength Training Equipment for Working Out'
                price={19.99}
                image={'https://www.dragonsports.eu/400061-verylarge_default/training-cable-tc-sklz.jpg'}
                rating={3}
                />
                <Product title='MSI GL66 Gaming Laptop: 15.6", Intel Core i7-11800H, NVIDIA GeForce RTX 3070'
                price={2499}
                image={'https://www.pcnasdaq.co.il/wp-content/uploads/2021/09/62350650_1847295015-1.jpg'}
                rating={5}
                />
                <Product title='Razer DeathAdder V2 Gaming Mouse: 20K DPI Optical Sensor - Chroma RGB Lighting'
                price={99.99}
                image={'https://ae01.alicdn.com/kf/H8e6198ec06184a909d85b45b0262b9edZ/Razer-DeathAdder-Wired-6400DPI.jpg_Q90.jpg_.webp'}
                rating={4}
                />
            </div>

            <div className="home__row">
            <Product title='Norcent 24 Inch 720P LED HD Backlight Flat DVD Combo TV, VGA USB HDMI Digital TV Tuner Cable, Build-in DVD Player Dual Channel 3W Speakers Monitor Television (24 inch)'
                price={300}
                image={'https://images.samsung.com/is/image/samsung/il-hdtv-n5300-ue40n5300auxsq-frontblack-139505686?$720_576_PNG$'}
                rating={4}
                />
            </div>
        </div>
    </div>
  );
}

export default Home;