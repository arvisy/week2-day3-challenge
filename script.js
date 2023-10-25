// soal 1
// arr
function tentukanDeretGeometri(arr) {
    let length = arr.length;
    let check = 0;
    let deret = 0;

    if (arr.length >= 2) {
        deret = arr[1] / arr[0];
    } else {
        return false;
    }

    for (let i = 0; i < length - 1; i++) {
        if (arr[i] * deret == arr[i + 1]) {
            check++;
        }
    }

    if (check == length - 1) {
        return true;
    } else {
        return false;
    }
}

// soal 2 
// arr
function mengelompokkanAngka(arr) {
    let arrResult = [[]];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arrResult[0].unshift(arr[i]);
        } else if (arr[i] % 2 == 1) {
            arrResult[1].unshift(arr[i]);
        } else if (arr[i] % 3 == 0) {
            arrResult[2].unshift(arr[i]);
        }
    }

    return arrResult;
}

// soal 3
// arr
function sittingArrangement(arr, column) {
    if (column == 0) {
        console.log("invalid number");
    } else {

    }
}

// soal 4
// text
function ladder(text) {
    for (let i = text.length; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (j == 0) {
                console.log("[");
            }
            console.log("'"+text.slice(0, 1)+"' ");
            if (j == i - 1) {
                console.log("}");
            }
        }
    }
}

// soal 5
// arr
function targetTerdekat(arr) {
    for (let i = 0; i < arr.length; i++) {
        
    }
}