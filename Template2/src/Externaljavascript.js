    function displayTime() {

    var date = new Date();
    var time= date.toLocaleTimeString();
    document.getElementById("clock").innerHTML=time

    }
    setInterval(displayTime,1000);

    function login(){

    var user=document.getElementById("user").value;
    var password=document.getElementById("pass").value;
            var regex=/^[0-9a-zA-Z]+$/;
      if(user=="" || password==""){
    alert("Please enter username and password");
    }
    else
    {
            if(user.match(regex)){
                window.location.href="UserPage.html"
                return true;
            }
            else{
                alert("Please enter username alphanumeric");
                return false;
            }
    }

    }

     var product=[];
    function add(obj){

    if(obj.id=="ubuntu")
    product.push("ubuntu")
    else if(obj.id=="atom")
    product.push("atom")
    else
    product.push("intellij")

    }

    function contactDetails(){

    window.location.href="Contact.html"

    }

    function register(){

        window.location.href="Register.html"

        }

       function personDetails(){

               function details(name, password, email) {
               this.name = name;
               this.password = password;
               this.email= email;
           }

           var name=document.getElementById("user").value
           var password=document.getElementById("password").value
           var email=document.getElementById("email").value
           var regex=/^[0-9a-zA-Z]+$/;
           if(password.match(regex))
           {
           var person = new details(name, password, email);
           document.write("Thanks "+person.name+" for registering, Redirecting you to home page in 10 secs")
           setTimeout(redirecting,10000);
           function redirecting(){
           window.location.href="Template2.html"
            }
            }
            else{
            alert("password should be alphanumberic")
            }

           }

           function about(){

           window.location.href="about.html"

           }

           function submit(){

           alert("Selected downloads are "+product+". Thanks for downloading")
           window.location.href="Template2.html"

           }
