
const rənglər = ['qırmızı', 'yaşıl', 'göy', 'sarı', 'bənövşəyi', 'narıncı'];

setInterval(() => {
  const gün = new Date().getDate();
  const saat = new Date().getHours();
  const dəqiqə = new Date().getMinutes();
  const saniyə = new Date().getSeconds();
  const təsadüfiRəng = rənglər[Math.floor(Math.random() * rənglər.length)];

  console.log(`%c${gün} gün ${saat} saat ${dəqiqə} dəqiqə ${saniyə} saniyə`, `color: ${təsadüfiRəng}`);
}, 1000);


//2. Tələbələr datasında axtarış etmək üçün:

javascript
const tələbələr = [
  { ad: 'John', yaş: 20 },
  { ad: 'Jane', yaş: 22 },
  { ad: 'Bob', yaş: 19 },
];

const prompt2 = require('prompt2-sync')();
const axtarılanAd = prompt2('Tələbənin adını daxil edin: ');

const tapılanTələbə = tələbələr.find(tələbə => tələbə.ad.toLowerCase() === axtarılanAd.toLowerCase());

if (tapılanTələbə) {
  console.log(`Tapılan tələbə: ${tapılanTələbə.ad}, Yaşı: ${tapılanTələbə.yaş}`);
} else {
  console.log('Tələbə tapılmadı.');
}


//3. Prompt ilə daxil olunan hər sözün aşağıdakı kimi ekrana çıxması üçün:

const prompt = require('prompt-sync')();
const söz = prompt('Sözü daxil edin: ');

for (let i = 0; i <= söz.length; i++) {
  console.log(söz.slice(0, i));
}

for (let i = söz.length - 1; i >= 0; i--) {
  console.log(söz.slice(0, i));
}


//4. toLocaleDateString() metodu, tarixi lokalə uyğun formatda göstərir. Bu metod aşağıdakı formatları dəstəkləyir:

// - toLocaleDateString(): Tarixi tam formatda göstərir. Məsələn: "2.04.2024".
// - toLocaleDateString('en-US'): Tarixi İngilis dilinə uyğun formatda göstərir.
// - toLocaleDateString('az-AZ'): Tarixi Azərbaycan dilinə uyğun formatda göstərir.

//Həmçinin, bu metoda bir çox parametrlər göndərmək olar ki, tarixi istədiyimiz formatda göstərə bilək. Məsələn:

const tarix = new Date();
console.log(tarix.toLocaleDateString('az-AZ', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
// Nəticə: "Çərşənbə, 2 Aprel 2024"