import { useEffect, useState } from "react";
import image from './images/photo.jpg';
import logo from './images/header__logo.png';
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {

  const [reposChecked, setReposChecked] = useState(true);
  const [followerChecked, setFollowerChecked] = useState(true);
  const [companyChecked, setCompanyChecked] = useState(true);


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

//Изменяем состояние Чекбокса


 function chengeReposCheckbox(){
  setReposChecked(!reposChecked);
 }

 function chengeFollowerCheckbox(){
  setFollowerChecked(!followerChecked);
 }

 function chengeCompanyCheckbox(){
  setCompanyChecked(!companyChecked);
 }


function inputChange(e){
    console.log(e.target.value);
    setinputValue(e.target.value);
    //setValue(value);
}



  function handleSubmit(e) {

    e.preventDefault();

    console.log('Стартуем!');
    console.log(e.target);
    setTitle(e.target.value);

    fetch('https://api.github.com/search/users?q=tom+repos:%3E2+followers:%3E2')//имя tom, 2 репозитория и 2 подписчика
        .then((res) => res.json())
        .then((data) => {
        console.log(data.items);
          //setData(data);

          
          console.log(data.items.length);

          let i =0;

          data.items.forEach(element => {
            console.log(i++);
          });

          console.log('Число');

          setChislo(data.items.length);
        });




        

  }

 
  return (
    
<>
    <div className="page">

        <header className="header">
            <div className="header__wrap">
            <img className="header__logo" src={logo} />
            <h1 className="header__title">Поиск пользователей</h1>

        
            
        

        <form name="header-form" className="header__form">
            <input className="header__input" type="text" onChange={inputChange} value={inputValue} name="submitForm" required minLength="2" maxLength="40" placeholder="Введите логин" />
            <span className="header__error" id="submitForm-error">&nbsp;</span>
            <button type="submit" onClick={handleSubmit} className="header__button">Найти</button>
        </form>

    

        </div>
        </header>

        <main className="main">
            <div className="main-wrap">
            <aside className="sidebar box-shadow-1">

                <h2 className="sidebar_title">Фильтры</h2>
                <form name="sidebar-form" className="sidebar__form">
                    
                    <div className="sidebar__input-conteiner">
                        <input className="sidebar__input" type="checkbox" id="reposes" name="reposes" checked={reposChecked} onChange={chengeReposCheckbox} />
                        <label htmlFor="reposes">Больше 1 репозитория</label>
                    </div>

                    <div className="sidebar__input-conteiner">
                        <input className="sidebar__input" type="checkbox" id="followers" name="followers" checked={followerChecked} onChange={chengeFollowerCheckbox} />
                        <label htmlFor="followers">Больше 1 фолловера</label>
                    </div>

                    <div className="sidebar__input-conteiner">
                        <input className="sidebar__input" type="checkbox" id="company" name="company" checked={companyChecked} onChange={chengeCompanyCheckbox} />
                        <label htmlFor="company">Заполнено поле Company</label>
                    </div>

                </form>
            </aside>
            
            
            <div className="card-conteiner">
                

                <Card chislo = {chislo} title = {title} inputValue = {inputValue}/>

                <Card chislo = {chislo} title = {title} />

                <Card chislo = {chislo} title = {title} />
                
                
                

            </div>


            </div>
        </main>

    <Footer />


    </div>
    </>
    
  );
}

export default App;
