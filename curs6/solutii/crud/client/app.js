var dataview = $('#dataview');
//function getData(iduser, callback) {
function getData() {
    let rezultat = new Promise(function (resolve, reject) {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3001/users',
            headers: { "Access-Control-Allow-Origin": "*" },
            dataType: 'json',
            contentType: 'application/json',
            success: function (data, status, error) {
                // console.log(data.length);
                if (data) {
                    resolve(data);
                }
                else {
                    reject('Error, nu s-au primit date!');
                }

            },
            error: function (status, error) {
                reject('Error: a aparut o eroare ' + JSON.stringify(status))

            },
            complete: function (data) {
                console.log('Cererea a fost tratata complet', data)
            }
        });
    });
    return rezultat;
}
function showData(posts) {

    let post = '';
    Object.keys(posts).forEach(item => {
        console.log(posts[item]);
        post += `
        <ul>
        <li>ID: ${posts[item].id}</li>
        <li>name: ${posts[item].name}</li>
        <li>profession: ${posts[item].profession}</li>
        </ul>
        `
    })
    dataview.append(post);
};
$(document).ready(function ($) {
    $("#submit").click(function (e) {
        getData().then((myposts) => {
            showData(myposts);
            console.log('succes promisiunea 1', myposts);

        }).catch((err) => {
            console.log('O promisiune nu s-a realizat', err);
        })

    });

    $("#sterge").click(function (e) {

        let ajxReq = $.ajax({
            type: 'DELETE',
            url: 'http://localhost:3001/users/1652778027417'
        });

        ajxReq.success(function (data, status, jqXhr) {
            $("#message").append("Request is Success.");

        });
        ajxReq.error(function (jqXhr, textStatus, errorMessage) {
            alert(errorMessage);
            $("#message").append("Request is Fail.");
        });


    });
    $("#adauga").click(function (e) {

        let ajxReq = $.ajax({
            type: 'POST',
            data: {
                "name": "teresa may5",
                "password": "parliament5",
                "profession": "brexit killer5",
                "id": 5
            },
            url: 'http://localhost:3001/users'
        });

        ajxReq.success(function (data, status, jqXhr) {
            $("#message").append("Request is Success.");

        });
        ajxReq.error(function (jqXhr, textStatus, errorMessage) {
            alert(errorMessage);
            $("#message").append("Request is Fail.");
        });


    });

    $("#editeaza").click(function (e) {

        let ajxReq = $.ajax({
            type: 'PUT',
            data: {
                "name": "Nume editat",
                "password": "parolaeditat",
                "profession": "profesieeditat",
                "id": 1
            },
            url: 'http://localhost:3001/users/1'
        });

        ajxReq.success(function (data, status, jqXhr) {
            $("#message").append("Request is Success.");

        });
        ajxReq.error(function (jqXhr, textStatus, errorMessage) {
            alert(errorMessage);
            $("#message").append("Request is Fail.");
        });


    });
});