function validateform()
{
    var f=document.gform.fname.value;
    var l=document.gform.lname.value;
    var u=document.gform.usnm.value;
    var pw=document.gform.pass.value;
    var cm = document.gform.cnfrm.value; 
    if((f==null)||(f=="")||(l==null)||(l=="")||(u==null)||(u==""))
    {
        alert("FirstName , LastName and UserName cannot be b");
        return false;
    }
    else if(pw.search(/[A-Z]/)<0||pw.search(/[0-9]/)<0)
    {
        alert("Password is WEEK!");
        return false;
    }
    else if(pw.search(/[@&*#]/)<0)
    {
        alert("Password is MEDIUM !");
        return false;
    }
    else if(pw.length<6)
    {
        alert("Password should contain atleast 6 characters to make it strong !");
        return false;
    }
    else if(pw.length>6)
    {
        alert("Password is STRONG !");
     
    }
 if(pw==cm){  
            return true;  
            }  
        else{  
            alert("password must be same!");  
            return false;  

    }
} 