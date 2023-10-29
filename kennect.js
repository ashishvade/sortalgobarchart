

function changeSize() {
    Bar()
    const newSize = sizeSlider.value;
    createBars(newSize);
}
           const array=[20,30,40,50,44,44,64,56];
        function createBars(size) {
//   let size=8;
Bar()
    for (let i = 0; i < size; i++) {
        let barHeight = Math.floor(Math.random() * 300) + 50; // Random height between 50 and 350
        array[i]=barHeight;

      
    }
    console.log("createbar "+array)
   return array;
  
}
function bubbleSort(array) {
    Bar()
    changeSize()
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}
function quickSort(array) {
    Bar()
    if (array.length <= 1) {
        return array;
    }
    const pivot = array[array.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

function selectionSort(array) {
    Bar()
    my
    let len = array.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [array[i], array[min]] = [array[min], array[i]];
        }
    }
    
    return array;
}

function mergeSort(array) {
    Bar();
    if (array.length <= 1) {
        return array;
    }
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
   
    let result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}
function shellSort(array) {
    Bar()
    let len = array.length;
    for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < len; i++) {
            let temp = array[i];
            let j;
            for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                array[j] = array[j - gap];
            }
            array[j] = temp;
        }
    }
    return array;
}



function insertionSort(array) {
    Bar()
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    console.log(array)
  //   return array;
  }
function Bar(){

    Highcharts.chart('container',{
        chart: {
            type: 'column'
        },
        title: {
            text: 'Sorting Algoritham'
        },
        subtitle: {
            text: 'Source: <a href="" target="_blank">Ashish Vade ashishvade1999@gmail.com</a>'
        },
        xAxis: {
            type: 'category',
            labels: {
                autoRotation: [-45, -90],
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Heights in cm'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Heigth of bar is: <b>{point.y:.1f} cm</b>'
        },
        series: [{
            name: 'Height',
            colors: [
                '#9b20d9', '#9215ac', '#861ec9', '#7a17e6', '#7010f9', '#691af3',
                '#6225ed', '#5b30e7', '#533be1', '#4c46db', '#4551d5', '#3e5ccf',
                '#3667c9', '#2f72c3', '#277dbd', '#1f88b7', '#1693b1', '#0a9eaa',
                '#03c69b',  '#00f194'
            ],
            colorByPoint: true,
            groupPadding: 0,
            
    
        
            data:  array.map((value, index) => [ value]),
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    
    });
    
}



