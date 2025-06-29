import NewListItem from "./new_list_item";

const NewsList=(props)=>{

    const newsHandler = props.news.map( item =>(
        <NewListItem key={item.id} item={item}/>
    ));

    return(
        <>
            { newsHandler}
        </>
    )
}

export default NewsList;