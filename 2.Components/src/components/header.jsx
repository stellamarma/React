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

const Header=(event)=>{
    const onChangeHandeler=()=>{
        console.log(event.target )

    }

    return(        
        <header >
           <div className="logo" onClick={()=>console.log('i was click')}
            onPointerEnter={e => console.log('onPointerEnter')}>
                LOGO
            </div>
             <input onChange={onChangeHandeler}
             onFocus={e => console.log('on focus')}
             onBlur={e => console.log('on blur')}/>
       </header>
   )
 }

export default Header;