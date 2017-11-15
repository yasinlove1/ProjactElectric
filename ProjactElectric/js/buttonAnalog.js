function daataFromFB(params) {

    var button1FB = dbFirebase.ref("room1/button");
    var button1 = button1FB.on('value', function(snapshot) {
        FBdata = snapshot.val();

        if (FBdata == 0) {
            addArr(params);
        } else if (FBdata == 1) {
            addArr(FBdata);
        }

    });

    var button2FB = dbFirebase.ref("room1/button2");
    var button2 = button2FB.on('value', function(snapshot) {
        FBdata2 = snapshot.val();

        if (FBdata2 == 0) {
            addArr(params);
        } else if (FBdata2 == 2) {
            addArr(FBdata);
        }

    });
}