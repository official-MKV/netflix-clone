import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="app">
       <Nav/>
       <Banner />
       <Row title="TRENDING" fetchUrl={requests.fetchTrending} isLargeRow/>
       <Row title="TOPRATED" fetchUrl={requests.fetchTopRated}/>
       <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
       <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
       <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
       <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
       <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
