let number = 10;

if (number > 0) {
    console.log('Positive');
} else if (number < 0) {
    console.log('Negative');
} else {
    console.log('Zero');
}

switch (number) {
    case 1:
        console.log('One');
        break;
    case 10:
        console.log('Ten');
        break;
    default:
        console.log('Other number');
}
