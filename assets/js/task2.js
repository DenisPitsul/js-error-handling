function validateEmail(email) {
    if (typeof email !== 'string') {
        throw TypeError('email must be string');
    }
    if (!email.includes('@') || email.startsWith('@') || email.endsWith('@')) {
        throw Error('email must contain @ and it must be not first or last charachter');
    }
    return email;
}

try {
    const email = validateEmail('test@gmail.com');
    // const email = validateEmail('@gmail.com');
    // const email = validateEmail('test@');
    // const email = validateEmail('test');
    // const email = validateEmail(3);
    console.log(email);
} catch (err) {
    console.error('err ->', err);
}