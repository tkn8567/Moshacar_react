import Main_reason_image from './img19.png';
const Reasons = () =>{
    const array = Array(3).fill()
    return (
        <>
        <div className='main_title'><font size='5'>セルカが選ばれる理由</font></div>
        <div className="main_reasons">
            {array.map((_,index) => (
            <div className="main_reason" key={index}>
                reason{index+1}
            </div>
            ))}
        </div>
        <img src={Main_reason_image} height='307' width='500'/>
        </>
    );
}
export default Reasons;

