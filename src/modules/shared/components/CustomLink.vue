<template>
  <a v-if="isExternalLink" 
  target="_blank"
  class="normal-link"
  :href="link.to">{{ link.name }}</a>

  <router-link
    v-else
    :to="{ name: link.to, params: { id: link.id }}" 
    v-slot="{ isActive }">
        
        <a :class=" isActive ? 'is-active' : 'normal-link' ">
            {{ link.name }}
        </a>
    
    </router-link>

</template>

<script>
export default {
    props:{ 
        link:{
            type: Object,
            required: true
        }
    },
    computed:{
        isExternalLink(){
            return this.link.to.startsWith('http')
        }
    }
}
</script>

<style scoped>

.is-active {
    color: #42b983;
    font-weight: bold;
    margin: 0 10px; 
}

.normal-link {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px; 
}


</style>