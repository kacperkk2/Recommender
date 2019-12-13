from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('algorithms/', include('algorithms.api.urls')),
    path('results/', include('results.urls'))
]
