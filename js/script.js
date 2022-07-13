//  ********************************typing animation ******************************* 

var typed=new Typed(".typing",{
  strings:[" ","UI Developer","Frontend Developer","Full Stack Developer"],
  typeSpeed:100,
  BackSpeed:60,
  loop:true
})

// after submitting form blank field code
const data = document.forms['google-sheet'];
data.addEventListener("submit", reset);
function reset(){
  data.Name.value="";
  data.Email.value="";
  data.Subject.value="";
  data.Message.value="";
}