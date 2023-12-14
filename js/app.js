$(document).ready(function() {
search();
console.log('123');
})

var api = 'https://api.github.com/search/users?type=Users&q='

function search() {
    
    $('#search-button').click(function(event) {
        $('#user-list').empty();
        event.preventDefault();
        console.log('hi');
        fetch(api+$('#search-input').val()).then(function(result) {
             return result.json(); }).then( function(data){
                console.log(data);

                data.items.forEach(element => {
                    $("#user-list").append('<li> USER: <a href="https://www.github.com/'+element.login+'">'+element.login+'</a> / ID:' + element.id + '</li>');
                });
              
             });
    })
}