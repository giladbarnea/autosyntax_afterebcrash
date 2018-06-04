from django.conf.urls import url
from . import views

app_name = 'homepage'
urlpatterns = [
	url(r'^$', views.index, name='index'),
	url(r'talia', views.talia, name='talia'),
	# url(r'howtouse', views.how_to_use, name='howtouse'),
	url(r'how', views.how_to_use, name='howtouse'),
	url(r'cv', views.cv, name='cv'),
	url(r'whoami', views.whoami, name='whoami'),
	url(r'download', views.download, name='download'),
	]
