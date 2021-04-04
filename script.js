
const preloader = document.getElementById('loader')
const dateHtml = document.querySelector('.date');

const userAva = document.getElementById('avatar');
const userName = document.getElementById('name');
const userBio = document.getElementById('bio');
const userLink = document.gerElementById('link');

const getPreloader = new Promise ((resolve, reject) => {
setTimeout(() => {
  resolve (new Date ())
}, 1000)
});

const getTime = new Promise ((resolve, reject) => {
  fetch ("http://api.github.com/users/")
  .then((res) => res.json())
  .then((time) => {
    resolve(time)
  })
});

 function presentCard(obj, time) {
  dateHtml.innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
  userAva.src = obj.avatar_url;
  userLink.innerHTML = obj.name;
  userBio.href = obj.html_url;
  if (!obj.bio) userBio.innerHTML = obj.bio;
  else userBio.innerHTML = "this user haven't bio in profile";
}

  Promise.all([getPreloader, getTime])
  .then(([date, time]) => {
   presentCard(date, time)
   preloader.style.display = 'none'
  })

.catch(err => console.error(err));

