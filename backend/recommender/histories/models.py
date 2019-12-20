
class HistoryElement(object):
    def __init__(self, name, crag, sector):
        self.name = name
        self.crag = crag
        self.sector = sector

    def __str__(self):
        return self.name