import './header.css';
import image_logo from './img01.png';
import image_application from './application-form.png';
import image_mypage from './people-33-16.png';
import image_menu_open from './clipart1890471.png';
import image_menu_close from './delete-2-64.png';

function header() {
  return (
    <>
      <div className='header_box'>
        <div className='header_content'>
          <div className='header_left'>
            <font size='1' color='#727171'>中古車の高額査定・買取ならSellca(セルカ)で愛車をオークションに</font>
            <img src={image_logo} alt='logo' height='27.5' width='110'/>
          </div>
          <div className='header_right'>
            <div className='header_application'>
              <img src={image_application} height='20' width='20' alt='image_application'/>
              査定申込
            </div>
            <div className='header_mypage'>
              <img src={image_mypage} height='30' width='35' alt='image_mypage'/>
              マイページ
            </div>
            <div className='header_menu'>
              <img src={image_menu_open} height='25' width='30' alt='image_menu_open'/>
            </div>
          </div>
          </div>
      </div>
    </>
  );
}

export default header;
