from django.shortcuts import render


def index(request):
	context = {
		'sidebar_items': ['What is it?', 'Download', 'How to use', 'Who am I? (CV)'],
		}
	return render(request, 'homepage/home.whoami.html', context)


def how_to_use(request):
	context = {
		'sidebar_items': ['Operators', 'Dotted', 'Inline methods', ''],
		'operators':     ['list', 'tuple', 'set', 'dict', 'for', 'def', 'class', 'listcomp', 'str', 'print'],
		'dotstr_ops':    ['list', 'tuple', 'set', 'dict', 'str', 'print'],
		'dotvar_ops':    ['for', 'listcomp']
		}
	return render(request, 'howtouse/htu.howtouse.html', context)


def cv(request):
	context = {
		'sidebar_items': ['Overview', 'Experience', 'Skills', 'Education', 'M.Service', 'Languages', 'Contact']
		}
	return render(request, 'homepage/cv.html', context)


def talia(request):
	return render(request, 'homepage/_talia.html')
