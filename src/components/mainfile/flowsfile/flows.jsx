import image_flow1 from './flow1.png';
import image_flow2 from './flow2.png';
import image_flow3 from './flow3.png';
import image_flow4 from './flow4.png';
const Flows = () =>{
    const contents = [
        {image: image_flow1, flow: '無料査定申込み', text: 'フォーム、お電話にてお気軽にお申し込みください。お申込み後、担当より査定のお日にちのご連絡を差し上げます。しつこい営業電話はありません。'},
        {image: image_flow2, flow: '査定', text: 'ご自宅で査定を受けましょう。 査定のお時間は約30分程度です。※エリアによってはお伺いできない場合もありますのでご相談ください。'},
        {image: image_flow3, flow: 'オークションに出品', text: '査定内容をご確認いただき、愛車をオークションに出品します。全国最大7,000社のバイヤーがオンライン入札!'},
        {image: image_flow4, flow: '売却', text: 'オークションで最高額にご納得いただけたらバイヤーへ売却！愛車をバイヤーに渡し、セルカから代金をお支払いしてお取引完了です。'},
    ]
    return (
        <>
        <div className='main_title'><font size='5'>ご利用の流れ</font></div>
        <div className="main_flows">
            {contents.map((content, index) => {
                return(
                <div className='main_flow' key={index}>
                <img src={content.image} width='170'/><br/>
                <p className='main_flow_flow'>{content.flow}</p>
                <p className='main_flow_text'>{content.text}</p>
                </div>
                );
            })}
        </div>
        </>
    );
}
export default Flows

// 改行するところ確認