import image_col1 from './col1.jpg';
import image_col2 from './col2.jpg';
import image_col3 from './col3.jpg';
import image_col4 from './col4.png';
const Columns = () =>{
    const contents = [
        {image: image_col1, text: '日本の中古車って安い？みんなが知らない海外の評価！'},
        {image: image_col2, text: 'Q.中古車一括査定のデメリットって何？'},
        {image: image_col3, text: '【高額買取のために知っておこう】車の査定で見られるポイント'},
        {image: image_col4, text: '【希少車を高く売る】高額買取のポイント'},
    ];
    return (
        <>
        <div className='main_title'><font size='5'>車買取に関するおすすめコラム</font></div>
        <div className='main_columns'>
            {contents.map((content, index) => {
                return(
                <div className='main_column' key={index}>
                    <img src={content.image} height='95' width='133'/><br/><br/><br/>
                    <font size='1' color='#184E8C'>{content.text}</font>
                </div>
                );
            })}
        </div>
        </>
    );
}
export default Columns;