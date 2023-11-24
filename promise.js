console.log('person 1 shows ticket')
console.log('person 2 shows ticket')

const preMovie = async () => {
    const promiseWifeBringingTickets = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('ticket'),3000);
    })

    const getPopcorn = new Promise((resolve, reject)=> resolve('popcorn'))
    const getButter = new Promise((resolve, reject)=> resolve('butter'))
    const getColdrink = new Promise((resolve, reject)=> resolve('Coldrink'))



    let ticket = await promiseWifeBringingTickets;
    console.log(`wife : i have ${ticket} `)
    console.log('husband : lets go in')
    console.log('wife : no, i am hungry')

    let popcorn = await getPopcorn;
    console.log(`husband : i have ${popcorn}`)
    console.log('husband : we should go in')
    console.log('wife : no, i need butter on my popcorn')

    let butter = await getButter;
    console.log(`husband : i have ${butter}`)
    console.log('husband : we should go in')
    console.log('wife : no, i need cold drinks')

    let coldrink = await getColdrink
    console.log(`husband : i have ${coldrink}`)
    console.log('husband : we should go in')
    console.log("wife : yes, let's go in we are getting late")




}
     


preMovie().then((msg)=> console.log(msg));

console.log('person 4 shows ticket')
console.log('person 5 shows ticket')