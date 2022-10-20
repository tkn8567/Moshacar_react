import image_reason1 from './reason1.png';
import image_reason2 from './reason2.png';
import image_reason3 from './reason3.png';
import image_reason4 from './img19.png';
const Reasons = () =>{
    const contents = [
        {image: image_reason1, text: '従来の中古車流通フローの買取業者などをスキップできるから、買業者の利益をお客様に還元いたします。'},
        {image: image_reason2, text: 'セルカが1回査定するだけで7,000社がお客様の愛車に値付けをしてくれます。連絡もルカからのみなのでしつこい営業はありません。'},
        {image: image_reason3, text: '書類提出等の手続きもセルカがサポート！ローン残債の精算などもセルカが代行で行ます(^^)'}
    ]
    return (
        <>
        <div className='main_title'><font size='5'>セルカが選ばれる理由</font></div>
        <div className="main_reasons">
            {contents.map((content, index) => {
                return(
                    <div className="main_reason" key={index}>
                        <img src={content.image} width='180' height='170'/>
                        <p className='main_reason_text'>{content.text}</p>
                    </div>
                )
            })}
        </div>
        <div className='main_reason_phrase'>
            <div className='layer1'>
                <span className='phrase1'>セルカは</span><span className='phrase2'>あなたと全国の車屋さんを直接つなぐ</span><br/>
                <span className='phrase3'>革新的サービスです。</span>
            </div>
            <div className='layer2'>

            </div>
        </div>
        <img src={image_reason4} height='307' width='500'/>
        </>
    );
}
export default Reasons;

