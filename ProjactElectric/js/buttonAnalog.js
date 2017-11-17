function name() {

    var upToFirebaseRoom1Air1 = dbFirebase.ref("room1/air")
    upToFirebaseRoom1Air1.on('value', function(snapshot) {
        Room1Air1 = snapshot.val();



    });

    return Room1Air1
}


function dataFromFB(para) {





    if (para == 1) {
        var button1FB = dbFirebase.ref("room1/button");
        button1FB.on('value', function(snapshot) {
            FBdata = snapshot.val();

            if (FBdata == 1 || para == 1) {
                addArr(1)
            } else if (FBdata == 1 && name() == 1) {

                upToFirebaseRoom1Air1.set(0)
            }
        });
    } else if (para == 2) {
        var button2FB = dbFirebase.ref("room1/button2");
        button2FB.on('value', function(snapshot) {
            FBdata2 = snapshot.val();

            // if (FBdata2 == 2 || para == 2 && Room1Air2 == 0) {
            //     addArr(2)
            // } else if (FBdata2 == 2 && Room1Air2 == 2) {
            //     upToFirebaseRoom1Air2.set(0)
            // }


        });
    }

    console.log(name())
}