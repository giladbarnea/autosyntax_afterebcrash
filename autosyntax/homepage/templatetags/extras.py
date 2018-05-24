from django import template
from django.http import HttpResponse
from django.utils.safestring import mark_safe

register = template.Library()


@register.filter()
def add_enthusiasm(value, enth):
	"""Removes all values of arg from the given string"""
	return value + '!' * enth


@register.simple_tag()
def add_br(value, br_num):
	"""Removes all values of arg from the given string"""
	return '<br>' * br_num + value


@register.simple_tag
def work_white(value):
	return mark_safe(f'<div class="work white">{value}</div>')


@register.simple_tag
def work_turq(value):
	return mark_safe(f'<div class="work turqoise">{value}</div>')


@register.simple_tag
def page_title(value):
	return mark_safe(f'<div class="space p-top-20">{value}<br></div><br>')
