
import Logo from '../../assets/Images/LoginImg/Landing Logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '../Button/Button';

const Header = () => {
  return (
    <div className='bg-[rgb(244,239,250)] max-w-full h-auto p-4 flex justify-between items-center'>
      <img className="w-[100px] md:w-[170px]" src={Logo} alt="" />
      <div className='flex gap-10 text-black font-Freeman'>
        <button>HOME</button>
        <button>OUR TEAM</button>
        <button>COURSE</button>
        <button>CAREERS</button>
        <button>CONTACT US</button>
      </div>
      <div className='mr-10'>
        <AccountCircleIcon className='text-[#9280D9]' fontSize='large' />
        <Button content='Login' className='ml-4' variant='primary' size='md' />
      </div>
    </div>
  );
}

export default Header;
