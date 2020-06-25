window.onload = function(){

document.querySelector('.form-send').addEventListener('click', function(){
    var user_name = document.querySelector('#user-name').value;
    var user_age = document.querySelector('#user-age').value;
    
    age = parseInt(user_age);
        if(!user_name || user_name.length < 2){
            console.warn('no data');
            return;
        }
        fetch('/registration', {
            method: 'POST',
            body: JSON.stringify({
                name: user_name,
                age: user_age
            })
        }).then(function(resp){
            return resp.json();
        }).then(function(response){
            console.log(response)
        })
})

}