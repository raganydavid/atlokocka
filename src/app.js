const doc =  {
    lengthInput: document.querySelector('#length'),
    indexInput: document.querySelector('#index'),
    indexTwoInput: document.querySelector('#indexTwo'),
    calcButton: document.querySelector('#calcButton')
};

const state = {
    index: 0
};

window.addEventListener('load', () => {
    init();
});

function init() {
    if(doc.calcButton) {
    doc.calcButton.addEventListener('click', () => {
        //console.log('működik')
        startCalc();
    });
    }
}

function startCalc() {
    let length= doc.lengthInput.value;
    state.index= calcDiagonal(length);
    state.indexTwo= calcBodyDiagonal(length);
    doc.indexInput.value = state.index;
    doc.indexTwoInput.value = state.indexTwo;
}

function calcDiagonal(length) {
    return length * Math.sqrt(2);
}

function calcBodyDiagonal(length) {
    return length * Math.sqrt(3);
}