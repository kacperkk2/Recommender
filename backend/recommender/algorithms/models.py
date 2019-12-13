from django.db import models


class Algorithm(models.Model):
    name = models.CharField(max_length=40)
    short = models.CharField(max_length=5)
    link = models.TextField()

    def __str__(self):
        return self.name
