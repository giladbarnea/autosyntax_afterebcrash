from django.contrib.admin.templatetags.log import register
from django.shortcuts import render
from jinja2 import Template


def index(request):
	def calcName(n, i):
		return ' '.join([n] * i)

	template = Template("Hello {{ calcName('Gandalf', 2) }}")
	template.render({
		'calcName': calcName})
	# register = template.Library()
	#
	# @register.simple_tag
	# def something(p1):
	# 	return p1 + '!!!!'
	#
	# class What:
	# 	def __init__(self):
	# 		self.name = "what!!!"
	#
	# 	def p(self, hi):
	# 		return self.name + hi

	context = {
		'sidebar_items': ['What is it?', 'Download', 'How to use', 'Who am I?'],
		'test':          template,
		'test2':         'hi!'
		}
	return render(request, 'homepage/whoami.html', context)


def how_to_use(request):
	context = {
		'sidebar_items': ['General behaviour', 'Download', 'How to use', 'Who am I?'],
		}
	return render(request, 'homepage/howtouse_full.html', context)


def cv(request):
	return render(request, 'homepage/cv.html')


# return HttpResponse(template.render)


def talia(request):
	# return HttpResponse('<div style="color: red">&emsp;&emsp;hi</div>')
	return render(request, 'homepage/talia.html')
