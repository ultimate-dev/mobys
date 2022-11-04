import numpy as np
import cv2
from urllib.request import urlopen
import ssl


class ImageService:

    def __init__(self):
        return None

    # Get an image from a URL
    def getImage(self, url):
        context = ssl._create_unverified_context()
        req = urlopen(url, context=context)
        arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
        img = cv2.imdecode(arr, -1)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img = cv2.resize(img, (512, 512), interpolation=cv2.INTER_AREA)
        return img
