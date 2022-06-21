"use strict"
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector(".close-modal")
const btnShowModal = document.querySelectorAll(".show-modal")    // Birden fazla show-modal class'ına sahip element olduğu için çoklu seçici kullandım.

// console.log(btnShowModal);  // show-modal class'ına sahip elementleri yukarıda tanımladığım btnShowModal değişkenine atadım ve bunu konsola yazdırdığımda bu class'a sahip tüm elementler dizi şeklinde görüntülenecek.


const closeModal = function (){      // closeModal adında bir fonksiyon tanımlıyorum ve bu fonksiyon aktif olduğunda aşağıdaki kod bloğu içerisindeki koşullar gerçekleşecek. 
modal.classList.add ("hidden")       // Bir elementin birden fazla class'ı varsa  classList -------->  Burdaki gibi modal class'ına sahip elementin closeModal aktif olduğunda tüm class'larından (hidden)'ı ekle diyoruz. 
// Burada classList kullandığım için class ismi için . belirtmeme gerek yok. 
overlay.classList.add("hidden")      //  overlay class'ına sahip elementin closeModal aktif olduğunda tüm class'larından (hidden)'ı ekle diyoruz.
}

const openModal = function (){
    modal.classList.remove ("hidden")
    overlay.classList.remove("hidden")
 // openModal fonksiyonu aktif olduğunda modal ve overlay class'ına sahip elementlerin classList'lerinden hidden'ı kaldır.Yani bu fonksiyon aktif olduğunda artık ilgili kod bloğu gizlenmeyecek.
}

// Şimdi show-modal butonlarına tıkladığımda gizlenen kod bloğunun aktif olmasını istiyorum ve bunun için addeventListener kullanmalıyım.
for(let i = 0; i < btnShowModal.length;i++){            // btnShowModal değişkeninin içinde 3 adet buton olduğu için for döngüsü tanımladım ve bunlar dizi şeklinde görüntülenecek.
btnShowModal[i].addEventListener("click",openModal)      // Burada openModal'dan sonra () kullanmıyorum çünkü kullanırsam her durumda js bu fonksiyonu çağıracak ama ben yalnızca tıkladığımda çağırmasını istiyorum.
    // console.log("Tıklandı");  
    // Bu kod bloğunu yukarıda fonksiyon yazarak sadeleştirdik.Artık openModal fonksiyonunu çağırmam yeterli 
   // btnShowModal.addEventListener("click",function(){
    // modal.classList.remove("hidden")     
    // overlay.classList.remove("hidden")
    // })

}
 // Artık çarpı ile kapatmak ve tekrar açılan pencereyi gizlemek istiyorum.Artık remove değil de add kullanıyorum.Bu yüzden for döngüsü dışında ayrı bir addEventListener ekliyoruz.
 btnCloseModal.addEventListener("click",closeModal)     // Fonksiyonu çağırmıoruz.Tıklama olayı olduğunda fonksiyonun aktif olmasını istediğimiz için () koymadık.
 
 // Aşağıdaki kod bloğunu yukarıda function tanımlayıp sadeleştirdik.
// btnCloseModal.addEventListener("click",function(){
//     modal.classList.add("hidden");        
//     overlay.classList.add("hidden");
// })

// Sadece çarpıya değil boşluğa tıklayınca da pencerenin kapanmasını istiyorum.
overlay.addEventListener("click",closeModal)
// Aşağıdaki kod bloğunu yukarıda function tanımlayıp sadeleştirdik.

// overlay.addEventListener("click",function(){
//     modal.classList.add("hidden");        
//     overlay.classList.add("hidden");
// })

// Klavyeden esc 'ye basarak da sayfayı kapatmak istiyorum.
document.addEventListener("keydown",function(e){             //genelde parametre olarak e kullanılıyor.Eventin e 'si.         // keydown:tuşa basıldığı anda aktif olurken keyup elini çektiğinde
console.log("Tuşa basıldı");      // Klavyeden herhangi bir tuşa basıldığında konsolda görüntülenecek.
console.log(e.key);               // e bir obje olarak dönecek ve bastığım tuş da benim key'im olacak
if(e.key === "Escape" && !modal.classList.contains("hidden")){       // Escape'e basıldıysa kod bloğunu yürüt. VE   // modal değişkeninin classlist'i hidden'ı içeriyor mu ? İçermiyorsa if bloğu altındaki şartları sağlayacak.
    closeModal()
 }
})


