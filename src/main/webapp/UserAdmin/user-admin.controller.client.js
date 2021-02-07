var usersArr = [];
var $userNameFld
var $passwordFld
var $firstNameFld
var $lastNameFld
var $roleFld
var $addUserBtn
var tablebody
var $updateUserBtn

var userServices = new AdminUserServiceClient()



function createUser(user) {
    userServices.createUser(user).then(function(actualCourse){

        usersArr.push(actualCourse)
        renderUsers(usersArr)
    })

}
var selectedUser = null
function selectUser(event) {

    var selectBtn = jQuery(event.target)
    console.log(selectBtn)
    var theIndex1 = selectBtn.attr("id")
    selectedUser = usersArr.find(user => user._id === theIndex1)
    console.log(selectedUser)
    $userNameFld.val(selectedUser.username)
    $passwordFld.val(selectedUser.password)
    $firstNameFld.val(selectedUser.firstname)
    $lastNameFld.val(selectedUser.lastname)
    $roleFld.val(selectedUser.role)
}

function deleteCourse (event) {
    console.log(event.target)
    var deleteBtn = jQuery(event.target)
    var theIndex = deleteBtn.attr("id")

    var theID = usersArr[theIndex]._id

    userServices.deleteUser(theID).then(function (status) {
        usersArr.splice(theIndex, 1)
        renderUsers(usersArr)
    })
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
            <td><span class="float-right" style="white-space: nowrap">
            <button class ="fa-2x fa fa-close wbdv-delete" id ="${i}"> </button>
            <button class = "fa-2x fa fa-pencil wbdv-edit" id ="${user._id}"></button></span></td>
          
        </tr>`)
    }
jQuery(".wbdv-delete").click(deleteCourse)



    jQuery(".wbdv-edit").click(selectUser)


}

function updateUser(){
    console.log(selectedUser)
    selectedUser.username=$userNameFld.val()
    selectedUser.password=$passwordFld.val()
    selectedUser.firstname=$firstNameFld.val()
    selectedUser.lastname=$lastNameFld.val()
    selectedUser.role=$roleFld.val()
}

function main(){
     $userNameFld = $("#usernameFld")
     $passwordFld = $("#passwordFld")
     $firstNameFld = $("#firstNameFld")
     $lastNameFld = $("#lastNameFld")
     $roleFld = $("#roleFld")
     $addUserBtn = jQuery(".wbdv-create")
    $updateUserBtn =jQuery(".wbdv-update")
    tablebody = jQuery("tbody")
    $updateUserBtn.click(updateUser)
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