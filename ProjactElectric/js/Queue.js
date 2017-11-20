var queu = [];

function addArr(num) {
    // var status = true;

    if (queu.length < 2) {

        queu.push(num)

    } if (queu.length == 2) {

        outQueue()

    }

    console.log(queu)
    console.log(queu.length)
}

function outQueue() {

    var upToFirebaseRoom1Air2 = dbFirebase.ref("room1/air1")
    var upToFirebaseRoom1Air1 = dbFirebase.ref("room1/air")
    var upToFirebaseRoom2Air1 = dbFirebase.ref("room2/air")
    var upToFirebaseRoom2Air2 = dbFirebase.ref("room2/air1")

    setInterval(() => {
        var dataOutQueue = queu.shift()
        if (dataOutQueue == 1) {
            upToFirebaseRoom1Air1.set(dataOutQueue)
        } else if (dataOutQueue == 2) {
            upToFirebaseRoom1Air2.set(dataOutQueue)
        } else if (dataOutQueue == 3) {
            upToFirebaseRoom2Air1.set(dataOutQueue)
        } else if (dataOutQueue == 4) {
            upToFirebaseRoom2Air2.set(dataOutQueue)
        }

        console.log(dataOutQueue)
    }, 5000)
}
var numPerple1 = dbFirebase.ref("room1/UserinRoom");
var numPerples = numPerple1.on("value", function (snapshot) {
    document.querySelector("#Light_Row_one > input").checked = snapshot.val();
    $('#Light_Row_one').click(function () {
        numPerples = numPerple1.set('0', function () {

        })
    })

});

var numAIR0R2 = dbFirebase.ref('room1/air');
var numAIR0R2s = numAIR0R2.on('value', function (snapshot) {
    var snapAIR0R2 = snapshot.val();
    var num = 0
    var AIR;
    if (snapAIR0R2 == num) {
        document.querySelector("#Airone1R1 > input").checked = false
    } else {
        document.querySelector("#Airone1R1 > input").checked = true
    }
});

var numAIR1R2 = dbFirebase.ref('room1/air1');
var numAIR1R2s = numAIR1R2.on('value', function (snapshot) {
    var snapAIR1R2 = snapshot.val();
    var num = 0
    var AIR;
    if (snapAIR1R2 == num) {
        document.querySelector("#Airone2R1 > input").checked = false
    } else {
        document.querySelector("#Airone2R1 > input").checked = true
    }
});
var numLEDR2 = dbFirebase.ref('room2/UserinRoom');
var numLEDR2s = numLEDR2.on('value', function (snapshot) {

    var snapLEDR2 = snapshot.val();
    var num = 0;
    var LED
    if (snapLEDR2 == num) {
        $("#btn-LED-R2").addClass('btn-off');
        $("#btn-LED-R2").removeClass('btn-on');

    } else {
        $("#btn-LED-R2").addClass('btn-on');
        $("#btn-LED-R2").removeClass('btn-off');

    }
    console.log('R1S102_LED:' + snapLEDR2)
    $('#userinRoomS102').text(snapLEDR2);
});

var numAIR0R2 = dbFirebase.ref('room2/air');
var numAIR0R2s = numAIR0R2.on('value', function (snapshot) {
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
var numAIR1R2s = numAIR1R2.on('value', function (snapshot) {
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
    console.log('R1S102_AIR2:' + snapAIR1R2)
});

