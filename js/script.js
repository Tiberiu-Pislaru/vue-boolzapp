new Vue({
    el:'#app',
    data:{
        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
    
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        id:0,
        temporaryMessage:'',
        searchContact:'',
        timer:null,
        // newListContacts: this.contacts,
    },
    methods:{
        // prende l'index del contatto e lo assoccia all'ID
        getId:function(index){
            this.id=index;
            // console.log(this.contacts[this.id].messages)
        },
        // isInList:function(item){
        //     for (let index = 0; index < this.newListContacts.length; index++) {
        //         if (item === this.newListContacts[index]) {
        //             return true;
        //         }
        //         return false;
                
        //     };
            
        // },

        // funzione che mi permette di inserire un oggetto 
        // nella lista di oggetti messages
        writeMessage:function(){
            const listMessages= this.contacts[this.id].messages;
            const message= {
                date: '10/01/2020 16:15:22',
                text: this.temporaryMessage,
                status: 'sent'
            };

            listMessages.push(message);
            this.temporaryMessage='';
        },

        // funzione che dovrebbe fare un cosa simile alla funzione di sopra
        // ma ogni secondo
        autoCiao:function(){
            const lastMessage= this.contacts[this.id].messages[0];
           
            this.timer=setInterval(function(){
                if (lastMessage.status === 'send') {
                    const message = {
                        date: '10/01/2020 16:15:22',
                        text: 'ciao',
                        status: 'received'
                    };
                    
                    this.contacts[this.id].messages.push(message);
                    console.log(lastMessage.status);
                };

            }, 1000);

        },

        // funzione per filtrare i contatti
        elementiFiltrati:function() {
            const newListContacts = this.contacts.filter((contact)=>{

                return contact.name.toUpperCase().startsWith(this.searchContact.toUpperCase()) || this.searchContact ===''
            });
            // console.log(this.newListContacts)
            return newListContacts;
        },
        getName:function(){
            const listName=[];
            let listFiltati=this.elementiFiltrati();
            for (let index = 0; index < listFiltati.length; index++) {
                listName.push(listFiltati[index].name)
                
            }
            return listName
        },

        isIn:function(elem){
            let listaNomi=this.getName();
            if (listaNomi.includes(elem.name)) {
                return true
            }
            return false
        }
    },
    // mounted: function(){
    //     this.autoCiao();
    //     this.elementiFiltrati();
    //     this.newListContacts;
    // },

});