from flask import Flask, Response,jsonify,request
import cv2
from YOLO_Video import video_detection
app = Flask(__name__)

app.config['SECRET_KEY'] = 'muhammadmoin'
def generate_frames(path_x=''):
    try:
        yolo_output = video_detection(path_x)
        for detection_ in yolo_output:
            if detection_ is not None:
                ref, buffer = cv2.imencode('.jpg', detection_)
                if not ref:
                    print("Error: Unable to encode frame.")
                    continue
                frame = buffer.tobytes()
                yield (b'--frame\r\n'
                       b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
    except Exception as e:
        print("Error:", str(e))

@app.route('/video')


@app.route('/webcam')
def webcam():
    return Response(generate_frames(path_x=0), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)

