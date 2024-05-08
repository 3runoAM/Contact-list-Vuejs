const app = Vue.createApp({
    data() {
        return {
            firstName: 'Bruno',
            lastName: 'Martins',
            email: "BM@gmail.com",
            city: "Patos",
            picture: 'https://randomuser.me/api/portraits/men/57.jpg'
        }
    },

    methods: {
        changeData(){
            this.firstName = 'Caio';
            this.lastName = 'Almeida';
            this.email = 'CA@gmail.com';
            this.city = 'João Pessoa';
            this.picture = 'https://randomuser.me/api/portraits/men/60.jpg';
        }
    }
})

app.mount('#app')