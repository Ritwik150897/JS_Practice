var data = 200;//  => Gloabal variable  
function a() {
    console.log(data + " Is a Global Variable");
}
function b() {
    var data = 100; // => Local Veriable
    console.log(data + " Is a Loacal Variable");
}
a();
b();