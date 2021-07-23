import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import './App.css';
import MainNavigation from './Components/MainNavigation/MainNavigation';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';

function App () {
  return (
    <BrowserRouter>
      <MainNavigation />
      <div className="App">
        <Container>
          <Switch>
            <Route path='/' component={Trending} exact />
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/search' component={Search} />
          </Switch>
        </Container>
        <div className='pageTop' onClick={() => { window.scroll(0, 0) }}>
          <div className="page-scrollTop"></div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
