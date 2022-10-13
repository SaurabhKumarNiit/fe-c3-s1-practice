//Define User class
var User = /** @class */ (function () {
    //constuctor 
    function User(username, password, contact, email, address) {
        this.username = username;
        this.password = password;
        this.contact = contact;
        this.email = email;
        this.address = address;
    }
    return User;
}());
function saveData() {
    var form = document.querySelector('#reg-form');
    var formData = new FormData(form);
    var user1 = new User(formData.get("username"), formData.get("password"), formData.get("contact"), formData.get("email"), formData.get("address"));
    registerUser(user1);
    return false;
}
// //Fetch form values using Object.fromentries()
// const submitUser = (formData: any) => {
//     let data = Object.fromEntries(formData);
//     //call registerUser method with the constructed User object
//     registerUser(data);
// }
//POST data using fetch() api
function registerUser(user) {
    //Dispay welcome message after successful registration
    fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "content-type": "application/json;charset=UTF-8"
        }
    }).then(function (response) { return response.json(); }).then(function (json) { return console.log(json); });
    alert("Registration SuccessFul");
    return false;
}
