function dataFromFB(para) {

    var upToFirebaseRoom1Air2 = dbFirebase.ref("room1/air1")
    var upToFirebaseRoom1Air1 = dbFirebase.ref("room1/air")

    if (para == 1) {
        var button1FB = dbFirebase.ref("room1/button");
        var button1 = button1FB.on('value', function(snapshot) {
            FBdata = snapshot.val();

            if (FBdata == 1) {
                addArr(FBdata)
            } else if (FBdata == 0) {
                upToFirebaseRoom1Air1.set(0)
            } else if (para == 1 && FBdata == 0) {
                addArr(para)
            } else if (para == 1 && FBdata == 1) {

                upToFirebaseRoom1Air1.set(0)
            }
        });
    } else if (para == 2) {
        var button2FB = dbFirebase.ref("room1/button2");
        var button2 = button2FB.on('value', function(snapshot) {
            FBdata2 = snapshot.val();

            if (FBdata2 == 2) {
                addArr(FBdata2)
            } else if (FBdata2 == 0) {
                upToFirebaseRoom1Air2.set(0)
            } else if (para == 2 && FBdata2 == 0) {
                addArr(para)
            } else if (para == 2 && FBdata2 == 2) {
                upToFirebaseRoom1Air2.set(0)
            }

        });
    }
}