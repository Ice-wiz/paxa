import Card1Profile from '../../images/cardsImages/cardsLists/cardlist1/card1/Profile.svg';
import Card2Profile from '../../images/cardsImages/cardsLists/cardlist1/card2/Profile.svg';
import Card3Profile from '../../images/cardsImages/cardsLists/cardlist1/card3/Profile.svg';
import Card3Image from '../../images/cardsImages/cardsLists/cardlist1/card3/Photo.svg';
import TagYellow from '../../images/cardsImages/Tags/Tag-yellow.svg';
import TagDarkBlue from '../../images/cardsImages/Tags/Tag-darkblue.svg';
import TagRed from '../../images/cardsImages/Tags/Tag-red.svg';
import TagPurple from '../../images/cardsImages/Tags/Tag-purple.svg';
import TagGreen from '../../images/cardsImages/Tags/Tag-green.svg';
import TagLightBlue from '../../images/cardsImages/Tags/Tag-lightblue.svg';

import Card from '../CardComponents/Card';
import CardTop from '../CardComponents/CardTop';
import AddCard from '../CardComponents/AddCard';

const CardList1 = () => {
  const cardsData = [
    {
      heading: 'Old fashioned recipe for preventing allergies and chemical sensitivities',
      bar1: TagYellow,
      profile: Card1Profile,
      comments: 34,
      likes: 14,
      attachments: 34
    },
    {
      heading: 'Home business advertising ideas',
      bar1: TagDarkBlue,
      bar2: TagRed,
      bar3: TagPurple,
      bar4: TagGreen,
      text: 'Successful businesses know the importance of building and maintaining good working.',
      profile: Card2Profile,
      comments: 23,
      likes: 12,
      attachments: 43
    },
    {
      heading: 'Cosmetic surgery abroad making the right choice',
      image: Card3Image,
      bar1: TagLightBlue,
      profile: Card3Profile,
      comments: 54,
      likes: 16,
      attachments: 33
    }
  ];

  return (
    <div className="ml-[10px] mr-[10px]">
      <CardTop heading='Design' />
      {cardsData.map((cardProps, index) => (
        <Card key={index} {...cardProps} />
      ))}
      <div className=''>
        <AddCard />
      </div>
    </div>
  );
};

export default CardList1;
