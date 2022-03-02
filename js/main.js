const date = document.getElementById("date");

//función para obtener el año
const getDate = () => (date.innerHTML = new Date().getFullYear());
getDate();
