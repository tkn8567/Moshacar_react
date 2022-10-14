const Voices = () =>{
    const row_array = Array(3).fill();
    const array = Array(2).fill();
    return (
        <>
        <div className='main_title'><font size='5'>SellCaでご売却いただいたお客様の声</font></div>
        <div className='main_voices'>
            {row_array.map((_,index) => (
                <div className="main_row" key={index}>
                    {array.map((_,index) => (
                    <div className="main_voice" key={index}>
                        column{index+1}
                    </div>
                    ))}
                </div>
            ))}
        </div>
        </>
    );
}
export default Voices;

