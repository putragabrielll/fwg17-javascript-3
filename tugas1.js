const cekHariKerja = (day)=>{
    console.log(day)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item)=>{
                return item == day
            })
            if(cek){
                resolve(cek)
                //resolve(cek)
            }else{
                reject(new Error('Bukan Hari Kerja'))
                //reject('Bukan Hari Kerja')
            }
        },3000)
    })
}

// Tugas A
let cekHari = async(obj)=>{
    let hasil = await cekHariKerja(obj).then((result)=>{
        return result;
    }).catch((err)=>{
        return err.message;
    })
    console.log(hasil)
    return hasil;
}

console.log(cekHari('rabu'))


// Tugas B
let hariKerja = async(hari) => {
    try {
        let kesimpulan = await cekHariKerja(hari)
        console.log(kesimpulan)
    } catch (err){
        console.log(err.message)
    }
}

console.log(hariKerja('sabtu'))