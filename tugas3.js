const data = fetch("https://jsonplaceholder.typicode.com/users");


// dengan menggunakan async/await
const hasil = async() => {
    const res = await data
    const getData = await res.json()
    const dataA = await getData.map(a => a.name)
    console.log(dataA)
    return getData
}


// dengan menggunakan then & catch
hasil().then(res => {
    const data = res
    data1 = data.map((a) => {
        return a.name
    })
    console.log(data1)
})
