class Processing {
    constructor() {
    }
    createArray(arr) {
        let myArr = [];
        //Делаю удобный для себя массив с данными

        //Если массив с сообщением об ошибке
        if (arr.message) {  
        alert(arr.message);
        return myArr;
    }

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
        return myArr;
    }
}

export default Processing;
