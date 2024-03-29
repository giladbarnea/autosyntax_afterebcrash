import logging

logger = logging.getLogger(__name__)


def _span_onlyid(inner, id):
	return '<span id="{}">{}</span>'.format(id, inner)


def _span(cls, inner, id=None):
	if id is not None:
		return '<span class="{}" id="{}">{}</span>'.format(cls, id, inner)
	else:
		return '<span class="{}">{}</span>'.format(cls, inner)


def _div(cls, inner, id=None):
	if id is not None:
		return '<div class="{}" id="{}">{}</div>'.format(cls, id, inner)
	else:
		return '<div class="{}">{}</div>'.format(cls, inner)


def _join(value, args):
	"""f'{value} {"".join(args)}'"""
	return f'{value} {"".join(args)}'


def quote(value):
	return f"'{value}'"


def log(value):
	return logger.warning(f"\n\t{value}\n")
