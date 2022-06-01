// export const data = [
//   'Ikenna N.,Nigeria,Abuja,9.081999,8.675277,faces/jpg/1_hhpov7.jpg',
//   'Matiyas K.,Ethiopia,Finfinee,9.033140,38.750080,faces/jpg/2_teirkq.jpg',
//   'Fateme,Iran,Arak,34.091221,49.689861,faces/jpg/3_ya8obw.jpg',
//   'Kajsa F.,Filippines,Manila,14.599512,120.984222,faces/jpg/4_lta98a.jpg',
//   'Nisklas S.P.,Spain,Mijas,36.595699,-4.637620,faces/jpg/5_bu9onq.jpg',
//   'Rita A.N.,Portugal,Coimbra,40.206569,-8.414618,faces/jpg/6_giitac.jpg',
//   'Adas A.,Lithuania,Prienai,54.650828,23.950308,faces/jpg/7_vv2h6z.jpg',
//   'Elena D.,Greece,Volos,39.364617,22.933212,faces/jpg/8_q6keph.jpg',
//   'Mashkhura S.,Uzbekistan,Tashkent,41.299496,69.240073,faces/jpg/9_uma5jv.jpg',
//   'Anna K.C.,Kyrgyzstan,Bishkek,42.874621,74.569762,faces/jpg/10_tbc1zy.jpg',
//   'Zinajda S.,Bosnia+Herzegovina,Sarajevo,43.8476,18.3564,faces/jpg/11_vlegfs.jpg',
//   'Sonja N.,Mosambique,Maputo,-25.891968,32.605135,faces/jpg/12_cffuc8.jpg',
//   'Belén A.F.C.,Chile,Chillan,-36.606262,-72.102335,faces/jpg/13_tsfust.jpg',
//   'Daniela P.,Romania,Bucharest,44.437711,26.097367,faces/jpg/14_jmbvkh.jpg',
//   'Maris G.,Latvia,Selgava,57.06689,25.458464,faces/jpg/15_g3c2va.jpg',
//   'Paola V.C.,Mexico,Mexico City,19.432608,-99.133208,faces/jpg/16_emwlvo.jpg',
//   'Tatiana N.,Moldova,Bālti,47.75494,27.913,faces/jpg/17_kru4bs.jpg',
//   'Ahmed S.,Afghanistan,Kabul,34.528455,69.171703,faces/jpg/18_dwytpn.jpg',
//   'Acil Victoria L.,Russia,Skt. Petersburg,59.93428,30.335099,faces/jpg/19_e544d6.jpg',
//   'Jakub K.,Poland,Grajewo,53.647156,22.455217,faces/jpg/20_oxbr2e.jpg',
//   'Guido G.,Austria,Ossiach,46.67721,13.984811,faces/jpg/21_v6iusj.jpg',
//   'Linh M.,Vietnam/Tjekkiet,Hanoi,21.033333,105.85,faces/jpg/22_x8optg.jpg',
//   'Lucero C.,Perú,Junín,-11.335798,-75.341218,faces/jpg/23_cyzfvr.jpg',
//   'Federico M.,Germany,Eggenfelden,48.3953,12.76179,faces/jpg/24_x17osm.jpg',
//   'KAlina G.,Bulgaria,Haskovo,41.931277,25.557213,faces/jpg/25_ouqjyk.jpg',
//   'Rocío L.,Argentina,Buenos Aires,-34.608418,-58.373161,faces/jpg/26_kmxnwt.jpg',
//   'Irina R.,Romania,Iași,47.156944,27.590278,faces/jpg/27_lkv1b4.jpg',
//   'Mirza G.P.,Bosnia+Herzegovina,Banja Luka,44.766667,17.183333,faces/jpg/28_xp4vab.jpg',
//   'Martin B.,Argentina,Mendoza,-32.890183,-68.84405,faces/jpg/29_uzoi7c.jpg',
//   'Müge L.H.,Turkey,Izmir,38.41885,27.12872,faces/jpg/30_k0c8ko.jpg',
//   'Sangheeta T.,India,Uttar Pradesh,26.879641,80.56982,faces/jpg/31_uctidw.jpg',
//   'Kaynat K.,Bangladesh,Dhaka,23.709921,90.407143,faces/jpg/32_fachwm.jpg',
//   'Michael M.,Northern Ireland,Portaferry,54.38885,-5.550706,faces/jpg/33_fa0ayz.jpg',
//   'Ania S.,Poland,Warszawa,52.229676,21.012229,faces/jpg/34_us5s1q.jpg',
//   'Lauren Marie C.,USA,Orlando / Florida,28.538336,-81.379237,faces/jpg/35_zmnmzb.jpg',
//   'Lara G.,Italy,Milano,45.465454,9.186516,faces/jpg/36_y3labj.jpg',
//   'Victória C.L. ,Brazil,Belo Horizonte,-19.924502,-43.935238,faces/jpg/37_vuundi.jpg',
//   'Nuunuu P.,Greenland,Nuuk,64.18362,-51.721407,faces/jpg/38_kofejy.jpg',
//   'John J.,USA,Hammond/ Louisiana,30.504358,-90.4612,faces/jpg/39_lxc0p6.jpg',
//   'Enida A.,Germany/Bosnia,Frankfurt am Main,50.111445,8.680615,faces/jpg/40_d57eut.jpg',
//   'Nikolaj L.K.,Denmark,Odense,55.403756,10.40237,faces/jpg/41_wz03gw.jpg',
//   'Angelina W.D.,Denmark,Odense,55.428283,10.442247,faces/jpg/42_a6nuhy.jpg',
//   'Kim K.,Holland,Holten,52.284239,6.426047,faces/jpg/43_tamip3.jpg',
// ]
//
// // export async function writeToFirestore() {
// //   const ref = this.$fire.firestore.collection('faces')
// //   try {
// //     for (const document of dataForImport()) {
// //       await ref.add(document)
// //     }
// //   } catch (error) {
// //     console.error(error)
// //   }
// // }
//
// function dataForImport() {
//   const output = []
//   for (const element of data) {
//     const arr = element.split(',')
//     const obj = {
//       name: arr[0],
//       country: arr[1],
//       city: arr[2],
//       lat: +arr[3],
//       lng: +arr[4],
//       portrait: arr[5],
//       created: this.$fireModule.firestore.Timestamp.fromDate(new Date()),
//     }
//     output.push(obj)
//     console.log(output)
//   }
//   return output
// }
