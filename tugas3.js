const data = fetch("https://jsonplaceholder.typicode.com/users");

const hasil = async() => {
    const res = await data
    const getData = await res.json()
    return getData
}

console.log(hasil)
hasil().then(res => {
    const data = res
    data1 = data.map((a) => {
        return a.name
    })
    console.log(data1)
})