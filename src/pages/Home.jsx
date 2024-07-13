import Header1 from '../components/HeaderComponents/Header1';
import Header2 from '../components/HeaderComponents/Header2';
import CardList1 from '../components/CardsLists/CardList1';
import CardList2 from '../components/CardsLists/CardList2';
import CardList3 from '../components/CardsLists/CardList3';
import CardList4 from '../components/CardsLists/CardList4';
import CardList5 from '../components/CardsLists/CardList5';

const Home = () => {
  return (
    <div className="overflow-x-auto overflow-y-auto h-screen p-4">
      <Header1 />
      <Header2 />

      <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start max-w-screen-xl mx-auto mt-2 space-y-4 lg:space-y-0 lg:space-x-4">
        <CardList1 />
        <CardList2 />
        <CardList3 />
        <CardList4 />
        <CardList5 />
      </div>
    </div>
  );
}

export default Home;
