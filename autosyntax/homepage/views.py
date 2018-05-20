from django.shortcuts import render

from django import template


def index(request):
	# next_page = render_to_string('homepage/index_1.html')
	# template = loader.get_template("app/index.html")
	# classes = [
	# 	'code-block',  # 0
	# 	'code-literal#',  # 1
	# 	'code-break',  # 2
	# 	'magic',  # 3
	# 	'kept',  # 4
	# 	'self',  # 5
	# 	'super', ]  # 6

	# class Html:
	# 	def __init__(self, content, cls, space=False, tabs=0):
	# 		self.content = content
	# 		self.cls = cls
	# 		self.space = space
	# 		if tabs > 0:
	# 			self.has_tabs = True
	# 			self.tabs = range(tabs)
	# 		else:
	# 			self.has_tabs = False
	# 			self.tabs = tabs

	# html = [
	# 	Html('class', 'kept', True),
	# 	Html('Dog(Animal):', 'code-literal', tabs=2),
	# 	Html('def', 'kept', True),
	# 	Html('__init__', 'magic'),
	# 	Html('(', 'code-literal'),
	# 	Html('self', 'self'),
	# 	Html(',', 'kept', True),
	# 	Html('fluffy=', 'code-literal'),
	# 	Html('True', 'kept'),
	# 	Html('):', 'code-literal', tabs=4),
	# 	]
	# html = {
	# 	'class':                        'kept',
	# 	'Dog(Animal):':                 'code-literal',
	# 	'<br>&emsp;&emsp;':             'code-break',
	# 	'def':                          'kept',
	# 	'&nbsp;__init__':               'magic',
	# 	'&nbsp;(':                      'code-literal',
	# 	'self':                         'self',
	# 	',':                            'kept',
	# 	'&nbsp;fluffy=':                'code-literal',
	# 	'True':                         'kept',
	# 	'):':                           'code-literal',
	# 	'<br>&emsp;&emsp;&emsp;&emsp;': 'code-break',
	# 	}
	# real_html = ''.join([f'<span class="{c}">{h}</span>' for h, c in html.items()])
	# def calcName(n, i):
	# 	return ' '.join([n] * i)
	# template = Template("Hello {{ calcName('Gandalf', 2) }}")
	# template.render({

	# 	'calcName': calcName})
	# template = Template(real_html)
	# real_html.render()

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
		'sidebar_items': ['What is it?', 'Download', 'Who am I?', 'Features'],
		}
	return render(request, 'homepage/download.html', context)


# return HttpResponse(template.render)


def talia(request):
	# return HttpResponse('<div style="color: red">&emsp;&emsp;hi</div>')
	return render(request, 'homepage/talia.html')
