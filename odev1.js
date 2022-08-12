let arr1 = ['2', 'a', '3', 3, 4, 3, 5, 5]
let arr2 = ['c', 'c', 'h', 1, 1, 1, 4]
let arr3 = [
    { name: 'ali', id: 221 },
    { name: 'veli', id: 343 },
    { name: 'konya', id: 333 },
    { name: 'ali', id: 664 },
    { name: 'selim', id: 112 }
]
let arr4 = [1, 1, 1, 4, 5, 5, 3, 2]

//1- arr1 başına 'a' elemanını ekleyiniz
arr1.unshift('a')
console.log(arr1)

//2- arr1 sonuna 6 elemanını ekleyiniz
arr1.push(6)
console.log(arr1)

//3- arr1 sonundaki elemanı siliniz
arr1.pop()
console.log(arr1)

//4- arr1 başındaki elemanı siliniz
arr1.shift()
console.log(arr1)


//5- arr1 ile arr2 arraylerini iki farklı yöntemle birleştiriniz
let arr5_1 = arr1.concat([arr2])
console.log(arr5_1)
let arr5_2 = [...arr1, ...arr2]
console.log(arr5_2)


//6
let functions = (arr, el) => {
    return arr.includes(el)}
    console.log(functions(arr2, 'h'))


//7- arr2 içindeki 'h' elemanın indexsini bulunuz
console.log(arr2.indexOf('h'))


//8- arr2 nin eleman sayısını 3 adete 2 faklı yöntemle düşrünüz
let slices = arr2.slice(0,3)
console.log(slices)
let splices = arr2.splice(0,4)
console.log(splices)



//9
function numberSum(arr1){
    var sum=0;
    for(let i=0;i<arr1.length;i++)
    {
        if(typeof arr1[i]=='number')
        {
            sum+=arr1[i]
        }
    }
    return sum
}
console.log(numberSum(arr1))

//10- arr1 elemanlarını string değere çeviren bir map fonksiyonu yazınız    
let strAll = arr1.map((el) => el.toString())
console.log(strAll)

//11- arr3 içindeki id değeri 221 olan elemanı bulunuz
let finds = arr3.find(el => el.id==221)
console.log(finds)

//12- arr3 içindeki user değerleri ali olan elemanları bulunuz
let filters = arr3.filter(el => el.name=='ali')
console.log(filters)

//13- arr3 içindeki elemanlarının id değerlerinin toplamlarını bulan bir reduce fonsiyonu yazınız
let sumId = arr3.reduce((ell,item) => ell+item.id,0)
console.log(sumId)

/* 
1- arr1 başına 'a' elemanını ekleyiniz
2- arr1 sonuna 6 elemanını ekleyiniz
3- arr1 sonundaki elemanı siliniz
4- arr1 başındaki elemanı siliniz
5- arr1 ile arr2 arraylerini iki farklı yöntemle birleştiriniz
6- kendisine gönderilen arrayde verilen elemanın olup olmadığını bulan array ve 
    aranan eleman olmak üzere iki parametre alan ve geriye boolean değer döndüren bir fonksiyon yazınız
    ve bu fonkisiyona arr2 ve 'h' parametresini verip çağırınız
7- arr2 içindeki 'h' elemanın indexsini bulunuz
8- arr2 nin eleman sayısını 3 adete 2 faklı yöntemle düşrünüz
9- kendisine verilecek array elemanlarını döngü ile dönüp, array içindeki number
    değerlerinin toplamını geriye dönen bir fonkiyon yazınız ve arr1 değeri ile çağırınız   
10- arr1 elemanlarını string değere çeviren bir map fonksiyonu yazınız    
11- arr3 içindeki id değeri 221 olan elemanı bulunuz
12- arr3 içindeki user değerleri ali olan elemanları bulunuz
13- arr3 içindeki elemanlarının id değerlerinin toplamlarını bulan bir reduce fonsiyonu yazınız

her sorunun cevabını console.log ile yazıdırın
*/