function getFormData() {
    const fullname = document.getElementById("fullname").value;
    const password = document.getElementById("password").value;
    const college = document.getElementById("college").value;
    const aboutyourself = document.getElementById("aboutyourself").value;


    console.log({ fullname, password, college, aboutyourself });
}