/*
Your task is simple, search the password string for any injected code (Injected code is any thing that would be used to exploit flaws in the current code, so basically anything that contains || or //) if you find any you must return "Wrong username or password!" because no one likes someone trying to cheat their way in!
 */

// function validate(username, password){
//     var database = new Database();
//     return database.login(username, password);
// }


function validate(username, password) {
    let valid = new Validator();
    return valid.login(username, escape(password));
}