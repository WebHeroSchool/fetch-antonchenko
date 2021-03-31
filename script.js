let user;
let href = document.location.herif;
const userAva = document.getElementById('avatar');
const userName = document.getElementById('name');
const userBio = document.getElementById('bio');
const userLink = document.gerElementById('link');

let apilink = createUrl ();

const createUrl = function () {
    username = user;
    
    return 'http://api.github.com/users/' + username;
}

let apilink = createUrl();

const presentCard = function (obj) {
  userAva.src = obj.avatar_url;
  userLink.innerHTML = obj.name;
  userBio.href = obj.html_url;
  if (obj.bio != null) {
      userBio.innerHTML = obj.bio;
  } else {
      userBio.innerHTML = "this user haven't bio in profile";
  }
}

fetch(apilink)
.then(res =>  res.json())
.then(obj => user = Object.assign({}, obj))
.then(user => createCard(user))
.catch(err => console.error(err));