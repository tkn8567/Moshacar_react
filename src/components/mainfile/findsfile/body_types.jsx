import image_body_type1 from './body_types_img/img70.png';
import image_body_type2 from './body_types_img/img71.png';
import image_body_type3 from './body_types_img/img72.png';
import image_body_type4 from './body_types_img/img70.png';
import image_body_type5 from './body_types_img/img73.png';
import image_body_type6 from './body_types_img/img74.png';
import image_body_type7 from './body_types_img/img75.png';
import image_body_type8 from './body_types_img/img76.png';
import image_body_type9 from './body_types_img/img77.png';
import image_body_type10 from './body_types_img/img77.png';
import image_body_type11 from './body_types_img/img74.png';
import image_body_type12 from './body_types_img/img76.png';
import image_body_type13 from './body_types_img/img76.png';
import image_body_type14 from './body_types_img/img76.png';
import image_body_type15 from './body_types_img/img73.png';
import image_body_type16 from './body_types_img/img73.png';
import image_body_type17 from './body_types_img/img78.png';

const Body_types = () =>{
    const contents = [
        {image: image_body_type1, text: 'クーペ・スポーツ・スペシャリティ'},
        {image: image_body_type2, text: 'ハッチバック'},
        {image: image_body_type3, text: 'ミニバン・ワンボックス'},
        {image: image_body_type4, text: 'オープン・カブリオレ・コンバーチブル'},
        {image: image_body_type5, text: 'ピックアップトラック'},
        {image: image_body_type6, text: 'セダン'},
        {image: image_body_type7, text: 'SUV・クロスカントリー・ライトクロカン'},
        {image: image_body_type8, text: 'ワゴン'},
        {image: image_body_type9, text: '軽-RV系'},
        {image: image_body_type10, text: '軽自動車'},
        {image: image_body_type11, text: 'ハードトップ'},
        {image: image_body_type12, text: 'ボンネットバン'},
        {image: image_body_type13, text: 'キャブバン'},
        {image: image_body_type14, text: '軽-キャブバン'},
        {image: image_body_type15, text: 'トラック'},
        {image: image_body_type16, text: '軽-トラック'},
        {image: image_body_type17, text: 'バス'}
    ];
    return (
        <>
        <div className='main_title_option'><font size='5'>ボディタイプから探す</font></div>
        <div className='main_body_types'>
            {contents.map((content, index) => {
                return(
                <div className='main_body_type' key={index}>
                <div className='main_body_type_content'>
                    <img src={content.image} height='30' width='65'/><br/>
                    <font size='1' color='#000000'>{content.text}</font>
                </div>
                </div>
                );
            })}
        </div>
        </>
    );
}
export default Body_types;