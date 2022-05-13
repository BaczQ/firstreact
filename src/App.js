import { useEffect, useState } from "react";
import image from './images/photo.jpg';
import logo from './images/header__logo.png';
import Footer from "./components/Footer";
import Card from "./components/Card";
import Api from "./components/Api";

function App() {


    let i = 1;

const [isForkChecked, setIsForkChecked] = useState(true);
const [followerChecked, setFollowerChecked] = useState(true);
const [companyChecked, setCompanyChecked] = useState(true);
const [jsLangChecked, setJsLangChecked] = useState(false);
const [goLangChecked, setGoLangChecked] = useState(false);
const [pythonLangChecked, setPythonLangChecked] = useState(false);


const [inputForkValue, setInputForkValue] = useState('');
const [inputStarsValue, setInputStarsValue] = useState('');


const [arrCards, SetArrCards] = useState("");


//const [name, setName] = useState("");
//const [login, setUsername] = useState("");
//const [followers, setFollowers] = useState("");
//const [following, setFollowing] = useState("");
//const [public_repos, setRepos] = useState("");
//const [avatar_url, setAvatar] = useState("");


const [inputSearchValue, setInputSearchValue] = useState('');



//https://api.github.com/users/aw/orgs
//https://api.github.com/search/users?q=aw+repos:%3E2+followers:%3E2

//Изменяем состояние Чекбоксов



function chengeIsFork(){
setIsForkChecked(!isForkChecked);
}

function chengeFollowerCheckbox(){
setFollowerChecked(!followerChecked);
}

function chengeCompanyCheckbox(){
setCompanyChecked(!companyChecked);
}

function chengeJsLangCheckbox(){
    setJsLangChecked(!jsLangChecked);
}

function chengeGoLangCheckbox(){
    setGoLangChecked(!goLangChecked);
}

function chengePythonLangCheckbox(){
    setPythonLangChecked(!pythonLangChecked);
}

function inputSearchChange(e){
setInputSearchValue(e.target.value);
}

function inputForkChange(e){
    setInputForkValue(e.target.value);
    }

    function inputStarsChange(e){
        setInputStarsValue(e.target.value);
        }




function handleSubmit(e) {
e.preventDefault();
let api = new Api;
let apiPromise = api.searchLogin(inputSearchValue);
apiPromise.then((data) => {
    processing(data);
});
//https://api.github.com/users/BaczQ/repos
//https://api.github.com/users/tom
}

//получаем массив результатов, обрабатываем их
function processing(arr){
    
let myArr = [];


//Делаю удобный для себя массив с данными
arr.forEach((item, i, arr)=>{
    myArr[i] = {
        'userLogin': item.owner.login,
        'userAvatar': item.owner.avatar_url,
        'userProfileUrl': item.owner.html_url,
        'id': item.id,
        'name': item.name,
        'private': item.private,
        'description': item.description,
        'fork': item.fork,
        'url': item.html_url,
        'language': item.language
};
    //console.log(item.id);
});

    SetArrCards(myArr);
    
}

return (

<>
    <div className="page">

        <header className="header">
            <div className="header__wrap">
                <img className="header__logo" src={logo} />
                <h1 className="header__title">Поиск репозиториев</h1>

                <form name="header-form" className="header__form">
                    <input className="header__input" type="text" onChange={inputSearchChange} value={inputSearchValue}
                        name="submitForm" required minLength="2" maxLength="40" placeholder="Найти по логину" />
                    <span className="header__error" id="submitForm-error">&nbsp;</span>
                    <button type="submit" onClick={handleSubmit} className="header__button">Найти</button>
                </form>

            </div>
        </header>

        <main className="main">
            <div className="main-wrap">
                <aside className="sidebar box-shadow-1">

                    <h2 className="sidebar_title">Поиск по фильтрам</h2>
                    <form name="sidebar-form" className="sidebar__form">


                    Языки:

<div className="sidebar__input-conteiner">
    <input className="sidebar__input" type="checkbox" id="js-lang" name="js-lang"
        checked={jsLangChecked} onChange={chengeJsLangCheckbox} />
    <label htmlFor="company">JS</label>
</div>

<div className="sidebar__input-conteiner">
    <input className="sidebar__input" type="checkbox" id="go-lang" name="go-lang"
        checked={goLangChecked} onChange={chengeGoLangCheckbox} />
    <label htmlFor="company">GO</label>
</div>

<div className="sidebar__input-conteiner">
    <input className="sidebar__input" type="checkbox" id="python-lang" name="python-lang"
        checked={pythonLangChecked} onChange={chengePythonLangCheckbox} />
    <label htmlFor="company">PYTHON</label>
</div>

<div className="sidebar__input-conteiner">
<input className="sidebar__input-number" type="number" min="0" max="100000" step="1" value="" name="forks" onChange={inputForkChange} value={inputForkValue} /><label htmlFor="forks">Форков</label>
</div>

<div className="sidebar__input-conteiner">
<input className="sidebar__input-number" type="number" min="0" max="5" step="1" value="" name="stars" onChange={inputStarsChange} value={inputStarsValue}/><label htmlFor="stars">Звёзд</label>
</div>

<div className="sidebar__input-conteiner">
    <input className="sidebar__input" type="checkbox" id="python-lang" name="python-lang"
        checked={isForkChecked} onChange={chengeIsFork} />
    <label htmlFor="company">Форк</label>
</div>



                    
                    </form>
                </aside>


                <div className="card-conteiner">


                    {/*console.log("arrCards")*/}
                    {/*console.log(arrCards[0])*/}
                    {/*console.log()*/}

                    {(arrCards[0]!=null)&&arrCards.map((item,i)=><Card key={i} id={i} arr={item}/>)}

                            
                </div>


            </div>
        </main>

        <Footer />


    </div>
</>

);
}

export default App;