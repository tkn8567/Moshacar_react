const Flows = () =>{
    // const flows = document.createElement('div');
    // flows.className = 'main_flows';
    // for(var i=0; i<5; i++){
    //     const flow = document.createElement('div');
    //     flow.className = 'main_flow';
    //     flow.innerHTML = 'flow' + i;
    //     flows.appendChild(flow);
    // }
    // console.log(flows)
    const array = Array(4).fill()
    return (
        <>
        <div className='main_title'><font size='5'>ご利用の流れ</font></div>
        <div className="main_flows">
            {array.map((_,index) => (
            <div className="main_flow" key={index}>
                flow{index+1}
            </div>
            ))}
        </div>
        </>
    );
}
export default Flows

