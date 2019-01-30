const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const monologueLines = [
  'Who are you talking to right now?',
  'Who is it you think you see?',
  'Do you know how much I make a year?',
  'I mean, even if I told you, you wouldn\'t believe it.',
  'Do you know what would happen if I suddenly decided to stop going into work?',
  'A business big enough that it could be listed on the NASDAQ goes belly up.',
  'Disappears!',
  'It ceases to exist without me.',
  'No, you clearly don\'t know who you\'re talking to, so let me clue you in.',
  'I am not in danger, Skyler.',
  'I am the danger.',
  'A guy opens his door and gets shot and you think that of me?',
  'No.',
  'I am the one who knocks!'
];

var totalBatteries = batteryBatches.reduce(batteryCounter, 0)

function batteryCounter(totalAmount, batch) {
    return totalAmount + batch;
}
// I was stuck on this so I checked the solution, this is the solution given, rewrote to try and understand as a full function
// var wordCountMap = monologueLines.reduce( (map, sentence) => {
//     const wordCount = sentence.split(" ").length;
//
//     if (!map[wordCount]) {
//         map[wordCount] = 0;
//     }
//     map[wordCount]++;
//
//     return map
// }, {})

var wordCountMap = monologueLines.reduce(wordCounter, {})

function wordCounter(map, sentence) {
    const wordCount = sentence.split(" ").length;

    if (!map[wordCount]) {
        map[wordCount] = 0;
    }
    map[wordCount]++;

    return map
}
