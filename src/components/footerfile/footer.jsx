import './footer.css';
import Logo_sellca from './img87.png';
import Logo_facebook from './img88.png';
import Logo_twitter from './img89.png';

function footer() {
  const contents = [
    'トップ', '実績紹介', '会社概要', '査定申込',
    'ご利用の流れ', '車種別中古車買取情報', '個人情報保護方針', 'お問い合わせ',
    'Q&A', '中古車買取お役たちコラム', '中古車買取お役たちコラム', 'マイページログイン',
    '評価について', 'キャンピングカーの種類と買取について', '書類・規約ダウンロード'
  ];
  return (
    <>
      <div className='footer_box'>
        <div className='footer_top'>
          {contents.map((content, index) => {
            return(
              <div className='footer_info' key={index}>{content}</div>
            );
          })}
        </div>
        <div className='footer_bottom'>
          <div className='footer_row'>
            <img src={Logo_facebook} alt='logo_facebook' height='17' width='17'/>
            <img src={Logo_twitter} alt='logo_twitter' height='17' width='17'/>
          </div>
          
          <p className='footer_about'>
            <img src={Logo_sellca} alt='logo_sellca' height='25' width='100'/><br/>
            <font size='1'>
              クイック・ネットワーク株式会社<br/>
              〒650-0041 兵庫県神戸市中央区新港町11-1 ジーライオンアワーズビル9F<br/>
              050-3145-6925<br/>
              &copy;SellCa ALL RIGHTS RESERVED
            </font>
          </p>
        </div>
      </div>
    </>
  );
}

export default footer;
