import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  let body=document.querySelector('body')

let formName = document.createElement('form');



let ccname = document.createElement('input');
ccname.type = 'text';
ccname.classList.add('input');
ccname.value ='Enter name on card'
ccname.setAttribute('name','ccname')

let cardnumber = document.createElement('input');
cardnumber.type = 'text';
cardnumber.classList.add('input');
cardnumber.value ='Enter card number'
cardnumber.setAttribute('name','cardnumber')

let cvc = document.createElement('input');
cvc.type = 'text';
cvc.classList.add('input');
cvc.value ='Enter cvc code'
cvc.setAttribute('name','cvc')

let ccExp = document.createElement('input');
ccExp.type = 'text';
ccExp.classList.add('input');
ccExp.value ='Enter exp date'
ccExp.setAttribute('name','cc-exp')


formName.appendChild(ccExp)
formName.appendChild(cvc)
formName.appendChild(cardnumber)
formName.appendChild(ccname)






body.appendChild(formName);





  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});

