const panggilData = () => {
    const data = fetch("https://jsonplaceholder.typicode.com/users");
    return data
}

// dengan menggunakan async/await
const hasil = async(x) => {
    try{
        const res = await x
        const getData = await res.json()
        const dataA = await getData.map(a => a.name)
        console.log(dataA)
        return getData
    }catch(error){
        console.log(error)
    }
}
hasil(panggilData())


// dengan menggunakan then & catch
panggilData()
    .then(result => result.json())
    .then((res) => {
        const hasil = res
        data1 = hasil.map(a => a.name)
        console.log(data1)
    })
    .catch((error) => {
        console.log(error)
    })





    
// Tester
// hasil().then(res => {
//     const data = res
//     data1 = data.map((a) => {
//         return a.name
//     })
//     console.log(data1)
// })