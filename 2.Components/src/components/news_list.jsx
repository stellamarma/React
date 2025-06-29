import NewListItem from "./new_list_item";

const NewsList=(props)=>{

    console.log(props.news)

    return(
        <div>
            <NewListItem />
        </div>
    )
}

export default NewsList;