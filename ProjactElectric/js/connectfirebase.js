var config = {
    apiKey: "AIzaSyB2_l8HIycLAdM6a9vA9XMaS_VPqxmBK1o",
    authDomain: "datacontro.firebaseapp.com",
    databaseURL: "https://datacontro.firebaseio.com",
    projectId: "datacontro",
    storageBucket: "datacontro.appspot.com",
    messagingSenderId: "585589132177"
};
firebase.initializeApp(config);
// โชว์ เช็คสถานะ แล้วเปลี่ยนสี//
var dbFirebase = firebase.database();
var dbRef = firebase.database().ref()
var firebaseAuth = firebase.auth

var numLEDR1 = dbFirebase.ref('room1/UserinRoom');
var numLEDR1s = numLEDR1.on('value', function(snapshot) {

    var snapLEDR1 = snapshot.val();
    var num = 0;
    var LED;
    if (snapLEDR1 == num) {
        $("#btn-LED-R1").addClass('btn-off');
        $("#btn-LED-R1").removeClass('btn-on');

    } else {
        $("#btn-LED-R1").addClass('btn-on');
        $("#btn-LED-R1").removeClass('btn-off');

    }
    console.log('R1S101_LED:' + snapLEDR1)
    $('#userinRoomS101').text(snapLEDR1);
});
var numAIR0R1 = dbFirebase.ref('room1/air');
var numAIR0R1s = numAIR0R1.on('value', function(snapshot) {
    var snapAIR0R1 = snapshot.val();

    var num = 0
    var AIR;
    if (snapAIR0R1 == num) {
        $("#btn-AIR1-R1").addClass('btn-off');
        $("#btn-AIR1-R1").removeClass('btn-on');
    } else {
        $("#btn-AIR1-R1").addClass('btn-on');
        $("#btn-AIR1-R1").removeClass('btn-off');
    }
    console.log('R1S101_AIR1:' + snapAIR0R1)
});

var numAIR1R1 = dbFirebase.ref('room1/air1');
var numAIR1R1s = numAIR1R1.on('value', function(snapshot) {
    var snapAIR1R1 = snapshot.val();
    var num = 0
    var AIR;
    if (snapAIR1R1 == num) {
        $("#btn-AIR2-R1").addClass('btn-off');
        $("#btn-AIR2-R1").removeClass('btn-on');
    } else {
        $("#btn-AIR2-R1").addClass('btn-on');
        $("#btn-AIR2-R1").removeClass('btn-off');
    }
    console.log('R1S101_AIR2:' + snapAIR1R1)
});

var numLEDR2 = dbFirebase.ref('room2/UserinRoom');
var numLEDR2s = numLEDR2.on('value', function(snapshot) {

    var snapLEDR2 = snapshot.val();
    var num = 0
    var LED;
    if (snapLEDR2 == num) {
        $("#btn-LED-R2").addClass('btn-off');
        $("#btn-LED-R2").removeClass('btn-on');
    } else {
        $("#btn-LED-R2").addClass('btn-on');
        $("#btn-LED-R2").removeClass('btn-off');
    }
    console.log('R2S102_LED:' + snapLEDR2)
    $('#userinRoomS102').text(snapLEDR2);
});
var numAIR0R2 = dbFirebase.ref("room2/air");
var numAIR0R2s = numAIR0R2.on('value', function(snapshot) {
    var snapAIR0R2 = snapshot.val();
    var num = 0
    var AIR;
    if (snapAIR0R2 == num) {
        $("#btn-AIR1-R2").addClass('btn-off');
        $("#btn-AIR1-R2").removeClass('btn-on');
    } else {
        $("#btn-AIR1-R2").addClass('btn-on');
        $("#btn-AIR1-R2").removeClass('btn-off');
    }
    console.log('R1S102_AIR1:' + snapAIR0R2)
});

var numAIR1R2 = dbFirebase.ref('room2/air1');
var numAIR1R2s = numAIR1R2.on('value', function(snapshot) {
    var snapAIR1R2 = snapshot.val();
    var num = 0
    var AIR;
    if (snapAIR1R2 == num) {
        $("#btn-AIR2-R2").addClass('btn-off');
        $("#btn-AIR2-R2").removeClass('btn-on');
    } else {
        $("#btn-AIR2-R2").addClass('btn-on');
        $("#btn-AIR2-R2").removeClass('btn-off');
    }
    console.log('R1S102_AiR2:' + snapAIR1R2)
});

//กดปิด/เปิด
var numPerple1 = dbFirebase.ref("room1/UserinRoom");
var numPerples1 = numPerple1.on("value", function(snapshot) {
    document.querySelector("#Light_Row_one > input").checked = snapshot.val();
    
    $('#Light_Row_one').click(function() {
        numPerples1 = numPerple1.set('0', function() {
        
})
});

});

var numPerple2 = dbFirebase.ref("room2/UserinRoom");
var numPerples2 = numPerple2.on("value", function(snapshot) {
    document.querySelector("#Light_Row_one1 > input").checked = snapshot.val();
   
    $('#Light_Row_one1').click(function() {
        numPerples2 = numPerple2.set('0', function() {
    
        
        
        })
    })

});


var btnAirS101 = dbFirebase.ref("room1/Air");
var btnAirS101s = btnLightS101.on("value",function(snapshot){
    document.querySelector("#AirOneR1R1 > input").checked = snapshot.val();
    $('#AirOneR1R1').click(function(){
        btnLightS101s = btnLightS101.set('0',function(){

        })
    })

});

var btnAir1S101 = dbFirebase.ref("room1/Air1");
var btnAir1S101s = btnLight1S101.on("value",function(snapshot){
    document.querySelector("#AirOne2R1 > input").checked = snapshot.val();
    $('#AirOne2R1').click(function(){
        btnLight1S101s = btnLight1S101.set('0',function(){

        })
    })
});
var btnAirS102 = dbFirebase.ref("room2/Air");
var btnAirS102s = btnAirS102.on("value",function(snapshot){
    document.querySelector("#AirOneR2 > input").checked = snapshot.val();
    $('#AirOneR2').click(function(){
        btnLightS101s = btnLightS101.set('0',function(){

        })
    })

});
var btnAir1S102 = dbFirebase.ref("room2/Air1");
var btnAir1S102s = btnAir1S102.on("value",function(snapshot){
    document.querySelector("#AirOneR2 > input").checked = snapshot.val();
    $('#AirOneR2').click(function(){
        btnAir1S102s = btnAir1S102.set('0',function(){

        })
    })

});