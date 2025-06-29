// import React from 'react';

// class Header extends React.Component{
//     state={
//         name:'hehe'
//     }
//     render(){
//         return(
//             <header>
//                     <div>{this.state.name}</div>
//                     <input/>
//             </header>)
//     }
// }

import { useState } from 'react';
import Navigation from './nav';



const Header=()=>{

    let [active,setActive]= useState(false);
    let [keywords,setKeywords] =useState('');

    const onChangeHandeler=(event)=>{
        setKeywords(event.target.value);
        setActive(true)
    }

    return(        
        <header style={{background:
            `${active ? 'green':'blue'}`
        }}>
            
           <div className="logo" >
                Awesome News
            </div>
             <input 
                onChange={onChangeHandeler}
            />
            The keywords are : {keywords}
            <Navigation/>
       </header>

   )
 }

export default Header;