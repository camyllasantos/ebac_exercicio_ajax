$(document).ready(function() {
    const nameElement = $('#name');
    const usernameElement = $('#username');
    const avatarElement = $('#profile');
    const reposElement = $('#repos');
    const followersElement = $('#followers');
    const followingElement = $('#following');
    const linkElement = $('#link');

    $.ajax({
        url: 'https://api.github.com/users/camyllasantos',
        method: 'GET',
        success: function(json) {
            nameElement.text(json.name);
            usernameElement.text(json.login);
            avatarElement.attr('src', json.avatar_url);
            followingElement.text(json.following);
            followersElement.text(json.followers);
            reposElement.text(json.public_repos);
            linkElement.attr('href', json.html_url);
        },
        error: function() {
            console.error('Erro ao buscar os dados do GitHub');
        }
    });
});
