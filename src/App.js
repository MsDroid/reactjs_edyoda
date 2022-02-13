// import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import Card from './components/Card';
import Footer from './components/Footer';
import { names, user as username } from './utils/mockData';
import Banner from './components/Banner';
import { toUpper, toLower } from './utils';

function App() {

  // const {name, age, salary} = names[0];
  return (
    <>
      <Topbar />
      <Banner user={toUpper(username)} />
      <div className='d-flex flex-wrap mr-3 justify-content-between' >
        {names.map((item, index) =>
          <Card
            {...item}
          />
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;
