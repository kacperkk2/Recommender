# Generated by Django 3.0 on 2019-12-12 20:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Algorithm',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
                ('short', models.CharField(max_length=5)),
                ('link', models.TextField()),
            ],
        ),
    ]
