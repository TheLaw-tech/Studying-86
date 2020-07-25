let pred = ["Не сегодня","Лучше не стоит","Чуть позже","Возможно","Скорее да чем нет","Скорее нет чем да","Да, определённо","Даст 2"]

function predict(){
    let random = Math.random() * pred.length;
    random = Math.floor(random);
    document.getElementById("future").innerText = pred[random];
}