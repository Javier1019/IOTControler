#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

const char* ssid = "<SSID>";
const char* password = "<PASSWORD>";
const char* serverUrl = "<SERVER_URL>";
const char* deviceId = "<DEVICE_ID>";

void setup() {
  Serial.begin(9600);
  
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    
    String serverPath = String(serverUrl) + "/device/heartbeat";

    http.begin(serverPath.c_str());
    
    http.addHeader("Content-Type", "application/json");
    
    String httpRequestData = "{\"id\":\"" + String(deviceId) + "\",\"ip\":\"" + WiFi.localIP().toString() + "\"}";

    int httpResponseCode = http.POST(httpRequestData);
    
    if (httpResponseCode>0) {
      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);
    }
    else {
      Serial.print("Error code: ");
      Serial.println(httpResponseCode);
    }
    
    http.end();
  }
  else {
    Serial.println("WiFi Disconnected");
  }

  delay(30000);  // send heartbeat every 30 seconds
}
