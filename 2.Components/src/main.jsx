
import 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/header';
//import NewsList from './components/news_list';

const App = ()=> {

    return (
        <>
          <Header />
         {/* <NewsList />
          <h1>Hello world!</h1> */}
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
