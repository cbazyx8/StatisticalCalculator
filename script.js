// Function to calculate the mean of the given numbers
function calculateMean(numbers) {
    // Step 1: Summation
    var sum = numbers.reduce((acc, cur) => acc + cur, 0);
    
    // Step 2: Mean Calculation
    return sum / numbers.length; // Step 3: Mean Calculation
}

// Function to calculate the mode of the given numbers
function calculateMode(numbers) {
    // Step 1: Frequency Count
    var modeMap = {};
    var maxCount = 0;
    var modes = [];

    numbers.forEach(function (number) {
        if (!modeMap[number]) modeMap[number] = 0;
        modeMap[number]++;
        // Step 2: Find Maximum Frequency
        if (modeMap[number] > maxCount) {
            modes = [number];
            maxCount = modeMap[number];
        } else if (modeMap[number] === maxCount) {
            modes.push(number);
        }
    });

    // Step 4: Output
    return modes.join(", ");
}

// Function to calculate the median of the given numbers
function calculateMedian(numbers) {
    // Step 2: Sort the Numbers
    var sorted = numbers.sort((a, b) => a - b);
    var mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        // Step 3: Determine Median Position (even)
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        // Step 3: Determine Median Position (odd)
        return sorted[mid];
    }
}

// Function to calculate the range of the given numbers
function calculateRange(numbers) {
    // Step 2: Find Minimum and Maximum
    var min = Math.min(...numbers);
    var max = Math.max(...numbers);
    // Step 3: Calculate Range
    return max - min; // Step 3: Calculate Range
}

// Function triggered when the user clicks the "Calculate" button
function calculate() {
    var numbersInput = document.getElementById("numbers").value;
    var numbersArray = numbersInput.split(",").map(Number);
    var mean = calculateMean(numbersArray);
    var mode = calculateMode(numbersArray);
    var median = calculateMedian(numbersArray);
    var range = calculateRange(numbersArray);

    // Construct the HTML content to display explanations and results
    var outputHTML = `
        <p><strong>Mean:</strong> Sum all numbers and divide by the count of numbers.</p>
        <p><strong>Mode:</strong> Identify the number(s) that appear most frequently.</p>
        <p><strong>Median:</strong> Arrange numbers in ascending order and find the middle value(s).</p>
        <p><strong>Range:</strong> Subtract the smallest number from the largest number.</p>
        <hr>
        <p><strong>Mean:</strong> ${mean}</p>
        <p><strong>Mode:</strong> ${mode}</p>
        <p><strong>Median:</strong> ${median}</p>
        <p><strong>Range:</strong> ${range}</p>
    `;

    // Display the explanations and results on the webpage
    document.getElementById("results").innerHTML = outputHTML;
}


