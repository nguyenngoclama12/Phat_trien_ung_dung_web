var v1 = new Vue({
    el: '#navbarNav',
    data:{
        items:[
            {name:'Home'},
            {name:'Features'},
            {name:'Pricing'},
            {name:'Giang vien'}
        ]
    },
    methods:{
        isActive: function(item){
            if(item.name == 'Home'){
                return 'active'
            }
            else{
                return 'slove'
            }
        }
    }
})

// Tao button bootstrap 
Vue.component('button-bootstrap', {
    props: {
        color: String,
        data: String,
        type1: String
    },
    data: function (){
        return {
            classs: 'btn btn'
        }
    },
    methods: {
        hihi: function(type1) {
            if(type1 == ''){
                return this.classs + "-" + this.color
            }
            else if(type1 == 'outline'){
                return this.classs + "-" + type1 + "-" + this.color
            }
        },
    },
    template: '<button :class="hihi(type1)">{{ data }}</button>'
})

//form bootstrap
Vue.component('form-bootstrap',{
    template:'#form-bootstrap',
    props:{
        for_id: String,
        text_for: String,
        type: String,
        name: String,
        placeholder: String
    }
})

new Vue({
    el:'#formInsert',
    data:{
        items:[
            {
                id:"username",
                type:"text",
                text:"Tên đăng nhập",
                name:"username",
                placeholder:"Nhập tài khoản"
            },
            {
                id:"password",
                type:"password",
                text:"Mật khẩu",
                name:"password",
                placeholder:"Nhập mật khẩu"
            },
            {
                id:"re_password",
                type:"password",
                text:"Nhập lại mật khẩu",
                name:"re_password",
                placeholder:"Nhập lại mật khẩu"
            },
            {
                id:"full_name",
                type:"text",
                text:"Họ và tên",
                name:"full_name",
                placeholder:"Nhập họ và tên"
            },
            {
                id:"email",
                type:"email",
                text:"Email",
                name:"email",
                placeholder:"Nhập Email"
            },
        ]
    }
})

new Vue({
    el:'#header',
    data: {
        count : 0,
        oke : false
    },
    methods: {
        haha: function(){
            this.count++
            if(this.count == 1 || (this.count % 2 != 0 && this.count > 2)){
                this.oke = true;
            }
            else if(this.count%2 == 0){
                this.oke = false;
            }
       }
    }
})
