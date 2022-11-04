from flask import Flask, request, jsonify
from services.image_service import ImageService
from services.color_service import ColorService

configs = {

}

p = {
    'host': '192.168.137.74',
    'port': 5000,
}

app = Flask(__name__, **configs)

imageService = ImageService()
colorService = ColorService()


@app.route('/')
def get():
    try:
        args = request.args
        img = imageService.getImage(
            args["img_url"])
        hex_colors = colorService.getTopColors(img)

        return jsonify(data='Hello, World!', args=args,hex_colors=hex_colors)
    except Exception as e:
        return jsonify(data=str(e))


if __name__ == "__main__":
    app.run(debug=True, **p)
