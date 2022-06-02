<template>
<!--  <div class="bg-black">-->
  <div :class="{ [`bg-black flex flex-col h-screen`]: !isGallery }">
    <nav class="fixed top-0 w-full bg-zinc-800 shadow-lg shadow-neutral-900 z-10">
<!--    <nav class="bg-zinc-800 shadow-lg shadow-neutral-900 z-10">-->
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <!-- Website Logo -->
            <div>
              <div
                class="flex items-center py-4 px-2">
                <img src="@/assets/images/logo.svg" alt="Logo" class="h-8 w-8 mr-2" />
                <span class="font-semibold text-amber-600 text-lg">UNITED FACES OF ODENSE</span>
              </div>
            </div>
            <!-- Primary Navbar items -->
            <div class="hidden md:flex items-center space-x-1">
              <a href="https://dagmarstudio.dk/portrait-project" target="_blank" class="py-4 px-2 text-amber-600 font-light hover:text-amber-500 transition duration-300 cursor-pointer">Project</a>
              <a href="https://fyens.dk/artikel/tjekkiske-dagmar-maler-ansigter-fra-hele-verden-jeg-mangler-personer-fra-asien-sydamerika-eller-afrika-der-gerne-vil-males" target="_blank" class="py-4 px-2 text-amber-600 font-light hover:text-amber-500 transition duration-300 cursor-pointer">Press</a>
              <span class="py-4 px-2 text-amber-600 font-light hover:text-amber-500 transition duration-300 cursor-pointer" @click="isGallery=!isGallery">{{isGallery ? 'SWITCH TO MAP' : 'SWITCH TO GALLERY'}}</span>
            </div>
          </div>
          <!-- Secondary Navbar items -->
          <div class="hidden md:flex items-center space-x-3 ">
            <a href="https://dagmarstudio.dk" target="_blank" class="py-2 px-2 font-light text-gray-400 transition duration-300">Contact</a>
          </div>
          <div class="md:hidden flex items-center">
            <button class="outline-none mobile-menu-button" @click="showMobileMenu=!showMobileMenu">
              <svg
                class="w-6 h-6 text-amber-500"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div v-if="showMobileMenu">
        <ul class="">
          <li><a href="https://dagmarstudio.dk/portrait-project" target="_blank" class="block text-center text-lg py-4 px-2 text-amber-600 font-light hover:text-amber-500 transition duration-300 cursor-pointer" @click="showMobileMenu=!showMobileMenu">Project</a></li>
          <li><a href="https://fyens.dk/artikel/tjekkiske-dagmar-maler-ansigter-fra-hele-verden-jeg-mangler-personer-fra-asien-sydamerika-eller-afrika-der-gerne-vil-males" target="_blank" class="block text-lg text-center py-4 px-2 text-amber-600 font-light hover:text-amber-500 transition duration-300 cursor-pointer" @click="showMobileMenu=!showMobileMenu">Press</a></li>
          <li><a href="https://dagmarstudio.dk" target="_blank" class="block text-lg text-center py-4 px-2 text-amber-600 font-light hover:text-amber-500 transition duration-300 cursor-pointer" @click="showMobileMenu=!showMobileMenu">Contact</a></li>
          <li><span class="block text-center py-4 px-2 text-amber-600 text-lg font-bold hover:text-amber-500 transition duration-300 cursor-pointer" @click="isGallery=!isGallery;showMobileMenu=!showMobileMenu">{{isGallery ? 'SWITCH TO MAP' : 'SWITCH TO GALLERY'}}</span></li>
        </ul>
      </div>
    </nav>
    <main v-if="!isGallery" class="w-screen flex flex-grow bg-black z-0">
      <client-only>
        <l-map :center="center" :options="{zoomControl: false}" :max-bounds="[[-90, -260],[90, 260]]" :max-bounds-viscosity="1.0" :min-zoom="3" max-zoom=18 :zoom="zoom">
          <l-tile-layer :url="url" :attribution="attribution"/>
          <l-marker v-for="(face, index) in faces" :key="index" :lat-lng="[face.lat, face.lng]" @click="showFace(face)"/>
          <l-control-zoom position="bottomright"/>
        </l-map>
      </client-only>
    </main>
    <main v-if="isGallery">
      <div class="w-auto px-10 py-28 content-start bg-gray-800">
        <div class="grid gap-10 lg:grid-cols-4 md:grid-cols-2">
          <div v-for="face in faces" :key="face.id" class="mx-auto" @click="showFace(face)">
            <img :src="$cloudinary.image.url(face.portrait_webp, {crop: 'scale', height: 300})">
          </div>
        </div>
      </div>
<!--      <PortraitsGallery :faces="faces"/>-->
    </main>
    <CommonModal :showing="showingFace" @update:showing="showingFace = $event">
      <FaceModal :face="face" :picture="face.portrait_webp"/>
    </CommonModal>
  </div>
</template>

<script>

import CommonModal from "~/components/CommonModal";
import FaceModal from "~/components/FaceModal";

export default {
  name: 'IndexPage',
  components: {FaceModal, CommonModal},
  data() {
    return {
      data: [
        'Ikenna N.,Nigeria,Abuja,9.081999,8.675277,faces/jpg/1_hhpov7.jpg,faces/webp/1_tn4dpd.webp',
        'Matiyas K.,Ethiopia,Finfinee,9.033140,38.750080,faces/jpg/2_teirkq.jpg,faces/webp/2_tknvmr.webp',
        'Fateme,Iran,Arak,34.091221,49.689861,faces/jpg/3_ya8obw.jpg,faces/webp/3_vof6ay.webp',
        'Kajsa F.,Filippines,Manila,14.599512,120.984222,faces/jpg/4_lta98a.jpg,faces/webp/4_bczz5p.webp',
        'Nisklas S.P.,Spain,Mijas,36.595699,-4.637620,faces/jpg/5_bu9onq.jpg,faces/webp/5_qb9mjb.webp',
        'Rita A.N.,Portugal,Coimbra,40.206569,-8.414618,faces/jpg/6_giitac.jpg,faces/webp/6_d4y22n.webp',
        'Adas A.,Lithuania,Prienai,54.650828,23.950308,faces/jpg/7_vv2h6z.jpg,faces/webp/7_mbyb7w.webp',
        'Elena D.,Greece,Volos,39.364617,22.933212,faces/jpg/8_q6keph.jpg,faces/webp/8_ot5xmu.webp',
        'Mashkhura S.,Uzbekistan,Tashkent,41.299496,69.240073,faces/jpg/9_uma5jv.jpg,faces/webp/9_hq4ytc.webp',
        'Anna K.C.,Kyrgyzstan,Bishkek,42.874621,74.569762,faces/jpg/10_tbc1zy.jpg,faces/webp/10_n2kffo.webp',
        'Zinajda S.,Bosnia+Herzegovina,Sarajevo,43.8476,18.3564,faces/jpg/11_vlegfs.jpg,faces/webp/11_wv4tar.webp',
        'Sonja N.,Mosambique,Maputo,-25.891968,32.605135,faces/jpg/12_cffuc8.jpg,faces/webp/12_cuon8t.webp',
        'Belén A.F.C.,Chile,Chillan,-36.606262,-72.102335,faces/jpg/13_tsfust.jpg,faces/webp/13_ordoij.webp',
        'Daniela P.,Romania,Bucharest,44.437711,26.097367,faces/jpg/14_jmbvkh.jpg,faces/webp/14_krpjmv.webp',
        'Maris G.,Latvia,Selgava,57.06689,25.458464,faces/jpg/15_g3c2va.jpg,faces/webp/15_kpla47.webp',
        'Paola V.C.,Mexico,Mexico City,19.432608,-99.133208,faces/jpg/16_emwlvo.jpg,faces/webp/16_us2dgs.webp',
        'Tatiana N.,Moldova,Bālti,47.75494,27.913,faces/jpg/17_kru4bs.jpg,faces/webp/17_mt99cf.webp',
        'Ahmed S.,Afghanistan,Kabul,34.528455,69.171703,faces/jpg/18_dwytpn.jpg,faces/webp/18_m9ohr0.webp',
        'Acil Victoria L.,Russia,Skt. Petersburg,59.93428,30.335099,faces/jpg/19_e544d6.jpg,faces/webp/19_jmmjpi.webp',
        'Jakub K.,Poland,Grajewo,53.647156,22.455217,faces/jpg/20_oxbr2e.jpg,faces/webp/20_ljse4i.webp',
        'Guido G.,Austria,Ossiach,46.67721,13.984811,faces/jpg/21_v6iusj.jpg,faces/webp/21_ussqbd.webp',
        'Linh M.,Vietnam/Tjekkiet,Hanoi,21.033333,105.85,faces/jpg/22_x8optg.jpg,faces/webp/22_bpivv4.webp',
        'Lucero C.,Perú,Junín,-11.335798,-75.341218,faces/jpg/23_cyzfvr.jpg,faces/webp/23_ft4byk.webp',
        'Federico M.,Germany,Eggenfelden,48.3953,12.76179,faces/jpg/24_x17osm.jpg,faces/webp/24_ibvcp4.webp',
        'KAlina G.,Bulgaria,Haskovo,41.931277,25.557213,faces/jpg/25_ouqjyk.jpg,faces/webp/25_jcjfhn.webp',
        'Rocío L.,Argentina,Buenos Aires,-34.608418,-58.373161,faces/jpg/26_kmxnwt.jpg,faces/webp/26_qx8uj7.webp',
        'Irina R.,Romania,Iași,47.156944,27.590278,faces/jpg/27_lkv1b4.jpg,faces/webp/27_hrp9r6.webp',
        'Mirza G.P.,Bosnia+Herzegovina,Banja Luka,44.766667,17.183333,faces/jpg/28_xp4vab.jpg,faces/webp/28_hkuexk.webp',
        'Martin B.,Argentina,Mendoza,-32.890183,-68.84405,faces/jpg/29_uzoi7c.jpg,faces/webp/29_d9huea.webp',
        'Müge L.H.,Turkey,Izmir,38.41885,27.12872,faces/jpg/30_k0c8ko.jpg,faces/webp/30_drhodp.webp',
        'Sangheeta T.,India,Uttar Pradesh,26.879641,80.56982,faces/jpg/31_uctidw.jpg,faces/webp/31_crw09o.webp',
        'Kaynat K.,Bangladesh,Dhaka,23.709921,90.407143,faces/jpg/32_fachwm.jpg,faces/webp/32_pnovxr.webp',
        'Michael M.,Northern Ireland,Portaferry,54.38885,-5.550706,faces/jpg/33_fa0ayz.jpg,faces/webp/33_adp3if.webp',
        'Ania S.,Poland,Warszawa,52.229676,21.012229,faces/jpg/34_us5s1q.jpg,faces/webp/34_lbczqd.webp',
        'Lauren Marie C.,USA,Orlando / Florida,28.538336,-81.379237,faces/jpg/35_zmnmzb.jpg,faces/webp/35_s8pfww.webp',
        'Lara G.,Italy,Milano,45.465454,9.186516,faces/jpg/36_y3labj.jpg,faces/webp/36_ub15d8.webp',
        'Victória C.L.,Brazil,Belo Horizonte,-19.924502,-43.935238,faces/jpg/37_vuundi.jpg,faces/webp/37_wmxecs.webp',
        'Nuunuu P.,Greenland,Nuuk,64.18362,-51.721407,faces/jpg/38_kofejy.jpg,faces/webp/38_vgl8kk.webp',
        'John J.,USA,Hammond/ Louisiana,30.504358,-90.4612,faces/jpg/39_lxc0p6.jpg,faces/webp/39_ryn9ab.webp',
        'Enida A.,Germany/Bosnia,Frankfurt am Main,50.111445,8.680615,faces/jpg/40_d57eut.jpg,faces/webp/40_uaaxnp.webp',
        'Nikolaj L.K.,Denmark,Odense,55.403756,10.40237,faces/jpg/41_wz03gw.jpg,faces/webp/41_htawvh.webp',
        'Angelina W.D.,Denmark,Odense,55.428283,10.442247,faces/jpg/42_a6nuhy.jpg,faces/webp/42_y6m4kq.webp',
        'Kim K.,Holland,Holten,52.284239,6.426047,faces/jpg/43_tamip3.jpg,faces/webp/43_lssyfo.webp',
      ],
      faces: [],
      face: {},
      isGallery: false,
      showMobileMenu: false,
      showingFace: false,
      zoom: 3,
      center: [27.413220, -1.219482],
      // url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> | &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> | &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    }
  },
  created() {
    this.getFaces()
  },
  methods: {
    async getFaces() {
      const ref = this.$fire.firestore.collection('faces4')
      try {
        const { docs } = await ref.get()
        this.faces = docs.map(doc => {
          const { id } = doc
          const data = doc.data()
          return { id, ...data }
        })
      } catch (error) {
        throw new Error('Cannot load data from database.')
      }
    },
    showFace(face) {
      this.showingFace = true
      this.face = face
    },
    async writeToFirestore() {
      const ref = this.$fire.firestore.collection('faces4')
      try {
        for (const document of this.dataForImport()) {
          await ref.add(document)
        }
      } catch (error) {
        console.error(error)
      }
    },
    dataForImport() {
      const output = []
      for (const element of this.data) {
        const arr = element.split(',')
        const obj = {
          name: arr[0],
          country: arr[1],
          city: arr[2],
          lat: +arr[3],
          lng: +arr[4],
          portrait_jpg: arr[5],
          portrait_webp: arr[6],
          created: this.$fireModule.firestore.Timestamp.fromDate(new Date()),
        }
        output.push(obj)
      }
      return output
    }
  },
}
</script>

<style src="leaflet/dist/leaflet.css"/>
