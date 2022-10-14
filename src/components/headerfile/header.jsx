import './header.css';
import Logo from './img01.png';

function header() {
  return (
    <>
      ↓header part
      <div className='header_box'>
        <div className='header_left'>
          <div className='header_logo'><font size='1' color='#727171'>中古車の高額査定・買取ならSellca(セルカ)で愛車をオークションに</font></div>
          <p className='header_logo'><img src={Logo} alt='logo' height='22.8' width='90'/></p></div>
        <div className='header_right'>this is header right</div>
      </div>
    </>
  );
}

export default header;
