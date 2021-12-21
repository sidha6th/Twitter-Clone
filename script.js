jQuery.validator.addMethod('mypassword', function(value, element) 
{
   return this.optional(element) || (value.match(/[a-zA-Z]/) && value.match(/[0-9]/));
});

$(document).ready(function(){
    $("#forms").validate({
        rules:{
            Name:{
                required:true,
                minlength:2
            },
            telephone:{
                required:true,
                number:true,
                minlength:10,
                maxlength:10
            },
            pass1:{
                required:true,
                minlength:6,
                mypassword:true
            },
            pass2:{
                required:true,
                equalTo:"#pass1"
               
            },
            month:{
                required:true
            },
            day:{
                required:true
            },
            year:{
                required:true
            }



        },
        messages:{
            Name:{
                required:"What’s your name?",
                minlength:"Please enter min 2 character."
            },
            telephone:{
                required:"Enter your mobile number.",
                number:"Enter valid phone number",
                minlength:"Enter valid phone number",
                maxlength:"Enter valid phone number"
            },
            pass1:{
                required:"Enter the password with Minimum 6 characher",
                minlength:"Enter the password with Minimum 6 characher",
                mypassword:"The password must contains letters and numbers"
            },
            pass2:{
                required:"Enter the password to confirm",
                equalTo:"The both password should be same"
            },
            month:{
                required:"should be filled this field",
            },
            day:{
                required:"should be filled this field",
            },
            year:{
                required:"should be filled this field",
            }


           

        }
        
    })
})