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


def get(distance, every, lasts):
	print(f'distance: {distance}')
	print(f'every {every} ms')
	print(f'animation takes {lasts/1000} seconds')
	iterations = distance / (lasts / every)

	curved = bezier(distance)

	curved_sum = sum(curved)
	print('curved sum: ', curved_sum)

	diluted = dilute(curved, int(iterations))
	# my_print(diluted, 'diluted')

	# compressed = [i ** (1 - distance / (lasts *10)) for i in diluted]
	compressed = [i ** (1 - distance / (lasts ** 1.5)) for i in diluted]

	amp_factor = (curved_sum - sum(compressed)) / (distance / iterations)
	print(f'\namp_factor: ', amp_factor)

	amped = [i + amp_factor for i in compressed]
	my_print(amped, 'amped')


get(distance=4192, every=10, lasts=2000)
