var dfFirebaseUserR1 = fireBase.ref('room1/Userinroom');
var dfFirebaseAir1R1 = firebase.ref('room1/air');
var dfFirebaseAir2R1 = firebase.ref('room1/air1');
var dfFirebaseUserR2 = firebase.ref('room2/Userinroom');
var dfFirebaseAir1R2 = firebase.ref('room2/air');
var dfFirebaseAir2R2 = firebase.ref('room2/air1');

var UserR1 = dfFirebaseUserR1.on("value",function(snapshot){
document.querySelector("#Light_Row_one").checked = snapshot.val();
$('#Light_Row_one').click(function(){
    dfFirebaseUserR1 = UserR1.set('0'),function(){}




})
});
var UserR2 = dfFirebaseUserR2.on('value',function(snapshot){
document.querySelector('#Light_Row_one1').checked = snapshot.val();
$('#Light_')



}