const app = Vue.createApp({
    data() {
        return {
            searchText: '',
            contactList: [
                {
                    firstName: 'Bruno',
                    lastName: 'Martins',
                    email: "BM@gmail.com",
                    city: "Patos",
                    picture: 'https://randomuser.me/api/portraits/men/57.jpg'
                },
                {
                    firstName: 'Caio',
                    lastName: 'Almeida',
                    email: "CA@gmail.com",
                    city: "Patos",
                    picture: 'https://randomuser.me/api/portraits/men/58.jpg'
                },
                {
                    firstName: 'Roberto',
                    lastName: 'Soares',
                    email: "RS@gmail.com",
                    city: "Cajazeiras",
                    picture: 'https://randomuser.me/api/portraits/men/59.jpg'
                },
                {
                    firstName: 'Gernan',
                    lastName: 'Soares',
                    email: "GS@gmail.com",
                    city: "Cajazeiras",
                    picture: 'https://randomuser.me/api/portraits/men/60.jpg'
                }
            ]
        }
    },

    computed: {
        listResult() {
            if(this.searchText) {
                return this.contactList.filter(contact => {
                    return contact.firstName.toLowerCase().includes(this.searchText.toLowerCase());
                })
            }else {
                return this.contactList
            }
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
                contact.picture = info.picture.large
                this.contactList.push(contact)
            });
            return contactList
        },

        removeContact(index) {
            this.contactList.splice(index, 1)
        }
    }
})

app.mount('#app')