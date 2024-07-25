let userNames =["Ramsha", " Rafia", "Amber", "Admin", "Tanzila"];
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
console.log('hello ${oneUser}, would you like to see a status report?')
    }else{
        console.log('hello ${oneUser}, thank you for loging in again')
    }
})