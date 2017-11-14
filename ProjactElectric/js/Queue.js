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