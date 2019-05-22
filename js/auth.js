const config = {
  apiKey: "AIzaSyCf3QOVUqQghyHedrSSL1hdYtafM6lmnVA",
  authDomain: "schedule-360.firebaseapp.com",
  databaseURL: "https://schedule-360.firebaseio.com",
  projectId: "schedule-360",
  storageBucket: "schedule-360.appspot.com",
  messagingSenderId: "904075021749",
  appId: "1:904075021749:web:512ad30b5be77f08"
};

firebase.initializeApp(config);

var auth = firebase.auth();

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    window.location.href = "index.html";
  } else {
    // User is signed out.
    window.location.href = "login.html";
  }
});

function signIn(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });
}

function addUser(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}

//--------------------------------------------------
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");

//login user
btnLogin.addEventListener("click", e => {
  const email = emailField.value;
  const pass = passwordField.value;
  const auth = firebase.auth();
  //sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => errors(e));
});

emailField.addEventListener("keypress", function(e) {
  var key = e.which || e.keyCode;
  if (key === 13) {
    // 13 is enter
    const email = emailField.value;
    const pass = passwordField.value;
    const auth = firebase.auth();
    //sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => errors(e));
  }
});
passwordField.addEventListener("keypress", function(e) {
  var key = e.which || e.keyCode;
  if (key === 13) {
    // 13 is enter
    const email = emailField.value;
    const pass = passwordField.value;
    const auth = firebase.auth();
    //sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => errors(e));
  }
});

var showedForgotBtn = false;
function errors(errorMessage) {
  Materialize.toast(errorMessage.message, 4000);
  if (!showedForgotBtn) {
    $("#loginActions").append(
      '<br><br><a href="forgot.html" class="waves-effect waves-light btn red lighten-1">Forgot Password</a>'
    );
    showedForgotBtn = true;
  }
}
