<template>
  <formulaireVue />
  <candidatsVue/>

</template>

<script>
import formulaireVue from './components/Formulaire.vue';
import candidatsVue from "./components/Candidats.vue";

export default {
  name: 'App',
  components: {
    formulaireVue,
    candidatsVue
  }
}
</script>

