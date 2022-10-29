<template>
    <div class="privacy noshow">
      <h1>Liste des Etudiants</h1>
      <table class="table">
          <thead>
            <tr>
              <th>
                Nom Complet
              </th>
              <th>
                E-mail
              </th>
              <th>
                Date de démarrage
              </th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="item in candidats" :key="item.id">
              <td>
                {{ item.nom }}
              </td>
              <td>
                {{ item.email }}
              </td>
              <td>
                {{ item.dateD}}
              </td>
            </tr>
          </tbody>
        </table>
    </div>
</template>

<script>

export default {
    data() {
        return {
            candidats: JSON.parse(localStorage.getItem("candidats"))
        }
    },
    methods: {
     
    }
}

</script>

<style >
table {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: gray;
  width: 100%;
}
th {
  border-bottom: 2px solid #ddd;
  text-align: left;
}
td.left {
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
td.right {
  text-align: right;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
td.center {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>