from django.utils.html import format_html
from django.utils.safestring import mark_safe

from common.templatetags import register
from common.templatetags.utils import _span, _span_onlyid


@register.filter()
def span(value, cls):
	return format_html(_span(cls, value))


@register.filter()
def id(value, span_id):
	return format_html(_span_onlyid(value, span_id))


@register.filter()
def turq(value):
	return format_html(_span("turquoise", value))


@register.filter()
def dl_turq(value):
	return format_html(_span("download-link turquoise", value))


@register.filter()
def ind(value):
	return format_html(_span("pl40", value))


@register.filter()
def pl65(value):
	return format_html(_span("pl65", value))


@register.filter()
def quote(value):
	return quote(value)


@register.filter()
def white(value):
	return format_html(_span("white", value))


@register.filter()
def k(value):
	return format_html(_span("kept fs25", value))


@register.filter()
def cl(value):
	return format_html(_span("code-literal fs25", value))


@register.filter()
def m(value):
	return format_html(_span("magic fs25", value))


@register.filter()
def self(value):
	return format_html(_span("self fs25", value))


@register.filter()
def string(value):
	return mark_safe(_span("str fs25", value))


@register.filter()
def sup(value):
	return format_html(_span("super fs25", value))


@register.filter()
def n(value):
	return format_html(_span("int fs25", value))


@register.filter()
def cb(value, tabs):
	# return format_html(_span("code-break", value + '&emsp;' * tabs))
	return format_html(_span("fs32", value + '&emsp;' * tabs))


@register.filter()
def mono_bg_it(value):
	return format_html(_span("monospace-bg pl40 mt20 it", value))


@register.filter()
def it(value):
	return format_html(_span("it", value))


@register.filter()
def doc_bold(value):
	return format_html(_span("doc fs25 bold", value))


@register.filter()
def dark_grey(value):
	return format_html(_span("dark fs25 grey", value))


@register.filter()
def op7_mleft150(value, id=None):
	return format_html(_span("op-07 m-left-150", value, id))


@register.filter()
def op7_mleft136(value, id=None):
	return format_html(_span("op-07 m-left-136", value, id))


@register.filter()
def op7_mleft95(value, id=None):
	return format_html(_span(f"op-07 m-left-95", value, id))
