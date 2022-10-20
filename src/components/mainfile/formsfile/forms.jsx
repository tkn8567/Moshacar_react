import image_form1 from './form1.png';
import image_form2 from './form2.png';
const Forms = () =>{
    return (
        <>
        <div className='main_title'><font size='5'>査定フォーム</font></div>
        <div className='main_forms'>
        <div className='main_form_title'>
           <img src={image_form1} height='30' width='30'/><font size='2'>お車の情報</font>
        </div>
        <form>

        </form>


        <div className='main_form_title'>
          <img src={image_form2} height='30' width='30'/><font size='2'>お客様の情報</font>
        </div>
        <form>

        </form>
        
        </div>
        <div className='main_button'>査定依頼する</div>
        <div className='main_row'>
          <div className='main_button'>査定提携店ご応募の方はこちら</div>
          <div className='main_button'>ユーザー車ご購入希望のバイヤー様はこちら</div>
        </div>
        </>
    );
}
export default Forms;

