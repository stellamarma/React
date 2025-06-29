import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/header';
import NewsList from './components/news_list';
import {newsData} from './components/utils/data'
//import StatePlayground from './components/playground/state'

const App = ()=> {

  let [news, setNews]= useState(newsData)

  console.log(newsData)

    return (
        <>
          <Header />
          <div className='container'>
            {/* <StatePlayground /> */}
            <NewsList news={news}/>
          </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
