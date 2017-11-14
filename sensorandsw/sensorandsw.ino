#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
#define FIREBASE_HOST "datacontro.firebaseio.com"
#define FIREBASE_AUTH "T4Sj1NzCmvsoClqegpG3VnaT9DLw2FzNKgqXZ0IR"
#define WIFI_SSID "A406"
#define WIFI_PASSWORD "maxzdrum1234"
unsigned long timeout;
int sensorone = D1;
int sensortwo = D2;
int sensorState = 0;
bool toggle = false;
bool toggle1 = false;
int count = 0;

void setup() {

  pinMode(sensorone, INPUT);
  pinMode(sensortwo, INPUT);
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin (WIFI_SSID, WIFI_PASSWORD);
  //  Serial.println("connecting....");

  while (WiFi.status() != WL_CONNECTED) {
    //    Serial.println(".");
    delay(500);

  }//loop while
  //  Serial.println();
  //  Serial.println("connecting.....");
  //  Serial.println(WiFi.localIP());


  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);

}

void loop() {
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
