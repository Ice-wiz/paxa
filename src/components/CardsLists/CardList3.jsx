import Card1Profile from '../../images/cardsImages/cardsLists/cardlist3/card1/Profile.svg';
import Card2Profile from '../../images/cardsImages/cardsLists/cardlist3/card2/Profile.svg';
import Card1Image from '../../images/cardsImages/cardsLists/cardlist3/card1/Photo.svg';
import TagDarkBlue from '../../images/cardsImages/Tags/Tag-darkblue.svg';
import TagRed from '../../images/cardsImages/Tags/Tag-red.svg';
import TagPurple from '../../images/cardsImages/Tags/Tag-purple.svg';
import TagGreen from '../../images/cardsImages/Tags/Tag-green.svg';
import TagLightBlue from '../../images/cardsImages/Tags/Tag-lightblue.svg';

import Card from '../CardComponents/Card';
import CardTop from '../CardComponents/CardTop';
import AddCard from '../CardComponents/AddCard';

const CardList3 = () => {
  const cardsData = [
    {
      image: Card1Image,
      bar1: TagPurple,
      bar2: TagRed,
      bar3: TagLightBlue,
      heading: 'Types of paper in catalog printing',
      text: 'Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).',
      profile: Card1Profile,
      comments: 34,
      likes: 23,
      attachments: 98
    },
    {
      bar1: TagDarkBlue,
      bar2: TagGreen,
      heading: 'There is no competition',
      text: 'This article is floated online with an aim to help you find the best dvd printing solution.',
      profile: Card2Profile,
      comments: 23,
      likes: 12,
      attachments: 44
    }
  ];

  return (
    <div className="ml-[20px]">
      
      <CardTop heading='Trello' />

      {cardsData.map((cardProps, index) => (
        <Card key={index} {...cardProps} />
      ))}

      <div className=''>
        <AddCard />
      </div>
    </div>
  );
};

export default CardList3;
