let users = [
    {username:'cgraig', password:'jalje', firstname:'sbiuhgwe', lastname:'awjbibfew', role:'qwjboi'},
    {username:'cgraig',password:'jalje', firstname:'sbiuhgwe', lastname:'awjbibfew', role:'qwjboi'},
    {username:'cgraig',password:'jalje', firstname:'sbiuhgwe', lastname:'awjbibfew', role:'qwjboi'},
    {username:'cgraig',password:'jalje', firstname:'sbiuhgwe', lastname:'awjbibfew', role:'qwjboi'},
    {username:'cgraig',password:'jalje', firstname:'sbiuhgwe', lastname:'awjbibfew', role:'qwjboi'}
];

let tablebody = jQuery("tbody")
let addUserBtn =jQuery("#wbdv-create")
addUserBtn.click(function(){
    alert("adding")
})

function createUser(user){
    users.push(user)
    renderUser(users)
}
createUser(user: {username:'cgraig', password:'jalje', firstname:'sbiuhgwe', lastname:'awjbibfew', role:'qwjboi'})

function renderUser(users){


    for (let i=0; i< users.length; i++)
    {
        let user = users[i]

        tablebody
            .prepend(`
        <tr>
        <td>${user.username}</td>
    <td>${user.password}</td>
    <td>${user.firstname}</td>
    <td>${user.lastname}</td>
    <td>${user.role}</td>
    <td>
        <span>
          <button class="fa-2x fa fa-times wbdv-remove"></button>
          <button  class="fa-2x fa fa-pencil wbdv-edit"></button>
        </span>
    </td>
</tr>
        `)
    }


}
