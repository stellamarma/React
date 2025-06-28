
import 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/header';
//import NewsList from './components/news_list';
import StatePlayground from './components/playground/state'

const App = ()=> {

    return (
        <>
          <Header />
          <div className='container'>
            <StatePlayground />
          </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
