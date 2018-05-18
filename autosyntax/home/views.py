from django.shortcuts import render


def index(request):
	# next_page = render_to_string('homepage/index_1.html')
	return render(request, 'home/what_is_it.html', {
		'sidebar_items': ['What is it?', 'Download', 'Who am I?']})
