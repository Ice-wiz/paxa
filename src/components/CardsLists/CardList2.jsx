import Card1Profile from '../../images/cardsImages/cardsLists/cardlist2/card1/Profile.svg';
import Card2Profile from '../../images/cardsImages/cardsLists/cardlist2/card2/Profile.svg';
import Card3Profile from '../../images/cardsImages/cardsLists/cardlist2/card3/Profile.svg';
import Card2Image from '../../images/cardsImages/cardsLists/cardlist2/card2/Photo.svg';
import Card3Image from '../../images/cardsImages/cardsLists/cardlist2/card3/Photo.svg';
import TagYellow from '../../images/cardsImages/Tags/Tag-yellow.svg';
import TagDarkBlue from '../../images/cardsImages/Tags/Tag-darkblue.svg';
import TagRed from '../../images/cardsImages/Tags/Tag-red.svg';
import TagPurple from '../../images/cardsImages/Tags/Tag-purple.svg';
import TagGreen from '../../images/cardsImages/Tags/Tag-green.svg';
import TagLightBlue from '../../images/cardsImages/Tags/Tag-lightblue.svg';

import Card from '../CardComponents/Card';
import CardTop from '../CardComponents/CardTop';
import AddCard from '../CardComponents/AddCard';

// Functional component representing a list of cards in another category
const CardList2 = () => {
  // Array of objects containing props for each Card
  const cardsData = [
    {
      heading: 'Home business advertising ideas',
      bar1: TagDarkBlue,
      bar2: TagRed,
      bar3: TagPurple,
      text: 'Successful businesses know the importance of building and maintaining good working.',
      profile: Card1Profile,
      comments: 76,
      likes: 45,
      attachments: 12
    },
    {
      heading: 'Unmatched toner cartridge quality 20% less than OEM price',
      image: Card2Image,
      bar1: TagLightBlue,
      bar2: TagYellow,
      text: 'Why read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new.',
      profile: Card2Profile,
      comments: 76,
      likes: 32,
      attachments: 66
    },
    {
      heading: 'How to look up',
      image: Card3Image,
      bar1: TagGreen,
      text: 'Are you considering buying a compatible inkjet cartridge for your printer?',
      profile: Card3Profile,
      comments: 54,
      likes: 76,
      attachments: 11
    }
  ];

  return (
    <div className="ml-[10px] mr-[10px]">
      
      
      <CardTop heading='Prototip' />

      
      {cardsData.map((cardProps, index) => (
        <Card key={index} {...cardProps} />
      ))}

    
      <div className='hidden'>
        <AddCard />
      </div>
    </div>
  );
};


export default CardList2;
