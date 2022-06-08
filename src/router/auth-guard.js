
const isAuthenticatedGuard = async ( to, from, next) =>{

    return new Promise( ()=> {
        const random = Math.random() * 100
        if(random > 50){
            console.log('Authenticated')
            next()
        }else{
            console.log('bloqueado')
            next({name: 'pokemon-home'})
        }
    })

    // console.log(to, from, next)

}


export default isAuthenticatedGuard