var nama = 'Ari Hidayat'
var peran = 'Werewolf'

console.log("No 1. if-else\n");

if (!nama.trim()) {
    console.log('Nama harus di isi guys !')
}else if (!peran.trim()) {
    console.log('halo '+ nama + ', Pilih peranmu untuk memulai game!')
}else if (peran== 'Penyihir'){
    console.log('Selamat datang di dunia werewolf, '+ nama)
    console.log('Halo ' + peran+' ' + nama + ', kamu dapat melihat siapa yang menjadi werewolf!')
}else if (peran == 'Guard'){
    console.log('Selamat datang di dunia werewolf, '+ nama)
    console.log('Halo ' + peran+' ' + nama + ', kamu akan membantu melindungi temanmu dari serangan werewolf.')
}else if (peran == 'Werewolf'){
    console.log('Selamat datang di dunia werewolf, '+ nama)
    console.log('Halo ' + peran+' ' + nama + ',Kamu akan memakan mangsa setiap malam!')
}


console.log("No 2. Switch Case\n");
var tanggal = 22; 
var bulan = 1; 
var tahun = 2002;

switch (bulan){
    case 1:
        bulan = "Januari";
        console.log(tanggal +" "+bulan+" "+ tahun);
        break;
        
    case 2:
        bulan = "Februari";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;

    case 3:
        bulan = "Maret";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 4:
        bulan = "April";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 5:
        bulan = "Mei";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 6:
        bulan = "Juni";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 7:
        bulan = "Juli";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 8:
        bulan = "Agustus";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 9:
            bulan = "September";
            console.log(`${tanggal} ${bulan} ${tahun}`);
            break;
    case 10:
        bulan = "Oktober";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 11:
            bulan = "November";
            console.log(`${tanggal} ${bulan} ${tahun}`);
            break;
    case 12:
        bulan = "Desember";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    default:
        console.log(`Format tanggal tidak tepat!`);
        break;
}