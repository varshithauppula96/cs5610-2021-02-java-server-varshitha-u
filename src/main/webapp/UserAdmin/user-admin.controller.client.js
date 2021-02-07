var tablebody = jQuery("tbody")
var usersArr = [

];
var $userNameFld = $("#usernameFld")
var $passwordFld = $("#passwordFld")
var $firstNameFld = $("#firstNameFld")
var $lastNameFld = $("#lastNameFld")
var $roleFld = $("#roleFld")
var $addUserBtn = jQuery(".wbdv-create")
console.log($addUserBtn)

$addUserBtn.click(function () {
    var usersArr1 =
        {
            username: $userNameFld.val(),
            password: $passwordFld.val(),
            firstname: $firstNameFld.val(),
            lastname: $lastNameFld.val(),
            role: $roleFld.val()
        }
    createUser(usersArr1)


    username: $userNameFld.val("")
    password: $passwordFld.val("")
    firstname: $firstNameFld.val("")
    lastname: $lastNameFld.val("")
    role: $roleFld.val("")
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
    jQuery(".wbdv-delete").click(function (event) {
        console.log(event.target)
        var deleteBtn = jQuery(event.target)
        var theId = deleteBtn.attr("id")
        usersArr.splice(theId, 1)
        renderUsers(usersArr)
    })
}


