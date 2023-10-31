const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        
        if(!error){
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}

const cariBulan = async(a, b) => {
    
    if (a != null){
        console.log(a)
        return a.message
    } else {
        let temp = b.map((e) => {
            return e
        })
        console.log(b)
        console.log(temp)
        return temp
    }
}
console.log(getMonth(cariBulan))