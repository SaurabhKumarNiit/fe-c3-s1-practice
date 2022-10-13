//Define User class
class User {
//Field declartions
private username:string;
private password:string;
private contact:number;
private email:string;
private address:string;

//constuctor 
constructor(username:string , password:string,contact:number,email:string,address:string){
    this.username=username;
    this.password=password;
    this.contact=contact;
    this.email=email;
    this.address=address;
}
//getter and setter methods
// set userName(username:string){
//     this.username=username;
// }

// get userName(){
//    return this.username;
// }

// set Password(password:string){
//     this.password=password;
// }

// get Password(){
//    return this.password;
// }

// set ContactNumber(contactNumber:number){
//     this.contactNumber=contactNumber;
// }

// get ContactNumber(){
//    return this.contactNumber;
// }

// set emailId(EmailId:string){
//     this.EmailId=EmailId;
// }

// get emailId(){
//    return this.EmailId;
// }

// set Address(address:string){
//     this.address=address;
// }

// get Address(){
//    return this.address;
// }

}

function saveData(){
    let form:any=document.querySelector('#reg-form')
    let formData:any=new FormData(form)
    let user1=new User(formData.get("username"),formData.get("password"),formData.get("contact"),formData.get("email"),formData.get("address"))

    registerUser(user1)
    return false;
}

// //Fetch form values using Object.fromentries()
// const submitUser = (formData: any) => {

//     let data = Object.fromEntries(formData);

//     //call registerUser method with the constructed User object
//     registerUser(data);
// }

//POST data using fetch() api
function registerUser(user: User) {

    //Dispay welcome message after successful registration
    fetch("http://localhost:3000/users",{
        method:"POST",
        body:JSON.stringify(user),
        headers:{
            "content-type":"application/json;charset=UTF-8"
        }
    }).then(response=>response.json()).then(json=>console.log(json))
    alert("Registration SuccessFul");
    return false;
}