class Api{
    constructor(){

    }

    searchLogin(inputValue){

        return(fetch(`https://api.github.com/users/${inputValue}/repos`)
        .then((res) => res.json())
        );
        
    }

}

export default Api;


