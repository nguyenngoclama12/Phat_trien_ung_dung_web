$().ready(() =>{
    $('#formInsert').validate({
        rules:{
            username:{
                required:true,
                minlength:4,
                maxlength:30
            },
            password:{
                required:true,
                minlength:8
            },
            re_password:{
                required:true,
                minlength:8,
                equalTo:'#password'
            },
            full_name:{
                required:true,
            },
            email:{
                required:true,
                email:true
            }
        },
        messages:{
            username:{
                required:"Bạn chưa nhập tài khoản",
                minlength:"Tài khoản quá ngắn",
                maxlength:"Tài khoản quá dài"
            },
            password:{
                required:"Bạn chưa nhập mật khẩu",
                minlength:"Mật khẩu phải có ít nhất 8 kí tự"
            },
            re_password:{
                required:"Bạn chưa nhập lại mật khẩu",
                equalTo:"Mật khẩu không khớp"
            },
            full_name:{
                required:"Bạn chưa nhập họ và tên",
            },
            email:{
                required:"Bạn chưa nhập email",
                email:"Email chưa đúng định dạng"
            }
        }
    })
    $("#edit-giang-vien").validate({
        rules:{
        username:{
          required:true,
          minlength:4,
          maxlength:30
        },
        password:{
        },
        re_password:{
          equalTo:'#password_edit'
        },
        full_name:{
          required:true,
        },
        email:{
          required:true,
          email:true
        }
      },
      messages:{
        username:{
          required:"Bạn chưa nhập tài khoản",
          minlength:"Tài khoản quá ngắn",
          maxlength:"Tài khoản quá dài"
        },
        password:{
          minlength:"Mật khẩu phải có ít nhất 8 kí tự"
        },
        re_password:{

          equalTo:"Mật khẩu không khớp"
        },
        full_name:{
          required:"Bạn chưa nhập họ và tên",
        },
        email:{
          required:"Bạn chưa nhập email",
          email:"Email chưa đúng định dạng"
        }
      }
    })
})