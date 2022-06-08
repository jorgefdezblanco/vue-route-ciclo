import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
      path: '/',
      redirect: '/pokemon'
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: () => import(/* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),
      children:[
          { 
            path: 'home', 
            name: 'pokemon-home',
            component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage')  
          },
          { 
            path: 'about',
            name: 'pokemon-about', 
            component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage') 
          },
          { 
            path: 'pokemonid/:id', 
            name: 'pokemon-id',
            component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
            props: ( router ) => {
              const id = Number( router.params.id );
              return  isNaN( id ) ? { id: 1} : { id } 
            }
          },
          {
            path: '',
            redirect: { name: 'pokemon-home'},
          },
      ]
    },
    {
      path: '/dbz',
      name: 'dbz',
      component: () => import(/* webpackChunkName: "DragonBallLayout" */ '@/modules/dbz/layouts/DragonBallLayout'),
      children:[
          { 
            path: 'characters', 
            name: 'dbz-characters',
            component: () => import(/* webpackChunkName: "CharactersPage" */ '@/modules/dbz/pages/CharactersPage')  
          },
          { 
            path: 'about',
            name: 'dbz-about', 
            component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/dbz/pages/AboutPage') 
          },
         
          {
            path: '',
            redirect: { name: 'dbz-characters'},
          },
      ]
    },
    {  
      path: '/:pathMatch(.*)*', 
      component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound')  
      // redirect: '/home'
    },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

  router.beforeEach((to, from, next)=>{
    console.log({to, from, next});

    const random = Math.random() * 100
    if(random > 50){
      console.log('autenticado');
      next()
    }else{
      console.log(random, "bloqueado por el beforeEach")
      next({name: 'pokemon-home'})
    }


  })

  export default router;