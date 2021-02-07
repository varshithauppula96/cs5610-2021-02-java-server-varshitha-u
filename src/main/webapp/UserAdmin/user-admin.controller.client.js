var tablebody = jQuery("tbody")
var usersArr = [
    {username: 'varffi', password: 'avj', firstname: 'varshitha', lastname:'uppula', role:'student'},
    {username: 'laoeb', password: 'avj', firstname: 'amit', lastname:'uppula', role:'faculty'},
    {username: 'iajdpw', password: 'avj', firstname: 'varshitha', lastname:'vignesh', role:'student'},
    {username: 'aowjow', password: 'avj', firstname: 'vjayesh', lastname:'uppula', role:'student'},
    {username: 'qiod', password: 'avj', firstname: 'varshitha', lastname:'uppula', role:'faculty'},
    {username: 'amdow', password: 'avj', firstname: 'peiya', lastname:'spmya', role:'student'},
];
var addUserBtn = jQuery(".wbdv-create")
console.log(addUserBtn)
addUserBtn.click(function(){
    var usersArr1 = [
        {username: 'varffi', password: 'avj', firstname: 'varshitha', lastname:'uppula', role:'student'},
        {username: 'laoeb', password: 'avj', firstname: 'amit', lastname:'uppula', role:'faculty'},

    ];
    createUser(usersArr1)

})

function createUser(user) {
    console.log(user)
    usersArr.push(user)
    renderUsers(usersArr)
}


function renderUsers(usersAr) {
    tablebody.empty()
    for (var i = 0; i < usersAr.length; i++) {
        var user = usersAr[i]
        tablebody
            .append(`
    <tr>
            <td>${user.username}</td>
            <td>${""}</td>
            <td>${user.firstname}</td>
            <td>${user.lastname}</td>
            <td>${user.role}</td>
            <td><span class="float-right" style="white-space: nowrap"><button class ="fa-2x fa fa-close wbdv-delete" id ="${i}"> </button>
            <button class = "fa-2x fa fa-pencil"></button></span></td>
          
        </tr>`)
    }
    jQuery(".wbdv-delete").click(function(event){
        console.log(event.target)
        var deleteBtn =jQuery(event.target)
        var theId = deleteBtn.attr("id")
        usersArr.splice(theId,1)
        renderUsers(usersArr)
    })
}

var userNameFld = $("#usernameFld")
var passwordFld = $("#passwordFld")
var firstNameFld = $("#firstNameFld")
var lastNameFld = $("#lastNameFld")
var roleFld = $("#roleFld")
