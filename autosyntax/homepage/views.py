from django.http import HttpResponse
from django.shortcuts import render

# from django.template.loader import get_template, render_to_string
from django.template import loader


def index(request):
	# next_page = render_to_string('homepage/index_1.html')
	# template = loader.get_template("app/index.html")
	classes = [
		'code-block',  # 0
		'code-literal#',  # 1
		'code-break',  # 2
		'magic',  # 3
		'kept',  # 4
		'self',  # 5
		'super', ]  # 6

	html = {
		'class':                        4,
		'&nbsp;Dog(Animal):':           1,
		'<br>&emsp;&emsp;':             2,
		'def':                          4,
		'&nbsp;__init__':               3,
		'&nbsp;(':                      1,
		'self':                         5,
		',':                            4,
		'&nbsp;fluffy=':                1,
		'True':                         4,
		'):':                           1,
		'<br>&emsp;&emsp;&emsp;&emsp;': 2,

		}
	context = {
		'sidebar_items': ['What is it?', 'Download', 'Who am I?'],
		'test':          ['<span class="kept">class</span>', ]
		}
	return render(request, 'homepage/what_is_it.html', context)


# return HttpResponse(template.render)


def talia(request):
	return render(request, 'homepage/talia.html')
# return HttpResponse('<div style="color: red">hi</div>')
