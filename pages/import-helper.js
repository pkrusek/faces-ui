export const data = [
  'Matiyas Korsa,Ethiopia,Finfinee,9.033140,38.750080',
  'Fateme,Iran,Arak,34.091221,49.689861',
  'Kajsa Froberg,Filippines,Manila,14.599512,120.984222',
  'Nisklas Stahl Pérez,Spain,Mijas,36.595699,-4.637620',
  'Rita Almeida Nanini,Portugal,Coimbra,40.206569,-8.414618',
  'Adas A,Lithuania,Prienai,54.650828,23.950308',
  'Elena Doukou,Greece,Volos,39.364617,22.933212',
  'Mashkhura Sabirova,Uzbekistan,Tashkent,41.299496,69.240073',
  'Anna Kønurbaeva Corydon,Kyrgyzstan,Bishkek,42.874621,74.569762',
  'Zinajda Sarać,Bosnia+Herzegovina,Sarajevo,43.8476,18.3564',
  'Sonja Nielsen,Mosambique,Maputo,-25.891968,32.605135',
  'Belén Anaís Franco Cisterna,Chile,Chillan,-36.606262,-72.102335',
  'Daniela Petre,Romania,Bucharest,44.437711,26.097367',
  'Maris Gallis,Latvia,Selgava,57.06689,25.458464',
  'Paola Vázquez CAstillo,Mexico,Mexico City,19.432608,-99.133208',
  'Tatiana Nagirneac,Moldova,Bālti,47.75494,27.913',
  'Ahmed Siyar,Afghanistan,Kabul,34.528455,69.171703',
  'Acil Victoria Lind,Russia,Skt. Petersburg,59.93428,30.335099',
  'Jakub Kasiak,Poland,Grajewo,53.647156,22.455217',
  'Guido GGaggl,Austria,Ossiach,46.67721,13.984811',
  'Linh Mai,Vietnam/Tjekkiet,Hanoi,21.033333,105.85',
  'Lucero Contreras,Perú,Junín,-11.335798,-75.341218',
  'Federico Minniti,Germany,Eggenfelden,48.3953,12.76179',
  'KAlina Georgieva,Bulgaria,Haskovo,41.931277,25.557213',
  'Rocío López,Argentina,Buenos Aires,-34.608418,-58.373161',
  'Irina Rusu,Romania,Iași,47.156944,27.590278',
  'Mirza G. Poturović,Bosnia+Herzegovina,Banja Luka,44.766667,17.183333',
  'Martin Barroso,Argentina,Mendoza,-32.890183,-68.84405',
  'Müge Lübic Hedegård,Turkey,Izmir,38.41885,27.12872',
  'Sangheeta Thondepu,India,Uttar Pradesh,26.879641,80.56982',
  'Kaynat Kamal,Bangladesh,Dhaka,23.709921,90.407143',
  'Michael Magee,Northern Ireland,Portaferry,54.38885,-5.550706',
  'Ania Sikorska,Poland,Warszawa,52.229676,21.012229',
  'Lauren Marie Campbell-Hansen,USA,Orlando / Florida,28.538336,-81.379237',
  'Lara Ghiorzo,Italy,Milano,45.465454,9.186516',
  'Victória Carvalho Laursen ,Brazil,Belo Horizonte,-19.924502,-43.935238',
  'Nuunuu Petersen,Greenland,Nuuk,64.18362,-51.721407',
  'John Jay,USA,Hammond/ Louisiana,30.504358,-90.4612',
  'Enida Alisa,Germany/Bosnia,Frankfurt am Main,50.111445,8.680615',
  'Nikolaj Lund Kristensen,Denmark,Odense,55.403756,10.40237',
  'Angelina Wiesen Devine,Denmark,Odense,55.428283,10.442247',
  'Kim Kortlever,Holland,Holten,52.284239,6.426047',
]

export async function writeToFirestore() {
  const ref = this.$fire.firestore.collection('faces')
  try {
    for (const document of dataForImport()) {
      await ref.add(document)
    }
  } catch (error) {
    console.error(error)
  }
}

function dataForImport() {
  const output = []
  for (const element of data) {
    const arr = element.split(',')
    const obj = {
      name: arr[0],
      country: arr[1],
      city: arr[2],
      lat: +arr[3],
      lng: +arr[4],
      created: this.$fireModule.firestore.Timestamp.fromDate(new Date()),
    }
    output.push(obj)
  }
  return output
}
