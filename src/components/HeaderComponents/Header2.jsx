import Heart from '../../images/headerImages/Heart.svg';
import Publicsvg from '../../images/headerImages/Public.svg';
import Hardsvg from '../../images/headerImages/Hard.svg';
import Userssvg from '../../images/headerImages/Users.svg';

const Header2 = () => {
  return (
    <div className="header flex h-[85px] flex-col lg:flex-row lg:flex-wrap lg:items-center px-4">
      <div className="header-left flex lg:flex-wrap lg:justify-between lg:items-center lg:ml-[20px] lg:w-[144px] lg:h-[39px] ml-3">
        <div className="lg:w-[114px]">
          <p className="text-black font-poppins text-[26px] font-medium cursor-pointer">
            Brackets
          </p>
        </div>
      </div>
      <div className="header-right flex lg:ml-16 lg:flex-grow justify-between">
        <div className="boards flex flex-wrap justify-between items-center ml-3 lg:ml-9">
          <img className="mr-[10px] cursor-pointer" src={Heart} alt="Logo" />
          <img className="cursor-pointer" src={Publicsvg} alt="Logo" />
          <img className="ml-[10px] cursor-pointer" src={Hardsvg} alt="Logo" />
        </div>
        <div className='flex lg:mr-[30px] mr-[15px]'>
          <img src={Userssvg} className='w-[100px] lg:w-[140px] mr-[20px] cursor-pointer' alt="Logo" />
          <p className="text-black font-poppins text-[20px] font-[400] lg:ml-[100px] cursor-pointer">
            Menu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header2;
