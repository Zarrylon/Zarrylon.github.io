function profile() {
    var isLog = sessionStorage.getItem('logged');
    var name = sessionStorage.getItem('name');
    var email = sessionStorage.getItem('email');
    var sex = sessionStorage.getItem('gender');
    var date = sessionStorage.getItem('date');
    if (isLog == 1) {
        const id_name = document.getElementById("name_value");
        id_name.textContent = name;
        const id_email = document.getElementById("email_value");
        id_email.textContent = email;
        const id_sex = document.getElementById("gender_value");
        id_sex.textContent = sex;
        const id_date = document.getElementById("date_value");
        id_date.textContent = date;
    }
}