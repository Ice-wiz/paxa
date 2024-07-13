import Header1 from '../components/HeaderComponents/Header1';
import Header2 from '../components/HeaderComponents/Header2';
import CardList1 from '../components/CardsLists/CardList1';
import CardList2 from '../components/CardsLists/CardList2';
import CardList3 from '../components/CardsLists/CardList3';
import CardList4 from '../components/CardsLists/CardList4';
import CardList5 from '../components/CardsLists/CardList5';

const Home = () => {
  return (
    <div className="overflow-x-auto overflow-y-auto h-screen">
      <Header1 />
      <Header2 />
      
      <div className="flex flex-col lg:flex-row">
        <div className="w-10 lg:w-[2.5rem] h-full bg-transparent invisible">spacer</div>
        <CardList1 className="my-4" />
        <CardList2 className="my-4" />
        <CardList3 className="my-4" />
        <CardList4 className="my-4" />
        <CardList5 className="my-4" />
        <div className="w-10 lg:w-[2.5rem] h-full bg-transparent invisible">spacer</div>
      </div>
    </div>
  );
}

export default Home;
