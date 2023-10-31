const getMonth = (callback) => {
    setTimeout(() => {
        let error = true
        let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        
        if(!error){
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 0)
}

const cariBulan = async(a, b) => {
    
    if (a != null){
        console.log(a)
        
    }
    console.log(b)
}
console.log(getMonth(cariBulan))