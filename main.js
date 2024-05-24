document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const userNameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const seguidoresElement = document.querySelector('#followeres');
    const seguindoElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/ADHAN77')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            userNameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            seguindoElement.innerText = json.following;
            seguidoresElement.innerText = json.followers;
            reposElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
})