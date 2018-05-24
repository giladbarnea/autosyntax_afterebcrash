from django import template
from django.utils.html import format_html

register = template.Library()


def wrap(cls, inner, tag="span"):
	return f'<{tag} class="{cls}">{inner}</{tag}>'


@register.filter()
def turq(value):
	return format_html(wrap("turquoise", value))


@register.simple_tag
def page_title(value, *args):
	value = ''.join([value, *args])
	value = wrap("space p-top-20", value, "div")
	value += '<br>' * 2
	return format_html(value)
