from django import template
from django.utils.html import format_html

register = template.Library()


def _span(cls, inner):
	return f'<span class="{cls}">{inner}</span>'


def _div(cls, inner):
	return f'<div class="{cls}">{inner}</div>'


def _join(value, args):
	return value + ' ' + ''.join(args)


@register.filter()
def span(value, cls):
	return format_html(_span(cls, value))


@register.filter()
def dl_turq(value):
	return format_html(_span("download-link turquoise", value))


@register.simple_tag
def div(value, *args, **kwargs):
	# value = ''.join([value, *args])
	value = _join(value, args)
	value = _div(kwargs['cls'], value)
	return format_html(value)


@register.simple_tag
def work(value, *args):
	# value = ''.join([value, *args])
	value = _join(value, args)
	value = _div("work", value)
	return format_html(value)


@register.simple_tag
def work_indented(value, *args):
	value = _join(value, args)
	value = _div("work indented", value)
	return format_html(value)


@register.simple_tag
def page_title(value, *args):
	"""div, space p-top-20, 2 <br>"""
	# value = ''.join([value, *args])
	value = _join(value, args)
	value = _div("space p-top-20", value)
	value += '<br>' * 2
	return format_html(value)
