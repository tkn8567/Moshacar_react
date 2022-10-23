import image_car_model1 from './car_models_img/img58.jpg';
import image_car_model2 from './car_models_img/img59.png';
import image_car_model3 from './car_models_img/img60.jpg';
import image_car_model4 from './car_models_img/img61.jpg';
import image_car_model5 from './car_models_img/img62.jpg';
import image_car_model6 from './car_models_img/img63.jpg';
import image_car_model7 from './car_models_img/img64.png';
import image_car_model8 from './car_models_img/img65.jpg';
import image_car_model9 from './car_models_img/img66.png';
import image_car_model10 from './car_models_img/img67.png';
import image_car_model11 from './car_models_img/img68.jpg';
import image_car_model12 from './car_models_img/img69.jpg';

const Brands = () =>{
    const contents = [
        {image: image_car_model1, name: 'M3', price: '190.6万円〜1458.1万円'},
        {image: image_car_model2, name: 'シボレーカマロ', price: '62.6万円〜566.6万円'},
        {image: image_car_model3, name: 'ランドクルーザープラド', price: '39.2万円〜628.4万円'},
        {image: image_car_model4, name: 'LX', price: '730.6万円〜1321万円'},
        {image: image_car_model5, name: 'RX', price: '71.6万円〜798.6万円'},
        {image: image_car_model6, name: '86', price: '61.9万円〜510.9万円'},
        {image: image_car_model7, name: 'ジープ・ラングラーアンリミテッド', price: '103.2万円〜813万円'},
        {image: image_car_model8, name: 'Gクラス', price: '229.8万円〜2087.9万円'},
        {image: image_car_model9, name: 'プリウス', price: '0万円〜304万円'},
        {image: image_car_model10, name: 'GLE', price: '410.6万円〜1126.3万円'},
        {image: image_car_model11, name: '911', price: '126.2万円〜2307.8万円'},
        {image: image_car_model12, name: 'シルビア', price: '47万円〜431.7万円'}
    ];
    return (
        <>
        <div className='main_title_option'><font size='5'>人気車種から探す</font></div>
        <div className='main_car_models'>
            {contents.map((content, index) => {
                return(
                <div className='main_car_model' key={index}>
                    <div className='car_model_content_top'>
                        <div className='car_model_num'>{index+1}</div>
                        <div className='car_model_name'>{content.name}</div>
                    </div>
                    <div className='car_model_content_bottom'>
                        <div className='car_model_content_left'>
                            <img src={content.image} height='55' width='83' />
                        </div>
                        <div className='car_model_content_right'>
                            買取相場<div className='car_model_price'>{content.price}</div>
                        </div>
                    </div>
                    
                    


                </div>
                );
            })}
        </div>
        </>
    );
}
export default Brands;