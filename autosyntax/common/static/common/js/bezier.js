function bezier(distance) {
    function _bez(t) {
        return 3 * (1 - t) * Math.pow(t, 2);
    }

    let linear = [];
    for (let i = 0; i < distance; i++) {
        linear.push(i / distance);
    }
    let bezzed = [];
    for (let j = 0; j < linear.length; j++) {
        let item = _bez(linear[j]) * 4;
        bezzed.push(item);
    }
    return bezzed;

}

function dilute(list, factor) {
    list = list.filter((n, i) => i % factor === 0);
    list = list.reverse();
    return list.map(n => n * factor);
}

function sum(list) {
    let sum = 0;
    list.forEach(n => sum += n);
    return sum;
}

function max(list) {
    let max = list[0];
    list.forEach(n => n > max ? max = n : max);
    return max;
}

function min(list) {
    let min = list[0];
    list.forEach(n => n < min ? min = n : min);
    return min;
}

function prettify(list) {
    return list.map((n) => parseFloat(n.toString().substr(0, 4)))
}

function print(list, name) {
    // console.log(`\n${name}: ${prettify(list)}`);
    console.log(`${name} sum: ${sum(list)}`);
    console.log(`max/min ${name}: ${max(list) / min(list)}`);
    console.log(`length ${name}: ${list.length}`);
}

function get_bezzed(distance, freq_ms, dur_ms) {
    console.log(`\ndistance: ${distance}`);
    console.log(`freq_ms ${freq_ms} ms`);
    console.log(`animation takes ${dur_ms / 1000} seconds`);
    let iterations = distance / (dur_ms / freq_ms);

    let curved = bezier(distance);

    let curved_sum = sum(curved);
    console.log('curved sum: ', curved_sum);
    let diluted = dilute(curved, parseInt(iterations));

    let compressed = diluted.map(curr => Math.pow(curr, (1 - distance / Math.pow(dur_ms, 1.5))));
    let amp_factor = (curved_sum - sum(compressed)) / (distance / iterations);
    console.log('\namp_factor: ', amp_factor);

    let amped = compressed.map(n => n + amp_factor);
    print(amped, 'amped');
    return amped;
}