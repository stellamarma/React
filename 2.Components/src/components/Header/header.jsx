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
import Navigation from './nav';
const Header=(event)=>{
    const onChangeHandeler=()=>{
        console.log(event.target.value )

    }

    return(        
        <header >
            
           <div className="logo" 
            onPointerEnter={e => console.log('onPointerEnter')}>
                Something New
            </div>
             <input onChange={onChangeHandeler}/>
             <Navigation />
       </header>
   )
 }

export default Header;