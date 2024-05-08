const app = Vue.createApp({
    data(){
        return {
            firstName: 'Bruno',
            lastName: 'Martins',
            email: "BM@gmail.com",
            city: "Patos",
            picture:  'https://randomuser.me/api/portraits/men/57.jpg'
        }
    }
})

app.mount('#app')