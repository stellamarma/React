const Nav =()=>{
    const navItems =[
        {id:"1",link:"/articles",title:"Articles"},
        {id:"2",link:"/videos",title:"Videos"},
        {id:"3",link:"/movies",title:"Movies"},
    ]

  return(  
  <nav className="mainNav">
        <ul>
            { navItems.map(item=>(
                 <li className="navItem " key={item.id}>
                     <a href={item.link} >{item.title}</a>
                 </li>
            ))}

                </ul>
    </nav>
  )

}

export default Nav;