from django.db import models

# Create your models here.
class Task(models.Model):
    Title = models.CharField(max_length=100)
    Desc = models.TextField(blank=True)
    Done = models.BooleanField(default=False)
    
    def __str__(self) -> str:
        return self.Title