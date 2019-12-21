
class HistoryElement(object):
    def __init__(self, name, crag, sector):
        self.name = name
        self.crag = crag
        self.sector = sector
        # jak chce z krajem to tu musze dac jeszcze country, ale zbior lekko sie nie zgadza gdy sector i crag name a nie id

    def __str__(self):
        return self.name