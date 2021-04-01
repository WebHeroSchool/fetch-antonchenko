let user = Link;
const userAva = document.getElementById('avatar');
const userName = document.getElementById('name');
const userBio = document.getElementById('bio');
const userLink = document.gerElementById('link');

let apilink = createUrl ();

const createUrl = function () {
    username = user;
    
    return 'http://api.github.com/users/' + username;
}

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
.then(user => presentCard(user))
.catch(err => console.error(err));