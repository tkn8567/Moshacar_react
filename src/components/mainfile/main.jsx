import './main.css';
import Main_image from './img03.jpg';
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
      ↓main part
      <div className='main_box'>
        <img src={Main_image} height='357' width='830'/>
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
