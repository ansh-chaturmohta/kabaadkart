const firebaseConfig = {
    apiKey: "AIzaSyBcepQwAFlEy9gQseYWv6CRY8ZR8ByopOo",
    authDomain: "abcd-1f7c0.firebaseapp.com",
    projectId: "abcd-1f7c0",
    databaseURL: "https://abcd-1f7c0-default-rtdb.firebaseio.com",
    storageBucket: "abcd-1f7c0.appspot.com",
    messagingSenderId: "1003028112300",
    appId: "1:1003028112300:web:f7e808e2150c6156191009"
};

// Initialize Firebase
//   const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// Reference contact info collections
let contactInfo = firebase.database().ref("infos");

// Listen for submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);
console.log(111);
function submitForm(e) {
    e.preventDefault();

    //   Get input values
    let name = document.querySelector(".name").value
    let email = document.querySelector(".email").value
    let address = document.querySelector(".address").value
    let number1 = document.querySelector(".number1").value
    let number2 = document.querySelector(".number2").value
    console.log(name, email, address, number1, number2);

    saveContactInfo(name, email, address, number1, number2);
    document.querySelector(".name").value=null;
    document.querySelector(".email").value=null;
    document.querySelector(".address").value=null;
    document.querySelector(".number1").value=null;
    document.querySelector(".number2").value=null;
}

// Save Info to firebase
function saveContactInfo(name, email, address, number1, number2) {
    let newContactInfo = contactInfo.push()

    newContactInfo.set({
        name: name,
        email: email,
        address: address,
        number1: number1,
        number2: number2,
    });
}