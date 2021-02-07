var usersArr = [];
var $userNameFld
var $passwordFld
var $firstNameFld
var $lastNameFld
var $roleFld
var $addUserBtn
var tablebody

var userServices = new AdminUserServiceClient()



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
            .prepend(`
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
        var theIndex = deleteBtn.attr("id")

        var theID = usersArr[theIndex]._id

        userServices.deleteUser(theID).then(function (status) {
            usersArr.splice(theIndex, 1)
            renderUsers(usersArr)
        })
    })

}


function main(){
     $userNameFld = $("#usernameFld")
     $passwordFld = $("#passwordFld")
     $firstNameFld = $("#firstNameFld")
     $lastNameFld = $("#lastNameFld")
     $roleFld = $("#roleFld")
     $addUserBtn = jQuery(".wbdv-create")
    tablebody = jQuery("tbody")

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
    userServices.findAllUsers().then(function(actualUsersFromServer){
usersArr = actualUsersFromServer
        renderUsers(usersArr)
    })
}
jQuery(main)