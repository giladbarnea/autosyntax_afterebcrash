from django.utils.html import format_html
from django.utils.safestring import mark_safe

from common.templatetags import register
from common.templatetags.utils import _span, _div, _join, quote, _span_onlyid


@register.simple_tag
def br(num):
	return format_html('<br>' * num)


@register.simple_tag
def br_15():
	return format_html(_span('fs15', '<br><br>'))


@register.simple_tag
def br_25():
	return format_html(_span('fs35', '<br><br>'))


@register.simple_tag
def list_block(*args):
	new_value = [_span("code-literal fs25", '[')]

	for i, c in enumerate(args):
		append = quote(c) if 'span' not in c else c
		new_value.append(_span("str fs25", append))
		if i < len(args) - 1:
			new_value.append(_span("kept fs25", ', '))

	new_value.append(_span("code-literal fs25", ']'))
	return format_html(_div('monospace-bg fs25 pl40 mt20', ''.join(new_value)))


@register.simple_tag
def dict_block(*args):
	new_value = [_span("code-literal fs25", ' {')]

	for i, c in enumerate(args):
		# append = _span("str", quote(c)) if isinstance(c, str) else _span("int", c)

		append = quote(c) if 'span' not in c else c
		append = _span("str fs25", append)
		new_value.append(append)

		if i < len(args) - 1:
			append = _span("kept fs25", ', ') if i % 2 != 0 else _span("code-literal fs25", ': ')
			new_value.append(append)

	new_value.append(_span("code-literal fs25", '}'))

	return mark_safe(_div('monospace-bg fs25 pl40 mt20', ''.join(new_value)))


# DONE
@register.simple_tag
def div(value, *args, **kwargs):
	value = _join(value, args)
	id = kwargs['id'] if 'id' in kwargs else None
	value = _div(kwargs['cls'], value, id)
	return format_html(value)


# DONE
@register.simple_tag
def span(value, *args, **kwargs):
	""""""
	value = _join(value, args)
	if 'cls' in kwargs:
		id = kwargs['id'] if 'id' in kwargs else None
		value = _span(kwargs['cls'], value, id)
	else:
		value = _span_onlyid(value, kwargs['id'])
	return format_html(value)


# DONE
@register.simple_tag
def a(inner, href, cls, innercls, br2=True, _id=None):
	html = ''
	if br2:
		html = ''.join([html, '<br><br>'])
	html = ''.join([html,
	                f'<a href="{href}" class="{cls}" '])
	if _id is not None:
		html = ''.join([html, f'id="{_id}"'])

	html = ''.join([html, f"""">
	{_div(innercls,inner)}</a>
	"""])
	return format_html(html)


# DONE
@register.simple_tag()
def space_ptop_20(value, *args):
	value = _join(value, args)
	value = _div("space pt20", value)
	return format_html(value)


# DONE
@register.simple_tag
def work(value, *args, **kwargs):
	value = _join(value, args)
	if 'id' in kwargs:
		value = _div("fs30", value, kwargs['id'])
	else:
		value = _div("fs30", value)
	return format_html(value)


# # DONE
# @register.simple_tag
# def work_25(value, *args, **kwargs):
# 	value = _join(value, args)
# 	if 'id' in kwargs:
# 		value = _div("work-25", value, kwargs['id'])
# 	else:
# 		value = _div("work-25", value)
# 	return format_html(value)


# DONE
@register.simple_tag
def work_indented(value, *args, **kwargs):
	value = _join(value, args)
	if 'id' in kwargs:
		value = _div("fs30 indented", value, kwargs['id'])
	else:
		value = _div("fs30 indented", value)
	return format_html(value)


# DONE
@register.simple_tag
def page_title(value, *args):
	"""div, space p-top-20, 2 <br>"""
	value = _join(value, args)
	value = _div("space pt20", value)
	value += '<br>' * 2
	return format_html(value)


# DONE
@register.simple_tag
def basic_text(value, *args):
	value = _join(value, args)
	value = _div("basic-text", value)
	return format_html(value)


# DONE
@register.simple_tag
def basic_text_ind_mright200(value, *args, **kwargs):
	value = _join(value, args)
	cls = "basic-text m-right-200 indented"
	if 'plus' in kwargs:
		cls += '_plus'
	value = _div(cls, value)
	return format_html(value)


# DONE
@register.simple_tag
def basic_text_ind(value, *args, **kwargs):
	if 'no' in kwargs:
		value = f'{value}{"".join(args)}'
	else:
		value = _join(value, args)

	cls = "basic-text indented"
	if 'plus' in kwargs:
		cls += '_plus'
	value = _div(cls, value)
	return format_html(value)


# DONE
@register.simple_tag
def basic_text_white(value, *args):
	value = _join(value, args)
	value = _div("basic-text white", value)
	return format_html(value)


# DONE
@register.simple_tag
def mono_mright_300(value, *args):
	value = _join(value, args)
	value = _div("monospace pl40 mt20 mr300", value)
	return format_html(value)


# DONE
@register.simple_tag
def basic_white_mright200(value, *args, **kwargs):
	value = _join(value, args)
	if 'ind' in kwargs:
		cls = "basic-text white m-right-200 indented"
	else:
		cls = "basic-text white m-right-200"
	value = _div(cls, value)
	return format_html(value)
