#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
                 

int buttonAir1 = D1;
int buttonAir2 = D2;
int led1 = D3;
int led2 = D4;
int led3 = D5;
int Air1 = D6;
int Air2 = D7;
int count = 0;
boolean toggle1 = false;




#define FIREBASE_HOST "datacontro.firebaseio.com"
#define FIREBASE_AUTH "T4Sj1NzCmvsoClqegpG3VnaT9DLw2FzNKgqXZ0IR"

#define WIFI_SSID "iPad"
#define WIFI_PASSWORD "mimimiml1111111"



void setup() {
  // put your setup code here, to run once:
  pinMode(buttonAir1, INPUT);
  pinMode(buttonAir2, INPUT);
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(Air1, OUTPUT);
  pinMode(Air2, OUTPUT);



  digitalWrite(led1, HIGH);
  digitalWrite(led2, HIGH);
  digitalWrite(led3, HIGH);
  digitalWrite(Air1, HIGH);
  digitalWrite(Air2, HIGH);

  Serial.begin(115200);

  WiFi.mode(WIFI_STA);

  WiFi.begin (WIFI_SSID, WIFI_PASSWORD);
  Serial.println("connecting....");

  while (WiFi.status() != WL_CONNECTED) {
    Serial.println(".");
    delay(500);

  }//loop while
  Serial.println();
  Serial.println("connecting.....");
  Serial.println(WiFi.localIP());

 

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);

}

void loop() {

  if(digitalRead(buttonAir1) == HIGH){
    Serial.println("btn1");
    
  }else if(digitalRead(buttonAir2) == HIGH){
    Serial.println("btn2");
    
  }

  people();
  air();
  sensor();
  
  
}


void people() {

   count = Firebase.getInt("UserinRoom");

   if (count == 1 ) {
    digitalWrite(led1, LOW);

      
  } else if (count == 5 ) {
    digitalWrite(led2, LOW);
  
  } else if (count == 10) {
    digitalWrite(led3, LOW);
   
  }

}

void air() {
  int sum = Firebase.getInt("air");

  if (sum == 1 ) {
    digitalWrite(Air1, LOW);
   
  } else if (sum == 2) {
    digitalWrite(Air2, LOW);
    
  }else if(sum == 0){
     digitalWrite(Air1, HIGH);
     digitalWrite(Air2, HIGH);
  }

}

void sensor() {

  toggle1 = Firebase.getBool("toggle1");

  if(count == 0 && toggle1 == true){
    digitalWrite(led1, HIGH);
    
  }else if(count == 4 && toggle1 == true){
    
    digitalWrite(led2, HIGH);
  }else if(count == 9 && toggle1 == true){
   
    digitalWrite(led3, HIGH);
    
  }
 
}


