
 
 var stac = [];

 export function addArr(num) {

     var upToFirebaseRoom1Air1 = dbFirebase.ref("room1/air")
     var upToFirebaseRoom1Air2 = dbFirebase.ref("room1/air1")
     var upToFirebaseRoom2Air1 = dbFirebase.ref("room2/air")
     var upToFirebaseRoom2Air2 = dbFirebase.ref("room2/air1")
         //เช็คเพื่อปิด แอร์ ทั่ง room1 - room2
     if (upToFirebaseRoom1Air1 == 1 && num == 1) {
         upToFirebaseRoom1Air1.set(0)
     } else if (upToFirebaseRoom1Air2 == 2 && num == 2) {
         upToFirebaseRoom1Air2.set(0)
     } else if (upToFirebaseRoom2Air1 == 3 && num == 3) {
         upToFirebaseRoom2Air1.set(0)
     } else if (upToFirebaseRoom2Air2 == 4 && num == 4) {
         upToFirebaseRoom2Air2.set(0)
     } else {
         stac.push(num)
         console.log(stac)
     }

    //  upToFirebase.set(stac.shift(0));
     setInterval(function() {
         var valToFirebase = stac.shift()

         //เช็คเพื่อเปิดแอร์ ตามปุ่ม
         if (valToFirebase == 1) {
             upToFirebaseRoom1Air1.set(valToFirebase)
         } else if (valToFirebase == 2) {
             upToFirebaseRoom1Air2.set(valToFirebase)
         } else if (valToFirebase == 3) {
             upToFirebaseRoom2Air1.set(valToFirebase)
         } else if (valToFirebase == 4) {
             upToFirebaseRoom2Air2.set(valToFirebase)
         }
     }, 50000);

 }