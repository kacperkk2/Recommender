# Generated by Django 3.0 on 2019-12-21 10:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('algorithms', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='algorithm',
            name='link',
        ),
        migrations.AddField(
            model_name='algorithm',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='algorithm',
            name='short',
            field=models.CharField(max_length=20),
        ),
    ]
