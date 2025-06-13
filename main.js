let category=document.getElementById('category') 
let parent=document.getElementById('items')
let scrollVal=400
if(window.innerHeight > 700){
    scrollVal=550
    
}

document.onscroll= (e)=>{
    let section=document.querySelectorAll('section')
    let activeClass=document.querySelectorAll('.active')
    if(scrollY > scrollVal){
        category.classList.add('fix')
    }
    if(scrollY<=scrollVal){
        category.classList.remove('fix')
    }
    section.forEach((sec)=>{

        let top=window.scrollY
        let height=sec.offsetHeight
        let offset=sec.offsetTop
        if(top>= offset-150&& top < height + offset){
    
            activeClass[0].classList.remove('active')
            let id=sec.id.toUpperCase()
            let el=document.getElementById(id)
            el.scrollIntoView({behavior:"smooth",inline:"center"})
            el.classList.add('active')
        }
    })

}
let url="https://res.cloudinary.com/dcmoaqi3c/image/upload/c_pad,b_gen_fill,w_500,h_500"
const items=[
    {
        nameAr:"شوربة نودلز الدجاج",
        name:"Chicken Noodles Soup",
        img:`${url}/chicken_noodle_soup.jpg`,
        kcal:"36 Calories",
        prize:"14",
        cat:"soups"
    },
    {
        nameAr:"كريمة شوربة الدجاج",
        name:"Cream of Chicken",
        img:`${url}/cream_of_chicken.jpg`,
        kcal:"120 Calories",
        prize:"12"
    },
    {
        nameAr:"شوربة المأكولات البحرية",
        name:"Sea food Soup",
        img:`${url}/sea_food.jpg`,
        kcal:"156 Calories",
        prize:"14"
    },
    {
        nameAr:"حساء الروبيان الصافي",
        name:"Prawns Clear Soup",
        img:`${url}/prawns_clear_soup.jpg`,
        kcal:"100 Calories",
        prize:"14"
    },
    {
        nameAr:"شوربة دجاج حارة وحامضة",
        name:"Hot & sour Chicken",
        img:`${url}/Hot_sour.png`,
        kcal:"160 Calories",
        prize:"12"
    },
    {
        nameAr:"شوربة الخضار الحارة والحامضة",
        name:"Hot & Veg sour soup",
        img:`${url}/hot_sour_veg.jpg`,
        kcal:"160 Calories",
        prize:"11"
    },
    {
        nameAr:"دجاج 65",
        name:"Chicken 65",
        img:`${url}/chicken_65.jpg`,
        kcal:"230 Calories",
        prize:"17",
        cat:'starters'
    },
    {
        nameAr:"نصف دجاج مقلي",
        name:"Chicken Fry Half",
        img:`${url}/chicken_fry.jpg`,
        kcal:"230 Calories",
        prize:"17"
    },
    {
        nameAr:"دراجون تشيكن فراي",
        name:"Dragon Chicken Fry",
        img:`${url}/dragon_chicken_fry.jpg`,
        kcal:"240 Calories",
        prize:"19"
    },
    {
        nameAr:"جوبي منشوريا",
        name:"Gobi Manchurian",
        img:`${url}/gobi_manchurian.jpg`,
        kcal:"175 Calories",
        prize:"15"
    },
    {
        nameAr:"جوبي 65",
        name:"Gobi 65",
        img:`${url}/gobi_65.jpg`,
        kcal:"270 Calories",
        prize:"14"
    },
    {
        nameAr:"أصابع السمك المجففة",
        name:"Fish Finger Dry",
        img:`${url}/fish_finger_dry.jpg`,
        kcal:"100 Calories",
        prize:"18"
    },
    {
        nameAr:"دجاج نوابي",
        name:"Chicken Nawabi",
        img:`${url}/chicken_nawabi.jpg`,
        kcal:"100 Calories",
        prize:"18"
    },
    {
        nameAr:"دجاج شيتيناد",
        name:"Chicken Chettinad",
        img:`${url}/chicken_chettinad.jpg`,
        kcal:"250 Calories",
        prize:"17"
    },
    {
        nameAr:"مصاصة دجاج",
        name:"Chicken Lollipop",
        img:`${url}/chicken_lollipop.jpg`,
        kcal:"226 Calories",
        prize:"18"
    },
    {
        nameAr:"دجاج مقلي جاف",
        name:"Chicken Dry Fry Fass",
        img:`${url}/chicken_dry_fry.jpg`,
        kcal:"377 Calories",
        prize:"24"
    },
    {
        nameAr:"دجاج مانشوريان",
        name:"Chicken Manchurian",
        img:`${url}/chicken_manchurian.jpg`,
        kcal:"230 Calories",
        prize:"17"
    },
    {
        nameAr:"دجاج مقلي كامل",
        name:"Kozhi Porichath Full",
        img:`${url}/Kozhi_porichathu.jpg`,
        kcal:"377 Calories",
        prize:"40"
    },
    {
        nameAr:"دجاج نافراتان",
        name:"Chicken Navratan",
        img:`${url}/chicken_navaratan.jpg`,
        kcal:"377 Calories",
        prize:"18"
    },
    {
        nameAr:"الفحام",
        name:"Al Faham",
        img:`${url}/al_faham.jpg`,
        kcal:"397 Calories",
        prize:"17",
        cat:"thandoori"
    },
    {
        nameAr:"نصف كباب مشوي",
        name:"Barbeque Kabab Half",
        img:`${url}/barbeque_kabab_half.jpg`,
        kcal:"400 Calories",
        prize:"18",
        
    },
    {
        nameAr:"بانير تيكا",
        name:"Paneer tikka",
        img:`${url}/paneer_tikka.jpg`,
        kcal:"278 Calories",
        prize:"19",
        
    },
    {
        nameAr:"زريعة السمان",
        name:"Kaada Fry",
        img:`${url}/kaada_fry.jpg`,
        kcal:"120 Calories",
        prize:"18",
        
    },
    {
        nameAr:"كباب أفغاني",
        name:"Afgani Kabab",
        img:`${url}/afgani_kabab.jpg`,
        kcal:"201 Calories",
        prize:"19",
        
    },
    {
        nameAr:"دجاج تيكا",
        name:"Chicken Tikka",
        img:`${url}/chicken_tikka.jpg`,
        kcal:"150 Calories",
        prize:"19",
        
    },
    {
        nameAr:"طبق مشويات مشكل كامل",
        name:"Mixed Grill Platter Full",
        img:`${url}/mixed_grill_platter_full.jpg`,
        kcal:"450 Calories",
        prize:"35",
        
    },
    {
        nameAr:"بيري بيري الفحم",
        name:"Peri Peri Al Fahm",
        img:`${url}/peri_peri_al_faham.jpg`,
        kcal:"287 Calories",
        prize:"20",
        
    },
    {
        nameAr:"سمك التندوري",
        name:"Thandoori Fish",
        img:`${url}/thandoori_fish.jpg`,
        kcal:"198 Calories",
        prize:"28",
        
    },
    {
        nameAr:"نصف دجاجة تندوري",
        name:"Thandoori Chicken Half",
        img:`${url}/thandoori_chicken_half.jpg`,
        kcal:"390 Calories",
        prize:"18",
        
    },
    {
        nameAr:"دجاج بارد وجاف",
        name:"Chicken Chilly Dry",
        img:`${url}/chicken_chilly_dry.jpg`,
        kcal:"277 Calories",
        prize:"18",
        cat:"chinese"
        
    },
    {
        nameAr:"مرق الدجاج الحار",
        name:"Chicken Chilly Gravy",
        img:`${url}/chicken_chilly_gravy.jpg`,
        kcal:"277 Calories",
        prize:"18",
        
    },
    {
        nameAr:"دجاج بالثوم الجاف",
        name:"Garlic Chicken Dry",
        img:`${url}/garlic_chicken_dry.jpg`,
        kcal:"136 Calories",
        prize:"17",
        
    },
    {
        nameAr:"دجاج مانشوريان",
        name:"Chicken Manchurian",
        img:`${url}/chicken_manchurian.jpg`,
        kcal:"230 Calories",
        prize:"17"
    },
    {
        nameAr:"دجاج شيزوان",
        name:"Chicken Schezwan",
        img:`${url}/chicken_schenzwan.jpg`,
        kcal:"111 Calories",
        prize:"20",
        
    },
    {
        nameAr:"سمكة منشوريا",
        name:"Fish Manchurian",
        img:`${url}/fish_manchurian.jpg`,
        kcal:"205 Calories",
        prize:"20",
        
    },
    {
        nameAr:"دجاج بالزبدة ماسالا",
        name:"Butter Chicken Masala",
        img:`${url}/butter_chicken_masala.jpg`,
        kcal:"350 Calories",
        prize:"18",
        cat:"main dishes"
    },
    {
        nameAr:"دجاج حيدر آبادي",
        name:"Chicken Hyderabadi",
        img:`${url}/chicken_hyderabadi.jpg`,
        kcal:"216 Calories",
        prize:"18",
    },
    {
        nameAr:"دجاجة وحيدة",
        name:"Chicken Kadai",
        img:`${url}/chicken_kadai.jpg`,
        kcal:"243 Calories",
        prize:"17",
    },
    {
        nameAr:"دجاج نظامي",
        name:"Chicken Nizami",
        img:`${url}/chicken_nizami.jpg`,
        kcal:"251 Calories",
        prize:"18",
    },
    {
        nameAr:"دجاج كولابوري",
        name:"Chicken Kolapuri",
        img:`${url}/chicken_kolapuri.jpg`,
        kcal:"217 Calories",
        prize:"18",
    },
    {
        nameAr:"دجاج كورما",
        name:"Chicken Kuruma",
        img:`${url}/chicken_kuruma.jpg`,
        kcal:"240 Calories",
        prize:"17",
    },
    {
        nameAr:"دجاج بالزبدة ماسالا",
        name:"Chicken Masala",
        img:`${url}/chicken_masala.jpg`,
        kcal:"200 Calories",
        prize:"16",
    },
    {
        nameAr:"كورما جبل الدجاج",
        name:"Chicken Malai Kuruma",
        img:`${url}/chicken_malai_kuruma.jpg`,
        kcal:"392 Calories",
        prize:"19",
    },
    {
        nameAr:"دجاج بالفلفل ماسالا",
        name:"Chicken Pepper Masala",
        img:`${url}/chicken_pepper_masala.png`,
        kcal:"215 Calories",
        prize:"18",
    },
    {
        nameAr:"دجاج تيكا ماسالا",
        name:"Chicken Tikka Masala",
        img:`${url}/chicken_tikka_masala.jpg`,
        kcal:"189 Calories",
        prize:"18",
    },
    {
        nameAr:"دجاج تشيتينادو",
        name:"Chicken Chettinad",
        img:`${url}/chicken_chettinad.jpg`,
        kcal:"300 Calories",
        prize:"17",
    },
    {
        nameAr:"نافراتان دجاج كورما",
        name:"Navratan Chicken Kuruma",
        img:`${url}/navratan_chicken_kuruma.jpg`,
        kcal:"150 Calories",
        prize:"20",
    },
    {
        nameAr:"بانير تشيلي",
        name:"Paneer Chilli",
        img:`${url}/paneer_chilly.jpg`,
        kcal:"387 Calories",
        prize:"18"
    },
    {
        nameAr:"روبيان منشوريا",
        name:"Prawns Manchurian",
        img:`${url}/prawns_manchurian.jpg`,
        kcal:"320 Calories",
        prize:"20",
    },
    {
        nameAr:"ألو غوبي ماسالا",
        name:"Aloo Gobi Masala",
        img:`${url}/aloo_gobi_masala.jpg`,
        kcal:"108 Calories",
        prize:"14",
    },
    {
        nameAr:"بانير مانشوريان",
        name:"Paneer Manchurian",
        img:`${url}/paneer_manchurian.jpg`,
        kcal:"485 Calories",
        prize:"18",
    },
    {
        nameAr:"لحم ضأن حيدر آباد",
        name:"Mutton Hyderabadi",
        img:`${url}/mutton_hyderabadi.jpg`,
        kcal:"470 Calories",
        prize:"19",
    },
    {
        nameAr:"لحم ضأن حيدر آباد",
        name:"Mutton Kadai",
        img:`${url}/mutton_kadai.jpg`,
        kcal:"438 Calories",
        prize:"19",
    },
    {
        nameAr:"لحم الضأن كولابوري",
        name:"Mutton Kolhapuri",
        img:`${url}/mutton_kolapuri.jpg`,
        kcal:"270 Calories",
        prize:"20",
    },
    {
        nameAr:"لحم الضأن ماسالا",
        name:"Mutton Masala",
        img:`${url}/mutton_masala.jpg`,
        kcal:"441 Calories",
        prize:"18",
    },
    {
        nameAr:"نظامي لحم الضأن",
        name:"Mutton Nizami",
        img:`${url}/mutton_nizami.jpg`,
        kcal:"400 Calories",
        prize:"20",
    },
    {
        nameAr:"لحم الضأن روغان جوش",
        name:"Mutton Rogan Josh",
        img:`${url}/mutton_rogan_josh.jpg`,
        kcal:"239 Calories",
        prize:"20",
    },
    {
        nameAr:"ماسالا لحم الضأن التقليدي",
        name:"Mutton Naadan Masala",
        img:`${url}/mutton_naadan_masala.jpg`,
        kcal:"400 Calories",
        prize:"19",
    },
    {
        nameAr:"لحم الضأن كورما",
        name:"Mutton Kuruma",
        img:`${url}/mutton_kurma.jpg`,
        kcal:"260 Calories",
        prize:"19",
    },
    {
        nameAr:"فاروثاراتشاتو لحم الضأن",
        name:"Mutton Varutharachathu",
        img:`${url}/mutton_varutharachathu.jpg`,
        kcal:"350 Calories",
        prize:"19",
    },
    {
        nameAr:"لحم الضأن المشوي",
        name:"Mutton Roast",
        img:`${url}/mutton_roast.jpg`,
        kcal:"400 Calories",
        prize:"19",
    },
    {
        nameAr:"نصف لحم بقري بالفلفل الحار",
        name:"Beef Chilli Half",
        img:`${url}/beef_chilly_half.jpg`,
        kcal:"200 Calories",
        prize:"17",
    },
    {
        nameAr:"لحم بقري ماسالا",
        name:"Beef Masala",
        img:`${url}/beef_masala.jpg`,
        kcal:"372 Calories",
        prize:"18",
    },
    {
        nameAr:"كاري لحم البقر",
        name:"Beef Curry",
        img:`${url}/beef_curry.jpg`,
        kcal:"254 Calories",
        prize:"11",
    },
    {
        nameAr:"لحم بقري كاداي",
        name:"Beef Kadai",
        img:`${url}/beef_kadai.jpg`,
        kcal:"266 Calories",
        prize:"19",
    },
    {
        nameAr:"بيضة كيزهي بوروتا",
        name:"Kizhi Porotta Egg",
        img:`${url}/kizhi_porotta_egg.jpg`,
        kcal:"375 Calories",
        prize:"23",
    },
    {
        nameAr:"لحم كيزهي بوروتا",
        name:"Kizhi Porotta Beef",
        img:`${url}/kizhi_porotta_beef.jpg`,
        kcal:"400 Calories",
        prize:"34",
    },
    {
        nameAr:"لحم كوثو بوروتا",
        name:"Kothu Porotta(Beef)",
        img:`${url}/kothu_porotta_beef.jpg`,
        kcal:"350 Calories",
        prize:"18",
    },
    {
        nameAr:"دجاج كوثو بوروتا",
        name:"Kothu Porotta(Chicken)",
        img:`${url}/kothu_porotta_chicken.jpg`,
        kcal:"322 Calories",
        prize:"14",
    },
    {
        nameAr:"كاري الدجاج التقليدي",
        name:"Chicken Nadan Curry",
        img:`${url}/chicken_naadan_curry.jpg`,
        kcal:"319 Calories",
        prize:"18",
    },
    {
        nameAr:"دجاج فاروثاراتشاتو",
        name:"Chicken Varutharachathu",
        img:`${url}/chicken_varutharachathu.jpg`,
        kcal:"319 Calories",
        prize:"17",
    },
    {
        nameAr:"ماباس الدجاج",
        name:"Chicken Mappas",
        img:`${url}/chicken_mappas.jpg`,
        kcal:"250 Calories",
        prize:"17",
    },
    {
        nameAr:"دجاج تشابس",
        name:"Chicken Chaps",
        img:`${url}/chicken_chaps.jpg`,
        kcal:"350 Calories",
        prize:"18",
    },
    {
        nameAr:"دجاج كورما",
        name:"Chicken Kuruma",
        img:`${url}/chicken_kuruma.jpg`,
        kcal:"240 Calories",
        prize:"18",
    },
    {
        nameAr:"دجاج مقلي تقليدي (زيت جوز الهند)",
        name:"Chicken Naadan Fry,(Coconut Oil)",
        img:`${url}/chicken_fry.jpg`,
        kcal:"400 Calories",
        prize:"24",
    },
    {
        nameAr:"لحم بقري مقلي (كبير)",
        name:"Beef Fry(Large)",
        img:`${url}/beef_fry_large.jpg`,
        kcal:"483 Calories",
        prize:"19",
    },
    {
        nameAr:"لحم بقري مشوي (كبير)",
        name:"Beef Roast(Large)",
        img:`${url}/beef_roast_large.jpg`,
        kcal:"483 Calories",
        prize:"18",
    },
    {
        nameAr:"لحم البقر ماسالا التقليدي",
        name:"Beef Naadan Masala",
        img:`${url}/beef_naadan_masala.jpg`,
        kcal:"480 Calories",
        prize:"18",
    },
    {
        nameAr:"فاروثاراتشاتو لحم البقر",
        name:"Beef Varutharachathu",
        img:`${url}/beef_varutharachathu.jpg`,
        kcal:"480 Calories",
        prize:"18",
    },
    {
        nameAr:"كورما لحم البقر",
        name:"Beef Kuruma",
        img:`${url}/beef_kurma.jpg`,
        kcal:"420 Calories",
        prize:"18",
    },
    {
        nameAr:"لحم البقر تشابس",
        name:"Beef Chaps",
        img:`${url}/beef_chaps.jpg`,
        kcal:"300 Calories",
        prize:"19",
    },
    {
        nameAr:"سمك ماسالا",
        name:"Fish Masala",
        img:`${url}/fish_masala.jpg`,
        kcal:"56 Calories",
        prize:"17",
    },
    {
        nameAr:"سمك مشوي",
        name:"Fish Pollichathu",
        img:`${url}/fish_pollichath.jpg`,
        kcal:"500 Calories",
        prize:"40",
    },
    {
        nameAr:"سمكة مولي",
        name:"Fish Molly",
        img:`${url}/fish_molly.jpg`,
        kcal:"175 Calories",
        prize:"19",
    },
    {
        nameAr:"خرائط الأسماك",
        name:"Fish Mappas",
        img:`${url}/fish_mappas.jpg`,
        kcal:"300 Calories",
        prize:"19",
    },
    {
        nameAr:"كاري سمك ترافنكور",
        name:"Travancore Fish Curry",
        img:`${url}/travancore_fish_curry.jpg`,
        kcal:"150 Calories",
        prize:"20",
    },
    {
        nameAr:"سمك ماسالا (خاص)",
        name:"Fish Masala(Special)",
        img:`${url}/fish_masala_special.jpg`,
        kcal:"225 Calories",
        prize:"19",
    },
    {
        nameAr:"كاري السمك والمانجو",
        name:"Fish Mango Curry",
        img:`${url}/fish_mango_curry.jpg`,
        kcal:"180 Calories",
        prize:"20",
    },
    {
        nameAr:"سمكة فاتيتشاتو",
        name:"Fish Vattichathu",
        img:`${url}/fish_vattichath.jpg`,
        kcal:"256 Calories",
        prize:"20",
    },
    {
        nameAr:"الروبيان المشوي",
        name:"Prawns Roast",
        img:`${url}/prawns_roast.jpg`,
        kcal:"158 Calories",
        prize:"20",
    },
    {
        nameAr:"سمك مقلي (سمك ملكي)",
        name:"Fish Fry(King Fish)",
        img:`${url}/fish_fry_kig_fish.jpg`,
        kcal:"105 Calories",
        prize:"16",
    },
    {
        nameAr:"فيناد بال كونجو",
        name:"Venad Paal Konju",
        img:`${url}/veenad_pal_konj.jpg`,
        kcal:"313 Calories",
        prize:"24",
    },
    {
        nameAr:"أيالا مولاكيتاثو",
        name:"Ayala Mulakittathu",
        img:`${url}/ayala_mulakittathu.jpg`,
        kcal:"307 Calories",
        prize:"14",
    },
]

var sec
var riyal=`<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39">
  <defs>
    <style>
      .cls-1 {
        fill: #fff;
       
      }
    </style>
  </defs>
  <path class="cls-1" d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"/>
  <path class="cls-1" d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"/>
</svg>`
items.map((item)=>{
    if(item.cat){
        let category=document.createElement('h4')
        category.innerHTML=item.cat.toUpperCase()
        parent.append(category)
        sec=document.createElement('section')
        sec.id=item.cat

    }
    let div=document.createElement('div')
    let img=document.createElement('img')
    img.src=item.img
    let h3=document.createElement('h3')
    h3.innerHTML=item.nameAr
    let p=document.createElement('p')
    p.innerHTML=item.name
    let valDiv=document.createElement('div')
    valDiv.classList.add('values')
    let h6=document.createElement('h6')
    h6.innerHTML=item.kcal
    let h5=document.createElement('h5')
    h5.innerHTML=riyal+item.prize
    valDiv.append(h6)
    valDiv.append(h5)
    div.append(img)
    div.append(h3)
    div.append(p)
    div.append(valDiv)
    sec.append(div)
    parent.append(sec)
})
