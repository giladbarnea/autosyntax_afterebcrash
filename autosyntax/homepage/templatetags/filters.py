from django.utils.html import format_html
from django.utils.safestring import mark_safe

from homepage.templatetags.tags import register
from homepage.templatetags.templatetags_utils import _span, _span_onlyid, log


@register.filter()
def span(value, cls):
	return format_html(_span(cls, value))


@register.filter()
def id(value, span_id):
	log(f'in id filter: value={value}, span_id={span_id}')
	return format_html(_span_onlyid(value, span_id))


@register.filter()
def turq(value):
	return format_html(_span("turquoise", value))


@register.filter()
def dl_turq(value):
	return format_html(_span("download-link turquoise", value))


@register.filter()
def ind(value):
	return format_html(_span("indented", value))


@register.filter()
def ind_half(value):
	return format_html(_span("indented-half", value))


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
def n(value):
	return format_html(_span("int", value))


@register.filter()
def cb(value, tabs):
	return format_html(_span("code-break", value + '&emsp;' * tabs))


@register.filter()
def mono_bg_it(value):
	return format_html(_span("monospace-bg italic", value))


@register.filter()
def doc_bold(value):
	return format_html(_span("doc bold", value))


@register.filter()
def dark_grey(value):
	return format_html(_span("dark grey", value))


@register.filter()
def op7_mleft150(value, id=None):
	return format_html(_span("op-07 m-left-150", value, id))


@register.filter()
def op7_mleft136(value, id=None):
	return format_html(_span("op-07 m-left-136", value, id))


@register.filter()
def op7_mleft95(value, id=None):
	return format_html(_span(f"op-07 m-left-95", value, id))
