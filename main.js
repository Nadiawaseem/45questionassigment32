var currantUser = ["admin", "ali", "ahmed", "hammad", "shehbaz"];
var newUser = ["admin", "furqan", "naveed", "hammad", "shehbaz"];
for (var _i = 0, newUser_1 = newUser; _i < newUser_1.length; _i++) {
    var new_User = newUser_1[_i];
    var LowerCase_new_user = new_User.toLowerCase();
    if (currantUser.map(function (user) { return user.toLocaleLowerCase(); }).includes(LowerCase_new_user)) {
        console.log('the userName$ {new_user}is not available');
    }
    else {
        //userName is availible
        console.log('the userName${new_user}is available.');
    }
}
