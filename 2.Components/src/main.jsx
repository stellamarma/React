
import 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import NewsList from './components/news_list';

const App = ()=> {

    return (
        <>
          <Header />
          <NewsList />
          <h1>Hello world!</h1>
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));//chose where to host react app
root.render(<App/>);//because App is a function
