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
        //console.log(a)
        return a.message
    } else {
        // penggunaan function inline 1
        let temp = b.map((e) => {
            return e
        })

        // penggunaan function inline 2
        ///let temp = b.map(e => e)


        // console.log(b)
        return console.log(temp)
    }
}
getMonth(cariBulan)