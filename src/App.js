import {
    useEffect,
    useState
} from "react";

import logo from './images/header__logo.png';
import Footer from "./components/Footer";
import Card from "./components/Card";
import Api from "./components/Api";
import Pagination from "./components/Pagination";

function App() {


    const [isForkChecked, setIsForkChecked] = useState(true);
    const [followerChecked, setFollowerChecked] = useState(true);
    const [companyChecked, setCompanyChecked] = useState(true);
    const [jsLangChecked, setJsLangChecked] = useState(false);
    const [goLangChecked, setGoLangChecked] = useState(false);
    const [pythonLangChecked, setPythonLangChecked] = useState(false);

    const [inputIsDisabled, setInputIsDisabled] = useState(true);

    const [inputForkValue, setInputForkValue] = useState(0);
    const [inputStarsValue, setInputStarsValue] = useState(0);


    const [arrCards, SetArrCards] = useState("");

    const [filters, SetFilters] = useState(true);


    const [inputSearchValue, setInputSearchValue] = useState('');

    const [selectForksValue, setSelectForksValue] = useState('%3E');
    const [selectStarsValue, setSelectStarsValue] = useState('%3E');

    const [results, setResults] = useState(0);
    const [cPage, setCPage] = useState(1);

    //Изменяем состояние Чекбоксов

    useEffect(() => {
        //Закрываем панель фильтров
        if (filters == false) {
            setInputIsDisabled(true);
        }
        //Открывем панель фильтров
        else {
            setInputIsDisabled(false);
        }
    });



function getSearchString(){

let searchString = "https://api.github.com/search/repositories?q=forks:";

searchString +=(selectForksValue + inputForkValue+"+");
searchString +=((inputStarsValue>0)?("stars:" + selectStarsValue + inputStarsValue)+"+":"");
searchString +=(jsLangChecked?"language:javascript+":"");
searchString +=(goLangChecked?"language:go+":"");
searchString +=(pythonLangChecked?"language:python+":"");
searchString +=(isForkChecked?"fork:true":"fork:false");

console.log(searchString);

return searchString;

}


function selectForksChange(event){
    setSelectForksValue(event.target.value);
}

function selectStarsChange(event){
    setSelectStarsValue(event.target.value);
}

    function chengeIsFork() {
        setIsForkChecked(!isForkChecked);
    }

    function chengeFollowerCheckbox() {
        setFollowerChecked(!followerChecked);
    }

    function chengeCompanyCheckbox() {
        setCompanyChecked(!companyChecked);
    }

    function chengeJsLangCheckbox() {
        setJsLangChecked(!jsLangChecked);
    }

    function chengeGoLangCheckbox() {
        setGoLangChecked(!goLangChecked);
    }

    function chengePythonLangCheckbox() {
        setPythonLangChecked(!pythonLangChecked);
    }

    function inputSearchChange(e) {
        setInputSearchValue(e.target.value);

        if (e.target.value != '') {
            SetFilters(false);
        } else {
            SetFilters(true);
        }
    }

    function inputForkChange(e) {
        setInputForkValue(e.target.value);
        setResults(e.target.value);//Удалить
    }

    function inputStarsChange(e) {
        setInputStarsValue(e.target.value);
    }

    



    function handleSubmit(e) {
        e.preventDefault();
        let api = new Api;


        if (inputSearchValue == ''){

            console.log("getSearchString()");
            console.log(getSearchString());

            let apiPromise = api.searchReps(getSearchString());
            apiPromise.then((data) => {
                console.log(data.items);
                
                processing(data.items)});
        }
            
        else {
            console.log("inputSearchValue");
            console.log(inputSearchValue);

            let apiPromise = api.searchLogin(inputSearchValue);
            apiPromise.then((data) => {
                
                console.log("data");
                console.log(data);
                
                processing(data);
            });
        }
    }

    //получаем массив результатов, обрабатываем их
    function processing(arr) {
        let myArr = [];
        //Делаю удобный для себя массив с данными
        arr.forEach((item, i, arr) => {
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
            
        });

        SetArrCards(myArr);

    }
//https://api.github.com/search/repositories?q=forks:%3E=1000+language:python+stars:%3E=40+fork:false

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
                    <span className="header__error" id="submitForm-error"></span><button type="submit" onClick={
                         handleSubmit} className="header__button">Найти</button></form>
            </div>
        </header>
        <main className="main">
            <div className="main-wrap">
                <aside className="sidebar box-shadow-1">
                    <h2 className="sidebar_title">Поиск по фильтрам</h2>
                    <form name="sidebar-form" className="sidebar__form">
                         Языки:
                        <div className="sidebar__input-conteiner">
                            <input className="sidebar__input" type="checkbox" id="js-lang" name="js-lang" checked={
                                 jsLangChecked} onChange={chengeJsLangCheckbox} disabled={inputIsDisabled} />
                            <label htmlFor="company">JS</label></div>
     
                        <div className="sidebar__input-conteiner">
                            <input className="sidebar__input" type="checkbox" id="go-lang" name="go-lang" checked={
                                 goLangChecked} onChange={chengeGoLangCheckbox} disabled={inputIsDisabled} />
                            <label htmlFor="company">GO</label></div>
     
                        <div className="sidebar__input-conteiner">
                            <input className="sidebar__input" type="checkbox" id="python-lang" name="python-lang" checked={
                                 pythonLangChecked} onChange={chengePythonLangCheckbox} disabled={inputIsDisabled} />
                            <label htmlFor="company">PYTHON</label></div>
     
                        <div className="sidebar__input-conteiner">
     
                            <select id="selectForks" value={selectForksValue} onChange={selectForksChange}>
                                <option value='%3E'>более</option>
                                <option value='<'>менее</option>
                                <option value=''>равно</option>
                            </select>
     
                            <input disabled={inputIsDisabled} className="sidebar__input-number" type="number" min="0"
                                 max="100000" step="1" name="forks" onChange={inputForkChange} value={inputForkValue} />
                            <label htmlFor="forks">Форков</label>
                        </div>
     
                        <div className="sidebar__input-conteiner">
     
                            <select id="selectStars"  value={selectStarsValue} onChange={selectStarsChange}>
                            <option value='%3E'>более</option>
                                <option value='<'>менее</option>
                                <option value=''>равно</option>
                            </select>
     
                            <input disabled={inputIsDisabled} className="sidebar__input-number" type="number" min="0"
                                 max="5" step="1"  name="stars" onChange={inputStarsChange} value={inputStarsValue} />
                            <label htmlFor="stars">Звёзд</label>
                        </div>
                        <div className="sidebar__input-conteiner">
                            <input disabled={inputIsDisabled} className="sidebar__input" type="checkbox" id="python-lang"
                                 name="python-lang" checked={isForkChecked} onChange={chengeIsFork} />
                            <label htmlFor="company">Форк</label>
                        </div>
                    </form>
                </aside>

                
                

                <div className="card-conteiner">
                    
                    <Pagination results={results} cPage={cPage}/>

                     {(arrCards[0]!=null)&&arrCards.map((item,i)=><Card key={i} id={i} arr={item} />)}
     
                </div>
            </div>
        </main>
        <Footer />
     
     </div>
    
    </>
    
    );
            }

            export default App;
            