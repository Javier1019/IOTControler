from flask import Flask, request
import RPi.GPIO as GPIO
import requests
import time
from threading import Thread

app = Flask(__name__)

# setup your GPIO pins here
GPIO.setmode(GPIO.BCM)
available_pins = [2, 3, 4, 17, 27, 22, 10, 9, 11, 5, 6, 13, 19, 26, 14, 15, 18, 23, 24, 25, 8, 7, 12, 16, 20, 21] # BCM numbering
for pin in available_pins:
    GPIO.setup(pin, GPIO.OUT)

DEVICE_ID = "myDeviceId" # change this to your device's unique id
SERVER_URL = "http://your-server-url" # change this to your server's url

def send_heartbeat():
    while True:
        try:
            requests.post(f"{SERVER_URL}/device/heartbeat", json={'id': DEVICE_ID, 'ip': request.host})
        except Exception as e:
            print(f"Failed to send heartbeat: {e}")
        time.sleep(30) # send heartbeat every 30 seconds

@app.route('/pin/<int:pin_id>/<state>', methods=['POST'])
def control_pin(pin_id, state):
    if state not in ['on', 'off']:
        return 'Invalid state', 400

    if pin_id not in available_pins:
        return 'Invalid pin_id', 400

    if state == 'on':
        GPIO.output(pin_id, GPIO.HIGH)
    else:
        GPIO.output(pin_id, GPIO.LOW)

    return 'OK'

@app.route('/script/<script_id>', methods=['POST'])
def run_script(script_id):
    # This is a placeholder. In a real application, you would need to run the script here.
    # Be very careful with this, as allowing arbitrary script execution can be very dangerous if not properly secured.
    print(f"Running script {script_id}")
    return 'OK'

if __name__ == '__main__':
    heartbeat_thread = Thread(target=send_heartbeat)
    heartbeat_thread.start()
    app.run(host='0.0.0.0', port=5000)
