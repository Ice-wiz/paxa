import Card1Profile from '../../images/cardsImages/cardsLists/cardlist4/card1/Profile.svg';
import Card2Profile from '../../images/cardsImages/cardsLists/cardlist4/card2/Profile.svg';
import Card3Profile from '../../images/cardsImages/cardsLists/cardlist4/card3/Profile.svg';
import Card4Profile from '../../images/cardsImages/cardsLists/cardlist4/card4/Profile.svg';
import Card2Image from '../../images/cardsImages/cardsLists/cardlist4/card2/Photo.svg';
import TagYellow from '../../images/cardsImages/Tags/Tag-yellow.svg';
import TagDarkBlue from '../../images/cardsImages/Tags/Tag-darkblue.svg';
import TagRed from '../../images/cardsImages/Tags/Tag-red.svg';
import TagPurple from '../../images/cardsImages/Tags/Tag-purple.svg';
import TagGreen from '../../images/cardsImages/Tags/Tag-green.svg';
import TagLightBlue from '../../images/cardsImages/Tags/Tag-lightblue.svg';

import Card from '../CardComponents/Card';
import CardTop from '../CardComponents/CardTop';
import AddCard from '../CardComponents/AddCard';

const CardList4 = () => {
  const cardsData = [
    {
      bar1: TagLightBlue,
      bar2: TagRed,
      heading: 'Linux or Windows: Which is it?',
      profile: Card1Profile,
      text: 'Saving money – is something we would all like.',
      comments: 32,
      likes: 87,
      attachments: 31
    },
    {
      image: Card2Image,
      bar1: TagPurple,
      bar2: TagLightBlue,
      bar3: TagRed,
      heading: 'Be single-minded',
      text: 'Create a list with all possible keywords that fit your product, service, or business field.',
      profile: Card2Profile,
      comments: 21,
      likes: 34,
      attachments: 17
    },
    {
      bar1: TagYellow,
      heading: 'Linux or Windows: Which is it?',
      text: 'Saving money – is something we would all like.',
      profile: Card3Profile,
      comments: 55,
      likes: 23,
      attachments: 19
    },
    {
      bar1: TagDarkBlue,
      bar2: TagGreen,
      heading: 'DNA: The future of nutrition',
      text: '“Why does anyone want a vasectomy reversal?” This is a question I hear any time I tell someone what I do for a living.',
      profile: Card4Profile,
      comments: 12,
      likes: 33,
      attachments: 66
    }
  ];

  return (
    <div className="ml-[10px] mr-[5px]">
      
      <CardTop heading='Test' />

      {cardsData.map((cardProps, index) => (
        <Card key={index} {...cardProps} />
      ))}

      <div className='hidden'>
        <AddCard />
      </div>
    </div>
  );
};

export default CardList4;
