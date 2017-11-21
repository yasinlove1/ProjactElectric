var config = {
    apiKey: "AIzaSyB2_l8HIycLAdM6a9vA9XMaS_VPqxmBK1o",
    authDomain: "datacontro.firebaseapp.com",
    databaseURL: "https://datacontro.firebaseio.com",
    projectId: "datacontro",
    storageBucket: "datacontro.appspot.com",
    messagingSenderId: "585589132177"
};
firebase.initializeApp(config);

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



function name() {

    var button1FB1 = dbFirebase.ref("room1/air");
    button1FB1.on('value', function(snapshot) {
        FBdata11 = snapshot.val();


    });
    return FBdata11;
};


function name1() {
    var FBdata111;
    var button1FB11 = dbFirebase.ref('room1/air2');
    button1FB11.on('value', function(snapshot) {
        FBdata111 = snapshot.val();


    });
    return FBdata111;
};