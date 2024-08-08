// Task 1: Create variable called 'storeName' and set it to "CSH Store". Console log "Welcome to [storeName]"
let storeName = "CSH Store"

console.log("Welcome to " + storeName)

// Task 2: Create a user object with properties 'username' (any), 'password' (any), and 'status' (online or offline). 

let user1 = {
  userName: "Aruna",
  password: "Moonlight12",
  status: "Online"
}


// Task 3: Console log "[username] is [status]".
console.log(user1.userName + " is " + user1.status)

// Task 4: Prompt the user to enter their password and save it in a variable called passwordGuess
 let passwordGuess = prompt("Enter your passsword")

// Task 5: If passwordGuess is equal to the password, console log "Welcome [username]" and change status to "online". Else, console log "Wrong password" and change status to "offline"
if (passwordGuess = user1.password){
  console.log("Welcome " + user1.userName)
} else {
  console.log("Wrong Password")
  user1.status("Offline")
}


// Task 6: Create an object called hoodieInventory with the properties 'name' ("hoodie"), 'quantity' (any number), and 'price' (any number). 
let hoodieInventory = {
  name: "Essentials",
  quantityMd: 1 ,
  quantityLg: 20,
  price: 460
}



// Task 7: Console log "[name] costs [price]"
console.log(hoodieInventory.name + " cost " + hoodieInventory.price)

// Task 8: You just sold a hoodie! Change the quantity to be smaller. Console log "[quantity] [name] left in inventory." Confirm that the number changed!

if(hoodieInventory.quantityLg <= 20){
  hoodieInventory.quantityLg--
  console.log(hoodieInventory.quantityLg + " " + hoodieInventory.name + " left in the inventory.")
}


// Extra credit: Change task 5 such that if the user guesses the password wrong, it keeps prompting them until they guess correctly!

