// let loginForm = document.getElementById('login-form');
// let emailAddress = document.getElementById('emailAddressInput');
// let password = document.getElementById('passwordInput');

// if (loginForm) {
//     loginForm.addEventListener('submit', (event) => {
//         //console.log("login submit js!!!!!!");

//         errorDiv.hidden = false;
//         errorDiv.innerHTML = "";
//         let emptyEmail = false;
//         let emptyPassword = false;

//         if (emailAddress.value.trim() === "") {
//             event.preventDefault();
//             emptyEmail = true;
//             let message = document.createElement('p');
//             message.innerHTML = "Email is required"
//             errorDiv.appendChild(message);
//         }

//         if (!emptyEmail) {
//             try {
//                 emailAddress.value = checkEmail(emailAddress.value);
//             }
//             catch (e) {
//                 event.preventDefault();
//                 let message = document.createElement('p');
//                 message.innerHTML = "Email is not valid"
//                 errorDiv.appendChild(message);        
//             }
//         }

//         if (password.value.trim() === "") {
//             event.preventDefault();
//             emptyPassword = true;
//             let message = document.createElement('p');
//             message.innerHTML = "Password is required"
//             errorDiv.appendChild(message);
//         }

//         if (!emptyPassword) {
//             try {
//                 password.value = checkPassword(password.value);
//             }
//             catch (e) {
//                 event.preventDefault();
//                 let message = document.createElement('p');
//                 message.innerHTML = "Password is not valid"
//                 errorDiv.appendChild(message);        
//             }
//         }
//     });
//   }
