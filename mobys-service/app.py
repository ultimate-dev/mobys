import configs
from flask import Flask, request, jsonify
from services.image_service import ImageService
from services.color_service import ColorService
import random

# Create the Flask app
app = Flask(__name__, **configs.FLASK_CONFIG)
# Services
imageService = ImageService()
colorService = ColorService()


# Hello World Route
@app.route('/', methods=['GET'])
def helloWorld():
    return "Hello World"


# Image Route
@app.route('/image', methods=['GET'])
def image():
    try:
        img_url = request.args.get("img_url")
        # Get the image
        img = imageService.getImage(
            img_url)
        # Get the top colors
        colors = colorService.getTopColors(img, 3)

        # Return the data
        return jsonify(colors=colors)
    except Exception as e:
        return jsonify(data=str(e))


# Run the app
if __name__ == "__main__":
    app.run(**configs.APP_CONFIG)
