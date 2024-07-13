import Card1Profile from '../../images/cardsImages/cardsLists/cardlist5/card1/Profile.svg';
import Card2Profile from '../../images/cardsImages/cardsLists/cardlist5/card2/Profile.svg';
import Card3Profile from '../../images/cardsImages/cardsLists/cardlist5/card3/Profile.svg';
import Card3Image from '../../images/cardsImages/cardsLists/cardlist5/card3/Photo.svg';
import TagYellow from '../../images/cardsImages/Tags/Tag-yellow.svg';
import TagRed from '../../images/cardsImages/Tags/Tag-red.svg';
import TagPurple from '../../images/cardsImages/Tags/Tag-purple.svg';
import TagGreen from '../../images/cardsImages/Tags/Tag-green.svg';
import TagLightBlue from '../../images/cardsImages/Tags/Tag-lightblue.svg';

import Card from '../CardComponents/Card';
import CardTop from '../CardComponents/CardTop';
import AddCard from '../CardComponents/AddCard';

const CardList5 = () => {
  const cardsData = [
    {
      bar1: TagYellow,
      bar2: TagRed,
      bar3: TagPurple,
      heading: 'At-home treatments for beauty on a budget',
      profile: Card1Profile,
      text: 'The holidays bring with them thoughts of carving and serving delicious turkey dinners to your family and friends. Tradition has its fans, but perhaps this year you’d like to try a twist to your turkey recipe.',
      comments: 87,
      likes: 54,
      attachments: 32
    },
    {
      bar1: TagPurple,
      bar2: TagGreen,
      heading: 'Home business advertising ideas',
      text: 'Successful businesses know the importance of building and maintaining good working.',
      profile: Card2Profile,
      comments: 13,
      likes: 11,
      attachments: 43
    },
    {
      image: Card3Image,
      bar1: TagLightBlue,
      bar2: TagYellow,
      heading: 'Tips for choosing the perfect gloss for your lips',
      text: 'With MySpace becoming more popular every day, there is the constant need to be different. There are millions of users.',
      profile: Card3Profile,
      comments: 21,
      likes: 23,
      attachments: 12
    }
  ];

  return (
    <div className="ml-[20px]">
      
      <CardTop heading='Final' />

      {cardsData.map((cardProps, index) => (
        <Card key={index} {...cardProps} />
      ))}

      <div className='hidden'>
        <AddCard />
      </div>
    </div>
  );
};

export default CardList5;
