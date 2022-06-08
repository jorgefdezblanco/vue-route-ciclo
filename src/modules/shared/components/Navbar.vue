
<template>
    <div>
        <CustomLink  
            v-for="link in links"
            :key="link.name"
            :link="link"
        />
    </div>
    
</template>
<script>
import { defineAsyncComponent } from "vue"

export default {
    data(){
        return {
            links: [
                { to: 'pokemon-home', name: 'Pokemons' },
                { to: 'pokemon-id', name: 'Por ID', id: 160 },
                { to: 'pokemon-about', name: 'About' },
                { to: 'dbz-characters', name: 'DBZ Character' },
                { to: 'dbz-about', name: 'DBZ About' },
                { to: 'https://google.com.do', name: 'Google' },
            ]
        }
    },
    components:{
        CustomLink:  defineAsyncComponent(() => import(/* webpackChunkName: "CustomLink" */ '@/modules/shared/components/CustomLink')) 
    }
}
</script>

<style scoped>

div {
    padding: 0 30px;
}

</style>