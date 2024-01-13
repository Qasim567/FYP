from flask import Flask, request, jsonify
from PIL import Image
import numpy as np
from ultralytics import YOLO

app = Flask(__name__)

app.config['SECRET_KEY'] = 'muhammadmoin'

model = YOLO("../YOLO-Weights/yolov8n.pt")
classNames = ["person", "bicycle", "car", "motorbike", "aeroplane", "bus", "train", "truck", "boat",
              "traffic light", "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat",
              "dog", "horse", "sheep", "cow", "elephant", "bear", "zebra", "giraffe", "backpack", "umbrella",
              "handbag", "tie", "suitcase", "frisbee", "skis", "snowboard", "sports ball", "kite", "baseball bat",
              "baseball glove", "skateboard", "surfboard", "tennis racket", "bottle", "wine glass", "cup",
              "fork", "knife", "spoon", "bowl", "banana", "apple", "sandwich", "orange", "broccoli",
              "carrot", "hot dog", "pizza", "donut", "cake", "chair", "sofa", "pottedplant", "bed",
              "diningtable", "toilet", "tvmonitor", "laptop", "mouse", "remote", "keyboard", "cell phone",
              "microwave", "oven", "toaster", "sink", "refrigerator", "book", "clock", "vase", "scissors",
              "teddy bear", "hair drier", "toothbrush"]

def predict_image(image):
    try:
        # Resize the image to fit the YOLO model input size (optional based on model requirements)
        input_size = (416, 416)
        img = image.resize(input_size)
        img_array = np.array(img)

        # Perform YOLO prediction
        results = model(img_array)

        # Process results and extract class name and confidence score
        predictions = []
        for r in results:
            for box in r.boxes:
                conf = float(box.conf)
                cls = int(box.cls)
                class_name = classNames[cls]
                predictions.append({'class': class_name, 'confidence': conf})

        return predictions
    except Exception as e:
        print("Error during prediction:", str(e))
        return []

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the image from the request
        image_file = request.files['image']
        image = Image.open(image_file.stream)

        # Perform prediction
        predictions = predict_image(image)

        # Return predictions as JSON
        return jsonify(predictions)
    except Exception as e:
        print("Error:", str(e))
        return jsonify({'error': 'An error occurred during prediction.'})

if __name__ == "__main__":
    app.run(host='192.168.0.101', port=5000, debug=True)
