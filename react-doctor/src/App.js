import HeaderComp from './component/HeaderComp' ;
import PageTitle from './component/PageTitle';
import './assets/css/style.css';

function App() {
  return (
    <div className="App">
      <body className='top'>
      <HeaderComp></HeaderComp> 
      <PageTitle></PageTitle>
      </body>
    </div>
  );
}

export default App;
