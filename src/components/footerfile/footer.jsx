import './footer.css';
import Logo_sellca from './img87.png';
import Logo_facebook from './img88.png';
import Logo_twitter from './img89.png';

function footer() {
  return (
    <>
      ↓footer part
      <div className='footer_box'>
        <div className='footer_infos'>
          <div className='footer_info'>
            <p className='footer_info_p'><font size='1'>トップ<br/>ご利用の流れ<br/>Q&amp;A<br/>評価について</font></p>
          </div>
          <div className='footer_info'>
            <p className='footer_info_p'><font size='1'>実績紹介<br/>車種別中古車買取情報<br/>中古車買取お役たちコラム<br/>キャンピングカーの種類と買取について</font></p>
          </div>
          <div className='footer_info'>
            <p className='footer_info_p'><font size='1'>会社概要<br/>個人情報保護方針<br/>特定商取引法に基づく表記<br/>書類・規約ダウンロード</font></p>
          </div>
          <div className='footer_info'>
            <p className='footer_info_p'><font size='1'>査定申込<br/>お問い合わせ<br/>マイページログイン</font></p>
          </div>
        </div>
        <div className='footer_about_logos'>
          <div className='footer_row'>
            <img className='footer_about_logo_facebook' src={Logo_facebook} alt='logo_facebook' height='20' width='20'/><br/>
            <img className='footer_about_logo_twitter' src={Logo_twitter} alt='logo_twitter' height='20' width='20'/><br/>
          </div>
        </div>
        <img src={Logo_sellca} alt='logo_sellca' height='22.8' width='90'/><br/>
        <p className='footer_about_p'>
          <font size='1'>
            クイック・ネットワーク株式会社<br/>
            〒650-0041 兵庫県神戸市中央区新港町11-1 ジーライオンアワーズビル9F<br/>
            050-3145-6925<br/>
            &copy;SellCa ALL RIGHTS RESERVED
          </font>
        </p>
      </div>
    </>
  );
}

export default footer;
