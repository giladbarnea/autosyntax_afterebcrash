from django.shortcuts import render


# from django.template.loader import get_template, render_to_string


def index(request):
	# next_page = render_to_string('homepage/index_1.html')
	return render(request, 'homepage/what_is_it.html', {
		'sidebar_items': ['What is it?', 'Download', 'Who am I?']})


def talia(request):
	return render(request, 'homepage/talia.html')
