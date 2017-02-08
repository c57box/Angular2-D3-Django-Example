from django.conf.urls import url
import appdata.views

# Wire up our API using automatic URL routing.
urlpatterns = [
    url(r'^', appdata.views.myapi, name='myapi'),
]
