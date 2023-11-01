const data = fetch("https://jsonplaceholder.typicode.com/users");

const hasil = async() => {
    const res = await data
    const getData = await res.json()
    console.log(getData)

    const dataA = await getData
    const dataB = await dataA.map(a => a.name)
    console.log(dataB)
    
    return getData
}



hasil().then(res => {
    const data = res
    data1 = data.map((a) => {
        return a.name
    })
    console.log(data1)
})
