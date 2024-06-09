    let currantUser :string [] = ["admin","ali","ahmed","hammad", "shehbaz"];

    let newUser :string [] = ["admin","furqan", "naveed","hammad","shehbaz"];

      for (let new_User of newUser) {
        //convert new_user to lowerCase for case insensitivity
        const LowerCase_new_user = new_User.toLowerCase();
        //checking userName alredy exists in current_user or not

        if (currantUser.map(user => user.toLocaleLowerCase()).includes(LowerCase_new_user)) {
            //userName already exists
            console.log('the userName$ {new_user}is not available');
         
        } else  {
            //userName is availible
            console.log('the userName${new_user}is available.'); 
        

        }      
        } 


                




      

    



    