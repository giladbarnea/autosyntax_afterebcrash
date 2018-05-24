def _span(cls, inner):
	return '<span class="{}">{}</span>'.format(cls, inner)


def _div(cls, inner):
	return '<div class="{}">{}</div>'.format(cls, inner)


def _join(value, args):
	return value + ' ' + ''.join(args)


def quote(value):
	return f"'{value}'"
