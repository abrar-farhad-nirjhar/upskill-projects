from django.db import models

# Create your models here.


class Todoitem(models.Model):
    task = models.TextField()
    completed = models.BooleanField(default=False)