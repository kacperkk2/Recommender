# Generated by Django 3.0 on 2019-12-20 18:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data_sets', '0002_auto_20191220_1710'),
    ]

    operations = [
        migrations.RenameField(
            model_name='dataset',
            old_name='users_id_example',
            new_name='users_id_sample',
        ),
        migrations.AddField(
            model_name='dataset',
            name='density',
            field=models.CharField(default=0, max_length=10),
            preserve_default=False,
        ),
    ]