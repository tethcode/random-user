let image = document.getElementById('porfile_img');
let namee = document.getElementById('name');
let dob = document.getElementById('dob');
let locatione = document.getElementById('location');
let tel_no = document.getElementById('tel_no');
let password = document.getElementById('password');
let email = document.getElementById('email');
let output = document.getElementById('output');
let p_output = document.getElementById('p_output');
async function main() {
    try {
        const res = await fetch('https://randomuser.me/api')
        const data = await res.json()
        if(!res.ok){
            console.log('a problem occured')
            return;
        }
        let login_details = data.results[0].login
        image.src = data.results[0].picture.large;
        output.innerHTML = data.results[0].name.first + ' ' + data.results[0].name.last;
        namee.addEventListener('click', () => {
            output.innerHTML = data.results[0].name.first + ' ' + data.results[0].name.last;
            p_output.innerHTML = 'Hi, My name is';
        })
        dob.addEventListener('click', () => {
            output.innerHTML = data.results[0].dob.date.slice(0, 10);
            p_output.innerHTML = 'My birthday is';
        })
        email.addEventListener('click', () => {
            output.innerHTML = data.results[0].email;
            p_output.innerHTML = 'My email address is';
        })
        locatione.addEventListener('click', () => {
            output.innerHTML = data.results[0].location.street.number + ' ' + data.results[0].location.street.name;
            p_output.innerHTML = 'My address is';
        })
        tel_no.addEventListener('click', () => {
            output.innerHTML = data.results[0].phone;
            p_output.innerHTML = 'My phone number is';
        })
        password.addEventListener('click', () => {
            output.innerHTML = login_details.password;
            p_output.innerHTML = 'My password is';
        })
        for (const [x, y] of Object.entries(login_details)) {
            hello.innerHTML += x, y
        }
    } catch (error){
        console.log(error)
    }
}
main()