function recursivePow(base, exponent) {
    if (typeof base !== 'number') {
        throw new TypeError('base must be number');
    }
    if (typeof exponent !== 'number') {
        throw new TypeError('exponent must be number');
    }
    if (!Number.isInteger(exponent) || exponent <= 0) {
        throw RangeError('exponent must be positive integer');
    }
    if (exponent === 1) {
        return base;
    }
    return base * pow(base, exponent - 1);
}

try {
    const result = recursivePow(2, 4);
    // const result = pow(2, -1);
    // const result = pow(2, '4');
    // const result = pow('2', 4);
    console.log('Result of recursive pow:', result);
} catch (err) {
    console.error('err ->', err);
}

// not recurcive function
function pow(base, exponent) {
    if (typeof base !== 'number') {
        throw new TypeError('base must be number');
    }
    if (typeof exponent !== 'number') {
        throw new TypeError('exponent must be number');
    }
    if (!Number.isInteger(exponent) || exponent <= 0) {
        throw RangeError('exponent must be positive integer');
    }
    return base ** exponent;
}

try {
    const result = pow(2, 4);
    // const result = pow(2, -1);
    // const result = pow(2, '4');
    // const result = pow('2', 4);
    console.log('Result of not recursive pow:', result);
} catch (err) {
    console.error('err ->', err);
}