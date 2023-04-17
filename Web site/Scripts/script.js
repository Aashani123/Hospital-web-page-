var frm=document.getElementById('frm');
var nameE=document.getElementById('name-error');
var lastNameE = document.getElementById('secondname-error');
var birthE=document.getElementById('birth-error');
var printage=document.getElementById('yAge');
var mailE=document.getElementById('mail-error');
var unameE=document.getElementById('un-error');
var passE=document.getElementById('pass-error');
var pass2E=document.getElementById('cpw-error');
var chbxE=document.getElementById('terms-error');


function allchecking(){
    if (validName())
    { if (validlastName())
        {  if(calDOB())
            {if(validmail())
                {if(validUn())
                    {if(validPassword())
                        { if(cpw())
                            {if(checkx){
                                    alert("We accept your submission. Check your email.");
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
   alert("Something went wrong...Try again.");
    return false;
}


//firstName;
function validName() {
        var firstname = document.getElementById('firstname').value;
        nameE.style.backgroundColor = "red";

        if (firstname.length == 0 || firstname.length == null) {
            nameE.innerHRML = 'First name is essential';
            document.getElementById('firstname').parentElement.className = 'input-error';
            return false;
        }
        if (firstname.length > 31) {
            nameE.innerHTML = 'Overlimit';
            document.getElementById('firstname').parentElement.className = 'input-error';
            return false;
        }
        else{
        nameE.innerHTML = "valid";
        document.getElementById('firstname').parentElement.className = 'input control success';
        nameE.style.backgroundColor = "transparent";

        return true;
        }
    }

//lasTName;
function validlastName(){
    var lasname=document.getElementById('lastname').value;
    lastNameE.style.backgroundColor = "red";
    if(lasname.length==0 || lasname.length==null)
    {
        lastNameE.innerHRML = 'Last name is essential';
        document.getElementById('lastname').parentElement.className='input-error';
        return false;
    }
    if(lasname.length>31){
        lastNameE.innerHTML = 'Overlimit';
        document.getElementById('lastname').parentElement.className='input-error';
        return false;
    }else{
    lastNameE.innerHTML="valid";
    document.getElementById('lastname').parentElement.className='input control success';
    lastNameE.style.backgroundColor = "transparent";
    return true;}
}

//DOB;
function calDOB(){
    var bd=document.getElementById('birth').value;
    var td=new Date();
    var bd1 = new Date(bd);
    var age = td.getFullYear() - bd1.getFullYear();
    birthE.style.backgroundColor = "red";
    birthE.parentElement.className='form-control success';
    printage.innerHTML="You are currently "+age+" years old.";
    return true;
}

//Email;
function validmail(){
    var em=document.getElementById('mail').value;
    mailE.style.backgroundColor = "red";
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9_\.\-])+\.)+([a-zA-Z0-9_\.\-]){2,4}$/;
    

    if(em.length==0||em.length==null)
    {
        mailE.innerHTML="Email is essential";
        document.getElementById('mail').parentElement.className='input-control error';
        return false;
    }
    else if(filter.test(em)){
         mailE.innerHTML="valid";
         document.getElementById('mail').parentElement.className='input-control success';
         mailE.style.backgroundColor = "transparent";
         return true;
    }
    else{
        mailE.innerHTML="invalid mail";
        document.getElementById('mail').parentElement.className='input-control error';
        return false;
    }
}

//User-name;
function validUn(){   
     var unm = document.getElementById('uname').value;
     unameE.style.backgroundColor = "red";
     var unmf = (/^[a-z]+$/);

     if(unm.length==0||unm.length==null)
     {
         unameE.innerHTML="required";
         document.getElementById('uname').parentElement.className='input-control error';
         return false;
     }
     else if(!unm.match(unmf)){
          unameE.innerHTML="invalid user name. username should a lowercase value";
          document.getElementById('uname').parentElement.className='input-control success';
          return false;
     }
     else{
         unameE.innerHTML="valid";
         document.getElementById('uname').parentElement.className='input-control error';
         unameE.style.backgroundColor = "transparent";
         return true;
     }
}

function validPassword(){ 
    var ps=document.getElementById('pass').value;
    passE.style.backgroundColor = "red";

    if(ps.length==0|| ps.length==null){
         passE.innerHTML="Essential to fullfill";
         document.getElementById('pass').parentElement.className='input-control-error';
         return false;
    }
    else if (ps.length>15){
        passE.innerHTML='cross the limit';
        document.getElementById('pass').parentElement.className='input-control-error';
        return false;
    }
    else if (ps.length<6){
        passE.innerHTML='not enough';
        document.getElementById('pass').parentElement.className='input-control-error';
        return false;
}
    else{
        passE.innerHTML="valid";
        document.getElementById('pass').parentElement.className='input-control success';
        passE.style.backgroundColor = "transparent";
        return true;
    }
}

//password confirm;
function cpw(){ 
    var cp2=document.getElementById('cp').value;
    var ps=document.getElementById('pass').value;
    pass2E.style.backgroundColor = "red";

   if(cp2==ps){
        pass2E.innerHTML="valid";
        document.getElementById('cp').parentElement.className='input-control success';
        pass2E.style.backgroundColor = "transparent";
        return true;
   }else{
        pass2E.innerHTML="should be match";
        document.getElementById('cp').parentElement.className='input-control error';
        return false;
   }
    
}

//checkbox;
function checkx(){ //red here
    
    const cheking=document.getElementById('check').checked;

    if(cheking==false)
    {
        chbxE.innerHTML='Agreement is needed';
        document.getElementById('check').parentElement.className='input-control success';
        return false;
    }
    else{
        chbxE.innerHTML='';
        document.getElementById('check').parentElement.className='input-control success';
        return true;
    }
}

