function name(params1, num) {

    var button1FB = dbFirebase.ref("room1/button");
    var button2FB = dbFirebase.ref("room1/button2");



    if (params1 == 1) {

        if (num == 0 && params1 == 1) {
            addArr(1)
        }

    } else if (params1 == 0) {


    } else if (params1 == 2) {


    }



    if (num == 1 && params1 == 0) {
        addArr(1)
        button1FB.set(1)
    } else if (num == 2 && params1 == 0) {
        addArr(2)
        button2FB.set(2)
    }
    if (params1 == 0 && num == 0) {
        upToFirebaseRoom1Air1.set(0)
    } else if (params1 == 0 && num == 0) {

    }



}