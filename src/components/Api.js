class Api{
    constructor(){
    }
    searchReps(searchString){
        return(
            fetch(searchString)
        .then((res) => res.json())
        )
        .catch(err => alert(err));
    }
}

export default Api;
