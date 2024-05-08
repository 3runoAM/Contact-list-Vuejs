const app = Vue.createApp({
    data() {
        return {
            contactList: []
        }
    },

    methods: {
        async getData(){
            let response = await fetch("https://randomuser.me/api/?results=15");
            let data = await response.json()
            data.results.forEach(info => {
                let contact = {};
                contact.firstName = info.name.first
                contact.lastName = info.name.last
                contact.email = info.email
                contact.city = info.location.city
                contact.picture = info.picture.medium
                this.contactList.push(contact)
            });
            return contactList
        }
    }
})

app.mount('#app')