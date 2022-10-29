<template>
    <div class="profile">
      <h1>Ajouter un Etudiant</h1>
      <form @submit.prevent="handleSubmit">

      <h2>Nom complet</h2>
      <input placeholder="Nom Prénom" type="text" required v-model="nom" style="display: block;">
      <span class="error" v-if="NameError">{{ NameError }} </span>

      <h2>Email</h2>
      <input  placeholder="example@example.com" type="email" required v-model="mail" style="display: block;"/>
      <span class="error" v-if="MailError!=''">{{ MailError }} </span>

      <h2>Date de demarrage</h2>
       <input placeholder="" type="Date" required v-model="date" min={{currentDate()}} style="display: block;">
       <span class="error" v-if="DateError">{{ DateError }} </span>
      <h2>
        <button class='btn btn-success btn-submit'>Ajouter</button>
      </h2>
    </form>
    </div>

</template>

<script>

export default {
    data() {
        return {
            nom: '',
            mail: '',
            date: '',
            NameError: '',
            MailError: '',
            DateError: '',
            candidats: []
        }
    },
    methods: {
      currentDate() {
        const current = new Date();
        const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
        console.log(date)
        return  new Date(date);
        },

        handleSubmit() {
            // Validate Name
            const regnom = /\w+ marc/;
            this.NameError =this.nom.length >= 3 && !(regnom.test(this.nom)) ? '' : 'Le nom ne doit pas être de moins de 3 caractères et ne doit pas contenir le prénom marc'   
          
            // Validate Mail
            const regmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            const regmail2 =/^\w+([\.-]?\w+)*@yahoo.fr$/
            this.MailError = regmail.test(this.mail)&& !regmail2.test(this.mail) ? '' : 'Le mail doit être valide et ne contient pas yahoo.fr'   

            // Validate Date
            const current = new Date();
            const currdate = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
            this.DateError = currdate < this.date ? '' : 'Le champ date doit être uniquement dans le futur'

            if(this.NameError=='' && this.MailError=='' && this.DateError==''){
                const newCand = {
                    nom: this.nom,
                    email:this.mail,
                    dateD:this.date,
                    id: Math.floor(Math.random() * 100)
                };
                this.candidats = [...this.candidats, newCand];
                /*     
                let data = new FormData();
                data.set("nom", this.nom);
                data.set("email", this.mail);
                data.set("dateD", this.date);
                console.log(data)
                axios({
                    method: 'post',
                    url: 'energistement.php',
                    data: data,
                    config: { headers: {'Content-Type': 'multipart/form-data'}}
                });*/
              }
        },

    },
  watch: {
    candidats: {
      handler() {
        localStorage.setItem('candidats',JSON.stringify(this.candidats))
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.getItem("candidats")){
      this.candidats = JSON.parse(localStorage.getItem("candidats"))
    }
  }
}

</script>

<style>
    form {
        max-width: 420px;
        margin: 30px auto;
        background: aliceblue;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
        }
        .error {
            color: red;
            font-size: 0.6em;
            margin-top: 1px;
        }
        
</style>