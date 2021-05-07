function adduser(){
    var username1= document.getElementById("name1").value;
    var username2= document.getElementById("name2").value;
    localStorage.setItem("name1",username1);
    localStorage.setItem("name2",username2);
    window.location="quizgame.html";
}