from django import template
from django.utils.html import format_html
from django.utils.safestring import mark_safe

from homepage.templatetags.templatetags_utils import _span, _div, _join, quote

register = template.Library()


@register.filter()
def span(value, cls):
	return format_html(_span(cls, value))


@register.filter()
def turq(value):
	return format_html(_span("turquoise", value))


@register.filter()
def dl_turq(value):
	return format_html(_span("download-link turquoise", value))


@register.filter()
def white(value):
	return format_html(_span("white", value))


@register.filter()
def k(value):
	return format_html(_span("kept", value))


@register.filter()
def cl(value):
	return format_html(_span("code-literal", value))


@register.filter()
def m(value):
	return format_html(_span("magic", value))


@register.filter()
def self(value):
	return format_html(_span("self", value))


@register.filter()
def string(value):
	return mark_safe(_span("str", value))


@register.filter()
def sup(value):
	return format_html(_span("super", value))


@register.filter()
def cb(value, tabs):
	return format_html(_span("code-break", value + '&emsp;' * tabs))


@register.filter()
def mono_bg_italic(value):
	return format_html(_span("monospace-bg italic", value))


@register.filter()
def doc_bold(value):
	return format_html(_span("doc bold", value))


@register.filter()
def dark_grey(value):
	return format_html(_span("dark grey", value))


@register.simple_tag
def br(num):
	return format_html('<br>' * num)


@register.simple_tag
def list_block(*args):
	new_value = [_span("code-literal", '[')]

	for i, c in enumerate(args):
		new_value.append(_span("str", quote(c)))
		if i < len(args) - 1:
			new_value.append(_span("kept", ', '))

	new_value.append(_span("code-literal", ']'))
	return format_html(_div('code-block', ''.join(new_value)))


@register.simple_tag
def dict_block(*args):
	new_value = [_span("code-literal", ' {')]

	for i, c in enumerate(args):
		line = _span("str", quote(c)) if isinstance(c, str) else _span("int", c)
		new_value.append(line)

		if i < len(args) - 1:
			line = _span("kept", ', ') if i % 2 != 0 else _span("code-literal", ': ')
			new_value.append(line)

	new_value.append(_span("code-literal", '}'))

	return mark_safe(_div('code-block', ''.join(new_value)))


@register.simple_tag
def div(value, *args, **kwargs):
	value = _join(value, args)
	value = _div(kwargs['cls'], value)
	return format_html(value)


@register.simple_tag()
def dl(value, *args):
	value = _join(value, args)
	value = _div("download-link", value)
	return format_html(value)


@register.simple_tag
def work(value, *args):
	value = _join(value, args)
	value = _div("work", value)
	return format_html(value)


@register.simple_tag
def work(value, *args):
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
	value = _join(value, args)
	value = _div("space p-top-20", value)
	value += '<br>' * 2
	return format_html(value)


@register.simple_tag
def basic_text(value, *args):
	value = _join(value, args)
	value = _div("basic-text", value)
	return format_html(value)


@register.simple_tag
def mono_mright_300(value, *args):
	value = _join(value, args)
	value = _div("monospace m-right-300", value)
	return format_html(value)
