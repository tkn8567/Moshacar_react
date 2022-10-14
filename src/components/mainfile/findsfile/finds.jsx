import Brands from './brands';
import Car_models from './car_models';
import Body_types from './body_types';
const Finds = () =>{
    return (
        <>
        <div className='main_title'><font size='5'>車の買取相場と売却実績を探す</font></div>
        <Brands />
        <Car_models />
        <Body_types />
        </>
    );
}
export default Finds;

