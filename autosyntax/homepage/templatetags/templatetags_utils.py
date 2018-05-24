def _span(cls, inner):
	return f'<span class="{cls}">{inner}</span>'


def _div(cls, inner):
	return f'<div class="{cls}">{inner}</div>'


def _join(value, args):
	return value + ' ' + ''.join(args)