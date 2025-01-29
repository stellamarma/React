import React from 'react';

class Header extends React.Component{
    state={
        name:'hehe'
    }
    render(){
        return(
            <header>
                    <div>{this.state.name}</div>
                    <input/>
            </header>)
    }
}
// const Header=()=>{

//     return(        
//         <header>
//             <div>Logo</div>
//             <input/>
//         </header>
//     )

// }

export default Header;