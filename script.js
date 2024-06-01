document.addEventListener("DOMContentLoaded", function() {
    const pascalsTriangle = document.getElementById('pascals-triangle');
    const mirrorTriangle = document.getElementById('mirror-triangle');

    function generatePascalsTriangle(rows) {
        let triangle = [];
        for (let row = 0; row < rows; row++) {
            triangle[row] = [1];
            for (let col = 1; col < row; col++) {
                triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
            }
            if (row > 0) {
                triangle[row].push(1);
            }
        }
        return triangle;
    }

    function renderTriangle(triangle, container) {
        triangle.forEach((row) => {
            let rowDiv = document.createElement('div');
            rowDiv.className = 'row';
            row.forEach(cell => {
                let cellDiv = document.createElement('div');
                cellDiv.className = 'cell';
                cellDiv.textContent = cell;
                rowDiv.appendChild(cellDiv);
            });
            container.appendChild(rowDiv);
        });
    }

    function generateMirrorTriangle(triangle) {
        return triangle.slice().reverse();
    }

    const numberOfRows = 7;
    const triangle = generatePascalsTriangle(numberOfRows);
    renderTriangle(triangle, pascalsTriangle);

    const mirroredTriangle = generateMirrorTriangle(triangle);
    renderTriangle(mirroredTriangle, mirrorTriangle);
});