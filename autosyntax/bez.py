prettify = lambda m: [float(str(i)[:4]) for i in m]


def bezier(steps):
	bez = lambda t: 3 * (1 - t) * pow(t, 2)
	linear = [i / steps for i in range(steps)]
	ret = [bez(i) * 4 for i in linear]
	return ret


def dilute(l, factor):
	return [i * factor for i in l][::-factor][::-1]


def my_print(l, name):
	print(f'\n{name}: {prettify(l)}')
	print(f'{name} sum: ', sum(l))
	print(f'max/min {name}: {max(l) / min(l)}')
	print(f'length {name}: {len(l)}')


def get(distance, every):
	if distance < 500:
		lasts = distance
	elif distance < 1000:
		lasts = 500
	else:
		lasts = distance ** 0.9

	# lasts = lasts * (distance / 2000) if distance < 2000 else lasts
	print(f'distance: {distance}')
	print(f'every {every} ms')
	print(f'animation takes {lasts/1000} seconds')
	one_step = distance / (lasts / every)
	print(f'one step is {one_step} pixels')
	print(f'{lasts/every} steps overall')
	curved = bezier(distance)
	print(f'curved[-1]: ', curved[-1])
	curved_sum = sum(curved)
	print('\ncurved sum: ', curved_sum)

	diluted = dilute(curved, int(one_step))
	print(f'diluted: ', diluted)
	print(f'\ndilted[0] compressed: {diluted[0] ** (1 - distance / (lasts ** 1.5))}')
	compressed = [i ** (1 - distance / (lasts ** 1.5)) for i in diluted]

	compressed_sum = sum(compressed)
	print(f'compressed_sum: ', compressed_sum)
	amp_factor = (curved_sum - compressed_sum) / (distance / one_step)
	print(f'\namp_factor: ', amp_factor)

	amped = [i + amp_factor for i in compressed]
	my_print(amped, 'amped')
	print('last item: ', amped[-1])
	if amped[-1] < 1:
		print('\nfixing...\n')
		compressed = [i ** (1 - distance / (lasts ** (1.5 - amped[-1]))) for i in diluted]
		compressed_sum = sum(compressed)
		print(f'compressed_sum: ', compressed_sum)
		amp_factor = (curved_sum - compressed_sum) / (distance / one_step)
		print(f'\namp_factor: ', amp_factor)

		amped = [i + amp_factor for i in compressed]
		my_print(amped, 'amped')
		print('last item: ', amped[-1])


# get(distance=300, every=10)
# get(distance=500, every=10)
# get(distance=750, every=10)
# get(distance=1000, every=10)
# get(distance=1250, every=10)
# get(distance=1500, every=10)
# get(distance=2000, every=10)
get(distance=4000, every=10)
