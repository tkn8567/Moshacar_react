import image_form1 from './form1.png';
import image_form2 from './form2.png';
const Forms = () =>{
    const selectbox_contents = [
      {section: 'メーカー名', value1: 'AMC', value2: 'AMC・ジープ', value3: 'AMG'},
      {section: '車種名', value1: 'AMC AMX', value2: 'AMCその他', value3: 'イーグル'},
      {section: '年式', value1: '2022年 (令和4年)', value2: '2021年 (令和3年)', value3: '2020年 (令和2年)'},
      {section: '走行距離', value1: '0km', value2: '5000km', value3: '1万km'}
    ];
    const textbox_contents = [
      {section: '姓 (カナ)', placeholder: '例) セルカ'},
      {section: '名 (カナ)', placeholder: '例) タロウ'},
      {section: 'メールアドレス', placeholder: 'xxx@sellca.com'},
      {section: '電話番号', placeholder: '0785959739'},
      {section: '郵便番号', placeholder: '6500041'}
    ];
    return (
        <>
        <div className='main_title'><font size='5'>査定フォーム</font></div>
          <div className='main_forms'>
          <div className='main_forms_section'>
              <img src={image_form1} height='30' width='30'/><font size='2'>お車の情報</font>
          </div>
          {selectbox_contents.map((content, index) => {
            return(
            <div className='form_container'>
              <div className='form_title'>
                <div className='form_title_p'>
                  <a>{content.section}</a><br/>
                  <a className='hissu'>必須</a>
                </div>
              </div>
              <div className='form_input'>
                <form>
                    <select className='form_input_selectbox'>
                      <option value=''>{content.section}</option>
                      <option value={content.value1}>{content.value1}</option>
                      <option value={content.value2}>{content.value2}</option>
                      <option value={content.value3}>{content.value3}</option>
                    </select>
                </form>
              </div>
            </div>
            )
          })}

          <div className='main_forms_section'>
            <img src={image_form2} height='30' width='30'/><font size='2'>お客様の情報</font>
          </div>
          {textbox_contents.map((content, index) =>{
            return(
            <div className='form_container'>
              <div className='form_title'>
                <div className='form_title_p'>
                  <a>{content.section}</a><br/>
                  <a className='hissu'>必須</a>
                </div>
              </div>
              <div className='form_input'>
                <input className='form_input_textbox'type='text' placeholder={content.placeholder}></input>
              </div>
            </div>
            )
          })}
          
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

