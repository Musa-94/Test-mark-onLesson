
onmessage = e => {
    const { data } = e;
    const { firstValue, secondValue } = data;


    // console.log(firstValue, secondValue);
    
    if (firstValue !== undefined && secondValue !== undefined) {

        const result = firstValue*secondValue;
        postMessage(result);
    }
}