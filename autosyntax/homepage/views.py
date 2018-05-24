from django.shortcuts import render


def index(request):
	context = {
		'sidebar_items': ['What is it?', 'Download', 'How to use', 'Who am I?'],
		}
	return render(request, 'homepage/whoami.html', context)


def how_to_use(request):
	context = {
		'sidebar_items': ['General behaviour', 'Download', 'How to use', 'Who am I?'],
		'operators':['list', 'tuple', 'set', 'dict', 'for', 'def', 'class', 'str', 'print']
		}
	return render(request, 'homepage/howtouse_full.html', context)


def cv(request):
	return render(request, 'homepage/cv.html')


def talia(request):
	return render(request, 'homepage/talia.html')
