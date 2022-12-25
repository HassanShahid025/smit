import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import './Bottom.css'


const Bottom = () => {
    return (
      <div className='bottom'>
        <div className='flex'>
        <PersonIcon className='.bottomIcon'/>
        <p className='bottomText'>Ishaq Bhojani</p>
        </div>
        <div className='flex'>
            <StarIcon className='.bottomIcon'/>
            <p className='bottomText'>4.5 (250)</p>
        </div>
      </div>
    );
  }

export default Bottom 