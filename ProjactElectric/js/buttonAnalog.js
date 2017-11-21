function dataFromFB(para) {
    var upToFirebaseRoom1Air2 = dbFirebase.ref("room1/air1")
    var upToFirebaseRoom1Air1 = dbFirebase.ref("room1/air")

    if (para == 1) {
        var button1FB = dbFirebase.ref("room1/button");
        button1FB.on('value', function(snapshot) {
            FBdata = snapshot.val();

            if (FBdata == 1 || para == 1 && name() == 0) {
                addArr(1)

            } else if (FBdata == 0 && name() == 1) {
                upToFirebaseRoom1Air1.set(0)
            }

        });
    } else if (para == 2) {
        var button2FB = dbFirebase.ref("room1/button2");
        button2FB.on('value', function(snapshot) {
            FBdata2 = snapshot.val();

            if (FBdata2 == 2 || para == 2 && name1() == 0) {
                addArr(2)

            } else if (FBdata2 == 0 && name1() == 2) {
                upToFirebaseRoom1Air2.set(0)
            }


        });
    }


}