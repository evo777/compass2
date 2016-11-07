import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

GoogleSignin.hasPlayServices({ autoResolve: true })
  .then(() => {
  })
  .catch((err) => {
    console.log("Play services error", err.code, err.message);
  });

GoogleSignin.configure({
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  iosClientId: <FROM DEVELOPPER CONSOLE>,
  webClientId: <FROM DEVELOPPER CONSOLE>,
  offlineAccess: true
})
.then(() => {
  currentUserAsync();
});


GoogleSignin.currentUserAsync().then((user) => {
  console.log('USER', user);
  this.setState({user: user});
})
.done();


GoogleSignin.signIn()
.then((user) => {
  console.log(user);
  this.setState({user: user});
})
.catch((err) => {
  console.log('WRONG SIGNIN', err);
})
.done();


GoogleSignin.revokeAccess()
.then(() => {
  console.log('deleted');
})
.catch((err) => {

})