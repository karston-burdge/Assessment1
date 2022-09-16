const password = "MudkipIsTheBestStarter"

function onlyLettersAndNumbers(str) {
    return /^[A-Za-z0-9]*$/.test(str)
}
if (onlyLettersAndNumbers(password) === true){
  (password.length >= 10)
    console.log("SUCCESS!!!")
  
}else
if (onlyLettersAndNumbers(password) === false){
   password.length < 10 
   console.log('failure :(')
}else
if (onlyLettersAndNumbers(password) === true){
   password.length < 10 
   console.log("failure :(")
}else
 if (onlyLettersAndNumbers(password) === false){
   password.length >= 10
    console.log('failure :(')

}




    
  






  
  
  


 
  
  
 