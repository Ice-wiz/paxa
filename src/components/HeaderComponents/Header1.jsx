import { FaSearch } from 'react-icons/fa';
import Boardsvg from '../../images/headerImages/trello-mark-blue.svg';
import Iconssvg from '../../images/headerImages/Icons.svg';
import Logo from '../../images/headerImages/Logo.svg';
import User from '../../images/headerImages/User.svg';
import Rectangle from '../../images/headerImages/Rectangle.svg';

const Header1 = () => {
  return (
    <div className="header flex h-[58px] flex-wrap items-center border-b-[1px]">
      <div className="header-left flex flex-wrap sm:justify-start lg:justify-between items-center ml-[16px] lg:ml-[30px] lg:w-[800px]">
        <div className="logo hidden lg:block cursor-pointer">
          <img src={Logo} alt="Logo" />
        </div>
        <img src={Rectangle} alt="rectangle" />
        <div className="boards flex flex-wrap justify-center items-center cursor-pointer">
          <img src={Boardsvg} alt="Logo" />
          <p className='hidden lg:block'>Boards</p>
        </div>
        <img className="hidden lg:block" src={Rectangle} alt="rectangle" />
        <div className="search-box ml-8 lg:ml-0 flex relative">
          <input
            className="h-[30px] border-1 rounded-[10px] bg-[#F4F4F4] hidden lg:block lg:w-[512px] lg:pr-[30px]"
            type="text"
          />
          <FaSearch className="search-icon absolute right-1 top-0 bottom-0 m-auto text-gray-300 lg:text-black cursor-pointer" />
        </div>
      </div>
      <div className="profile ml-auto lg:mr-[30px] mr-[15px] flex flex-wrap justify-center items-center">
        <div className="icons mr-[30px] cursor-pointer">
          <img src={Iconssvg} alt="Logo" />
        </div>
        <img src={User} alt="Logo" className='cursor-pointer'/>
      </div>
    </div>
  );
};

export default Header1;
