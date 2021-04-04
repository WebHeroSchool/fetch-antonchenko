
const userAva = document.getElementById('avatar');
const userName = document.getElementById('name');
const userBio = document.getElementById('bio');
const userLink = document.gerElementById('link');

const presentCard = function (obj) {
  userAva.src = obj.avatar_url;
  userLink.innerHTML = obj.name;
  userBio.href = obj.html_url;
  if (!obj.bio) userBio.innerHTML = obj.bio;
  else userBio.innerHTML = "this user haven't bio in profile";
}

fetch("http://api.github.com/users/")
.then(res =>  res.json())
.then(user => presentCard(user))
.catch(err => console.error(err));