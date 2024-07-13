import Likes from '../../images/cardsImages/heart-outline.svg';
import Comments from '../../images/cardsImages/message-square-outline.svg';
import Attachments from '../../images/cardsImages/attach-outline.svg';

const Card = ({ image, bar1, bar2, bar3, bar4, heading, text, profile, comments, likes, attachments }) => {
  return (
    <div className="w-[362px] bg-[#F4F4F4] border border-gray-200 rounded-lg shadow mb-2 cursor-pointer">
      <img className={`rounded-t-lg ${image ? 'm-5' : 'm-0 mb-5'}`} src={image} alt="" />
      <div className='flex justify-start ml-5 mr-20'>
        <img className="" src={bar1} alt="" />
        <img className="ml-2" src={bar2} alt="" />
        <img className="ml-2" src={bar3} alt="" />
        <img className="ml-2" src={bar4} alt="" />
      </div>
      <div className="card-bottom m-5 flex flex-col">
        <h5 className="mb-2 text-black font-poppins text-16 font-normal text-left">{heading}</h5>
        <p className="mb-3 font-normal text-left opacity-60">{text}</p>
        <div className='flex justify-between items-center'>
          <div className=''>
            <img className="" src={profile} alt="" />
          </div>
          <div className='flex'>
            <p className="text-black font-poppins text-14 font-light leading-normal opacity-20">{comments}</p>
            <img className="mr-3" src={Comments} alt="" />
            <p className="text-black font-poppins text-14 font-light leading-normal opacity-20">{likes}</p>
            <img className="mr-3" src={Likes} alt="" />
            <p className="text-black font-poppins text-14 font-light leading-normal opacity-20">{attachments}</p>
            <img className="" src={Attachments} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
