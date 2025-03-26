let users = JSON.parse(window.localStorage.getItem("users")) || [
    {
        userId: 1,
        name: "Bobur",
        contact: "998901662714"
    },
    {
        userId: 2,
        name: "Abdulaziz",
        contact: "998901234567"
    },
    {
        userId: 3,
        name: "Oysha",
        contact: "998911234422"
    }
]

let foods = JSON.parse(window.localStorage.getItem("foods")) ||[
    {
        foodId: 1,
        foodName: "Burger",
        foodimg: "./img/burger.jpeg",
    },
    {
        foodId: 2,
        foodName: "Fanta",
        foodimg: "./img/fanta.jpeg",
    },
    {
        foodId: 3,
        foodName: "spinner",
        foodimg: "./img/spinner.jpeg",
    },
    {
        foodId: 4,
        foodName: "combo",
        foodimg: "./img/combo.jpeg",
    },
    {
        foodId: 5,
        foodName: "chicken_togora",
        foodimg: "./img/chicken_togora.jpeg",
    },
    {
        foodId: 6,
        foodName: "chicken_wings",
        foodimg: "./img/chicken_wings.jpeg",
    },
]

let orders = JSON.parse(window.localStorage.getItem("orders")) ||[
    {
        orderId: 1,
        userId: 1,
        foodId:2,
        count: 2
    },
    {
        orderId: 2,
        userId: 2,
        foodId:1,
        count: 3
    },
    {
        orderId: 3,
        userId: 3,
        foodId:3,
        count: 1
    }
]