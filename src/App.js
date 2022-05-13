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


const [arrCards, SetArrCards] = useState({});

const [name, setName] = useState("");
const [login, setUsername] = useState("");
const [followers, setFollowers] = useState("");
const [following, setFollowing] = useState("");
const [public_repos, setRepos] = useState("");
const [avatar_url, setAvatar] = useState("");


const [inputValue, setinputValue] = useState('');

const [chislo, setChislo] = useState(0);
const [title, setTitle] = useState('');

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


function inputChange(e){
setinputValue(e.target.value);
}

function twoCards(){
    i++;
return (
<Card chislo={i} title={title} inputValue={inputValue} />
);
}


function handleSubmit(e) {
e.preventDefault();
let api = new Api;
let apiPromise = api.searchLogin(inputValue);
apiPromise.then((data) => {
    processing(data);
});
//https://api.github.com/users/BaczQ/repos
//https://api.github.com/users/tom
}

//получаем массив результатов, обрабатываем их
function processing(arr){
    console.log("function processing(arr)");

let myArr = [];

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

console.log('myArr');
console.log(myArr);


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
                    <input className="header__input" type="text" onChange={inputChange} value={inputValue}
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
<input className="sidebar__input-number" type="number" min="0" max="100000" step="1" value="" name="forks"/><label htmlFor="forks">Форков</label>
</div>

<div className="sidebar__input-conteiner">
<input className="sidebar__input-number" type="number" min="0" max="5" step="1" value="" name="stars"/><label htmlFor="stars">Звёзд</label>
</div>

<div className="sidebar__input-conteiner">
    <input className="sidebar__input" type="checkbox" id="python-lang" name="python-lang"
        checked={isForkChecked} onChange={chengeIsFork} />
    <label htmlFor="company">Форк</label>
</div>



                    
                    </form>
                </aside>


                <div className="card-conteiner">


                    {console.log("arrCards")}
                    {console.log(arrCards[0])}
                    {console.log()}

                    {(arrCards[0]!=null)&&arrCards.map((item,i)=><Card id={i} arr={item}/>)}

                            
                </div>


            </div>
        </main>

        <Footer />


    </div>
</>

);
}

export default App;