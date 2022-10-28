import SwiperCore, { Autoplay } from 'swiper';
import { Navigation, Pagination } from 'swiper'; // モジュールをインポート
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation'; // スタイルをインポート
import 'swiper/css/pagination'; // スタイルをインポート

import image_sell1 from './main_sell07.jpg';
import image_sell2 from './main_sell08.jpg';
import image_sell3 from './main_sell09.jpg';
import image_sell4 from './main_sell10.jpg';
import image_sell5 from './main_sell01.jpg';
import image_sell6 from './main_sell03.jpg';
import image_sell7 from './main_sell04.jpg';
import image_sell8 from './main_sell05.jpg';
import image_sell9 from './main_sell06.jpg';
import bg_sell from './main_sell02.png';

SwiperCore.use([Autoplay])
const Slider = () => {
    const contents = [
        {image: image_sell1, name1: 'シボレーシボレーコルベット', name2: 'Z512LT', text1: 'スタート額：398.0万円', text2: '年式：2017', text3: '走行距離：10,924km', text4: '成約日：2021年07月', sold: '807.7万円', price_up: '409.7'},
        {image: image_sell2, name1: 'ベントレーミュルザンヌ', name2: 'ベースグレード', text1: '希望価格：0.0万円', text2: '年式：2013', text3: '走行距離：7,306km', text4: '成約日：2021年11月', sold: '1,074.3万円', price_up: '1,074.3'},
        {image: image_sell3, name1: 'フォードマスタング', name2: '', text1: '他社見積額：300.0万円', text2: '年式：2016', text3: '走行距離：21,820km', text4: '成約日：2021年06月', sold: '335.7万円', price_up: '35.7'},
        {image: image_sell4, name1: 'トヨタカムロード', name2: '', text1: '他社見積額：550.0万円', text2: '年式：2015', text3: '走行距離：28,443km', text4: '成約日：2020年09月', sold: '616.1万円', price_up: '66.1'},
        {image: image_sell5, name1: '日産GT-R', name2: 'ブラックエディション', text1: '他社見積額：1,135.0万円', text2: '年式：2021', text3: '走行距離：7,701km', text4: '成約日：2021年11月', sold: '1,182.9万円', price_up: '47.9'},
        {image: image_sell6, name1: 'トヨタFJクルーザー', name2: 'カラーパッケージ', text1: 'スタート額：180.0万円', text2: '年式：2012', text3: '走行距離：43,059km', text4: '成約日：2022年01月', sold: '290.6万円', price_up: '110.6'},
        {image: image_sell7, name1: 'BMWM3', name2: 'M3クーペ', text1: 'スタート額：50.0万円', text2: '年式：2002', text3: '走行距離：134,867km', text4: '成約日：2022年01月', sold: '256.0万円', price_up: '206'},
        {image: image_sell8, name1: 'BMW1シリーズ', name2: '116iスポーツ', text1: 'スタート額：0.5万円', text2: '年式：2012', text3: '走行距離：68,569km', text4: '成約日：2022年01月', sold: '30.0万円', price_up: '29.5'},
        {image: image_sell9, name1: 'スズキジムニー', name2: 'HC', text1: 'スタート額：0.5万円', text2: '年式：1992', text3: '走行距離：23,804km', text4: '成約日：2022年02月', sold: '48.1万円', price_up: '47.6'}
    ];
    return (
        <>
        <Swiper className='main_sells_carousel'
            modules={[Navigation, Pagination]}
            pagination={{
                el: "#pagination",
                clickable: true
            }}
            spaceBetween={25}
            slidesPerView={5}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
        >
            {contents.map((content, index) => {
                return(
                    <SwiperSlide className='main_sell' key={index}>
                        <div className='sell_box'>
                        <div className='sell_name'>{content.name1}<br/>{content.name2}</div>
                        <img src={content.image} width='144' height='95' alt='car_image' />
                        <div className='sell_bottom'>
                            <div className='sell_left'>
                                {content.text1}<br/>{content.text2}<br/>{content.text3}<br/>{content.text4}
                            </div>
                            <div className='sell_right'>
                                <div className='sell_sold'>
                                    Sellca実績<br/>{content.sold}
                                    <img src={bg_sell} width='60'/>
                                </div>
                                <div className='sell_price_up'>
                                    {content.price_up}
                                </div>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
        <div id="pagination" className="swiper-pagination"></div>
        </>
    );
};

export default Slider;