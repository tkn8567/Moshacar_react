import image_voice1 from './voice1.png';
import image_voice2 from './voice2.png';
import image_voice3 from './voice3.png';
import image_voice4 from './voice4.png';
import image_voice5 from './voice5.png';
import image_voice6 from './voice6.png';

const Voices = () =>{
    const contents = [
        {image: image_voice1, person: '兵庫県 O様', text: 'まず、査定に来てくれた人の対応が良い。そして、電話の女性の対応も良い。絶えず、顧客の気持ちになって話しを聞いてくれる。ひつこく営業も行わない。そして、オークション、値段は上がる、上がる、かなり家族でドキドキしながら見ていました。大満足です。知人、友人にも紹介します。お世話になりました。ありがとうございました。'},
        {image: image_voice2, person: '東京都 A様', text: '最初はオークションってどうなんだろう? ほんとうに高く落札されるんだろうかと半信半疑でした。でも、オークションが始まって、終了時間間近になると、どんどん金額が上がっていくのを見てびっくりしました。想像以上の金額で落札されて、オークションに出して良かったと思いました。'},
        {image: image_voice3, person: '兵庫県 F様', text: 'レクサスNX Fスポーツ2015年モデルを売却しました。他社の見積もりより、50万円以上の高値で売れました。売切金額の設定が大切だと思います。担当の方の意見が、参考になりました。今回の売却に、大変満足しています。'},
        {image: image_voice4, person: '滋賀県 M様', text: 'オークションで車を売るというのは初めての経験でしたので、正直手間がかかるのかなと思っていましたが、SellCaスタッフがほとんどやってくれますのでかなり簡単でした。また、価格も数社見積もった金額より大幅にアップし、大満足です! もう一台もお願いしよう思います。'},
        {image: image_voice5, person: '愛知県 M様', text: 'ディーラー下取りより高く買取ってもらえるところを探していて知人からセルカさんを紹介してもらいました。自分で探す手間が省けたのと、紹介してもらった担当の方がとても優秀で、電話やメールでのやりとりもストレスなく査定の手配や必要書類の連絡までこちらから聞くことなくスムーズにすすめてくださいました。買取額も大幅に高くなり、感謝の言葉しかありません。本当にありがとうございました。'},
        {image: image_voice6, person: '埼玉県 O様', text: '他社では、『出せてもこの金額です』と言われて正直期待していませんでしたが、想像以上の値がついてびっくりしました！今後は知人が車を売却する際は、こちらのセルカオークションを是非おすすめしたいと思います!'},
    ];
    return (
        <>
        <div className='main_title'><font size='5'>SellCaでご売却いただいたお客様の声</font></div>
        <div className='main_voices'>
            {contents.map((content, index) => {
                return(
                <div className='main_voice' key={index}>
                    <div className='layer1'>
                        <img src={content.image} height='215' width='384'/>
                    </div>
                    <div className='layer2'>
                        <font size='1' color="#FFFFFF">{content.person}</font>
                    </div>
                    <div className='layer3'>
                        <font size='1'>{content.text}</font>
                    </div>
                </div>
                );
            })}
        </div>
        </>
    );
}
export default Voices;