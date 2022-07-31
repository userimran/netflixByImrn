const user = ['Gshan','Imrn','Naem','riz'];
const memberDiv = document.querySelector('.memberDiv');
const addIcon  = document.querySelector('.addIcon');

const userIcon =() =>{
    user.reverse();
    user.map((currElem) => {
        memberDiv.insertAdjacentHTML('afterbegin' ,`<button class ="btn"><span>${currElem}</span></button>`)
    });
};

addIcon.addEventListener('click', () => {
    let userName = prompt("what is your name:");

    if(userName !==null &&  !user.includes(userName)) {
        user.push(userName);
        console.log(user)
        memberDiv.insertAdjacentHTML('afterbegin' ,`<button class ="btn"><span>${userName}</span></button>`);
    }else{
        alert("Username Already Exist:")
    }
});

userIcon();