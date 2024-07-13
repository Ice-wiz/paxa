import Menu from '../../images/cardsImages/Combined Shape.svg';

const CardTop = ({ heading }) => {
  return (
    <div className="max-w-[362px] bg-[#F4F4F4] border border-gray-200 rounded-lg shadow mb-3 cursor-pointer">
      <div className='flex justify-between items-center m-5 my-2'>
        <p className="mb-2 text-black font-poppins text-16 font-medium text-left">{heading}</p>
        <img className="" src={Menu} alt="" />
      </div>
    </div>
  );
};

export default CardTop;
