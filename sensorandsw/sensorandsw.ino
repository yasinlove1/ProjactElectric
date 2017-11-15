#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
#define FIREBASE_HOST "datacontro.firebaseio.com"
#define FIREBASE_AUTH "T4Sj1NzCmvsoClqegpG3VnaT9DLw2FzNKgqXZ0IR"
#define WIFI_SSID "A406"
#define WIFI_PASSWORD "maxzdrum1234"
unsigned long timeout;
int sensorone = D1;
int sensortwo = D2;
int buttonAir1 = D3;
int buttonAir2 = D6;
int sensorState = 0;
int buttonStateAir1 = 0;
int buttonStateAir2 = 0;
bool toggle = false;
bool toggle1 = false;
int count = 0;

void setup() {

  //  pinMode(sensorone, INPUT);
  //  pinMode(sensortwo, INPUT);
  pinMode(buttonAir1, INPUT);
  pinMode(buttonAir2, INPUT);
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin (WIFI_SSID, WIFI_PASSWORD);
  //  Serial.println("connecting....");

  while (WiFi.status() != WL_CONNECTED) {
    //    Serial.println(".");
    delay(500);

  }//loop while
  Serial.println();
  Serial.println("connecting.....");
  Serial.println(WiFi.localIP());


  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);

}

void loop() {


  button();

}


void button() {


  Firebase.set("room1/button", buttonStateAir1);
  Firebase.set("room1/button2", buttonStateAir2);

  Serial.println(digitalRead(buttonAir2));


  if (digitalRead(buttonAir1) == HIGH && buttonStateAir1 == 0) {


    buttonStateAir1 = 1 ;

  } else if (digitalRead(buttonAir1) == HIGH && buttonStateAir1 == 1) {

    buttonStateAir1 = 0 ;

  }

  if (digitalRead(buttonAir2) == HIGH && buttonStateAir2 == 0) {

    buttonStateAir2 = 2 ;
  } else if (digitalRead(buttonAir2) == HIGH && buttonStateAir2 == 2) {

    buttonStateAir2 = 0 ;
  }
}





void sensor() {
  if (count >= 0) {
    Firebase.set("room1/UserinRoom", count);
  }


  if (digitalRead(sensorone) == LOW && toggle == false) {
    sensorState = 1 ;
    timeout = millis();
    toggle = true;

  } else if (digitalRead(sensortwo) == LOW && toggle == false) {

    sensorState = 2 ;
    timeout = millis();
    toggle = true;
  }

  Serial.println(sensorState);

  if (sensorState == 1 && digitalRead(sensortwo) == LOW) {
    count++;
    toggle = false;
    toggle1 = false;
    sensorState = 0;
  } else if (sensorState == 2 && digitalRead(sensorone) == LOW) {
    count--;
    toggle = false;
    toggle1 = true;
    sensorState = 0;
  }

  if (millis() - timeout > 5000 && toggle == true) {
    toggle = false;

  }
}

