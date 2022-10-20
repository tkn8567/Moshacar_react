import image_brand1 from './brands_img/img31.png';
import image_brand2 from './brands_img/img32.png';
import image_brand3 from './brands_img/img33.png';
import image_brand4 from './brands_img/img34.png';
import image_brand5 from './brands_img/img35.png';
import image_brand6 from './brands_img/img36.png';
import image_brand7 from './brands_img/img37.png';
import image_brand8 from './brands_img/img38.png';
import image_brand9 from './brands_img/img39.png';
import image_brand10 from './brands_img/img40.png';
import image_brand11 from './brands_img/img41.png';
import image_brand12 from './brands_img/img42.png';
import image_brand13 from './brands_img/img43.png';
import image_brand14 from './brands_img/img44.png';
import image_brand15 from './brands_img/img45.png';
import image_brand16 from './brands_img/img46.png';
import image_brand17 from './brands_img/img47.png';
import image_brand18 from './brands_img/img48.png';
import image_brand19 from './brands_img/img49.png';
import image_brand20 from './brands_img/img50.png';
import image_brand21 from './brands_img/img51.png';
import image_brand22 from './brands_img/img52.png';
import image_brand23 from './brands_img/img53.png';
import image_brand24 from './brands_img/img54.png';
import image_brand25 from './brands_img/img55.png';
import image_brand26 from './brands_img/img56.png';
import image_brand27 from './brands_img/img57.png';
import image_brand28 from './brands_img/img32.png';

const Brands = () =>{
    const contents = [
        {image: image_brand1, text: 'レクサス'},{image: image_brand2, text: 'トヨタ'},
        {image: image_brand3, text: '日産'},{image: image_brand4, text: 'ホンダ'},
        {image: image_brand5, text: 'マツダ'},{image: image_brand6, text: '三菱'},
        {image: image_brand7, text: 'スバル'},{image: image_brand8, text: 'ダイハツ'},
        {image: image_brand9, text: 'スズキ'},{image: image_brand10, text: 'いすゞ'},
        {image: image_brand11, text: '日野'},{image: image_brand12, text: 'メルセデス・ベンツ'},
        {image: image_brand13, text: 'BMW'},{image: image_brand14, text: 'アウディ'},
        {image: image_brand15, text: 'フォルクスワーゲン'},{image: image_brand16, text: 'ポルシェ'},
        {image: image_brand17, text: 'ランドローバー'},{image: image_brand18, text: 'フェラーリ'},
        {image: image_brand19, text: 'ランボルギーニ'},{image: image_brand20, text: 'ルノー'},
        {image: image_brand21, text: 'プジョー'},{image: image_brand22, text: 'シトロエン'},
        {image: image_brand23, text: 'ボルボ'},{image: image_brand24, text: 'キャデラック'},
        {image: image_brand25, text: 'シボレー'},{image: image_brand26, text: 'フォード'},
        {image: image_brand27, text: 'クライスラー・ジープ'},{image: image_brand28, text: '米国トヨタ'},
    ];
    return (
        <>
        <div className='main_title_option'><font size='5'>メーカーから探す</font></div>
        <div className='main_brands'>
            {contents.map((content, index) => {
                return(
                <div className='main_brand' key={index}>
                <img src={content.image} height='50' width='50' /><br/>
                <font size='1' color='#000000'>{content.text}</font>
                </div>
                );
            })}
        </div>
        </>
    );
}
export default Brands;