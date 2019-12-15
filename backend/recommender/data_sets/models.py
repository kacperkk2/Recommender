from django.db import models


class DataSet(models.Model):
    name = models.CharField(max_length=40)
    users_num = models.CharField(max_length=10)
    items_num = models.CharField(max_length=10)
    description = models.TextField()

    def __str__(self):
        return self.name