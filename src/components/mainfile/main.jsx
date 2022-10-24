import './main.css';
import main_image from './img03.jpg';
import main_button1 from './main_button1.png';
import main_button2 from './main_button2.png';
import Sells from './sellsfile/sells';
import Reasons from './reasonsfile/reasons';
import Flows from './flowsfile/flows';
import Voices from './voicesfile/voices';
import Forms from './formsfile/forms';
import Finds from './findsfile/finds';
import Columns from './columnsfile/columns';

function main() {
  return (
    <>
      <div className='main_box'>
        <div className='main_image_box'>
          <div className='main_image_z1'>
            <img src={main_image} height='357' width='832'/>
          </div>
          <div className='main_image_z2'>
            <img src={main_button1} height='60' width='300'/>
            <img src={main_button2} height='60' width='300'/>
          </div>
        </div>
        <Sells />
        <Reasons />
        <Flows />
        <Voices />
        <Finds />
        <Forms />
        <Columns />
      </div>
    </>
  );
}

export default main;
