let customerList = document.querySelector(".customers-list")
let foodSelect = document.querySelector("#foodsSelect");
let orderList = document.querySelector(".orders-list")
let clientId = document.querySelector("#clientId")
let userHeader = document.querySelector("#userHeader")
let userAdd = document.querySelector("#userAdd")
let usernameInput = document.querySelector("#usernameInput")
let telInput = document.querySelector("#telephoneInput")
let foodsForm = document.querySelector("#foodsForm")
let foodsCount = document.querySelector("#foodsCount")
let UserID = 0
let u_name = ""

function rendersUsers(){
    customerList.innerHTML = null
    for(let user of users){
        
        customerList.innerHTML += `
            <li onclick = rendersOrders(${user.userId},"${user.name}") class="customer-item">
            <span class="customer-name">${user.name}</span>
            <a class="customer-phone" href="tel:+${user.contact}">+${user.contact}</a>
            </li>`
    }
}

function addUsers(event){
    event.preventDefault()
    let newuser = usernameInput.value.trim()
    let contact = telInput.value.trim()

    if(isNameValid(newuser) && isTelValid(contact)){
        let newuserObj = {
            userId: users.length ? users.at(-1).userId+1 : 1,
            name: newuser,
            contact,
        }
        users.push(newuserObj)
        window.localStorage.setItem("users",JSON.stringify(users))
        rendersUsers()
        usernameInput.value = null;
        telInput.value = null;
    }
}

function isNameValid(name){
    if(name.length<3) {
        alert("Username lenght must not be less than 3 letters!")
        return;
    }
    for(let i of name){
        if(Number(i)){
            alert("Username must not include numbers!")
            return;
        }
    }
    return true;
}

function isTelValid(tel) {
    const uzbRegex = /^\998\d{9}$/;

    if (!uzbRegex.test(tel)) {
        alert("Invalid telephone number! It must start with '+' followed by 7-15 digits.");
        return false;
    }
    return true;
}

function rendersOrders(userId,username){
    clientId.innerHTML = userId;
    userHeader.innerHTML = username;
    UserID = userId;
    u_name = username;
    window.localStorage.setItem("UserName",username)
    window.localStorage.setItem("user_id",userId)
    let order = orders.filter(ord => ord.userId==userId)
    orderList.innerHTML = null
    for(let el of order){
        let food = foods.find(f => f.foodId == el.foodId)
       orderList.innerHTML +=`<li class="order-item">
						<img src="${food.foodimg}">
						<div>
							<span class="order-name">${food.foodName}</span>
							<span class="order-count">${el.count}</span>
						</div>
					</li>`
    }
}

function addOrders(event){
    event.preventDefault()
    let count = foodsCount.value;
    let foodId = foodSelect.value;

    for(let ord of orders){
        if(UserID==ord.userId && foodId == ord.foodId){
            bool = true;
            ord.count += Number(count)
            rendersOrders(UserID,u_name)
            return;
        }
    }
    
    let newOrder = {
        orderId: orders.length ? orders.at(-1).orderId+1:1,
        userId: UserID,
        foodId,
        count
    }
    orders.push(newOrder)
    window.localStorage.setItem("orders",JSON.stringify(orders))
    rendersOrders(UserID,u_name)
    
    
    

}

function renderFoods(){
    for(let food of foods){
        foodSelect.innerHTML += `<option value="${food.foodId}">${food.foodName}</option>`
    }
}

clientId.textContent = window.localStorage.getItem("user_id")
userHeader.textContent = window.localStorage.getItem("UserName")
rendersOrders(window.localStorage.getItem("user_id"),window.localStorage.getItem("UserName"))
rendersUsers()
renderFoods()
userAdd.addEventListener("submit", addUsers)
foodsForm.addEventListener("submit",addOrders)
