from sklearn.cluster import KMeans
from collections import Counter


class ColorService:
    def __init__(self):
        return None

    # Convert RGB to Hex
    def rgbToHex(self, color):
        return "#{:02x}{:02x}{:02x}".format(int(color[0]), int(color[1]), int(color[2]))

    # Get the top colors from an image
    def getTopColors(self, image, no_of_colors=5):
        pixel_data = image.reshape((image.shape[0]*image.shape[1], 3))
        clf = KMeans(no_of_colors)
        clf.fit_predict(pixel_data)
        count = Counter(clf.labels_)
        color_centers = clf.cluster_centers_
        ordered_colors = [color_centers[i] for i in count.keys()]
        hex_colors = [self.rgbToHex(ordered_colors[i]) for i in count.keys()]
        colors = dict(zip(hex_colors, count.values()))
        return colors
