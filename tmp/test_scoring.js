import Player from './src/js/models/Player.js';
import Dealer from './src/js/models/Dealer.js';

// Mock getCardValue since we are running in node and it's an ES6 module
// In a real test we'd use a test runner, but for quick verify:
function test() {
    const player = new Player();
    
    // Case 1: [A, 9, 3] -> 13
    player.resetCards();
    player.addCard({ value: 'A' });
    player.addCard({ value: 9 });
    player.addCard({ value: 3 });
    console.log('Test 1 [A, 9, 3]:', player.getScore(), 'Expected: 13');

    // Case 2: [A, 10] -> 21
    player.resetCards();
    player.addCard({ value: 'A' });
    player.addCard({ value: 10 });
    console.log('Test 2 [A, 10]:', player.getScore(), 'Expected: 21');

    // Case 3: [A, A] -> 12
    player.resetCards();
    player.addCard({ value: 'A' });
    player.addCard({ value: 'A' });
    console.log('Test 3 [A, A]:', player.getScore(), 'Expected: 12');

    // Case 4: [A, A, 9] -> 21
    player.resetCards();
    player.addCard({ value: 'A' });
    player.addCard({ value: 'A' });
    player.addCard({ value: 9 });
    console.log('Test 4 [A, A, 9]:', player.getScore(), 'Expected: 21');

    // Case 5: Dealer hidden card [A, 10] (hidden) -> 11
    const dealer = new Dealer();
    dealer.resetCards();
    dealer.addCard({ value: 'A' });
    dealer.addCard({ value: 10 });
    console.log('Test 5 Dealer [A, 10] hidden:', dealer.getScore(true), 'Expected: 11');
    console.log('Test 6 Dealer [A, 10] revealed:', dealer.getScore(false), 'Expected: 21');
}

// Since I can't easily run this due to imports, I'll just rely on code review or try to run it if possible.
// Actually, I can't run it easily without a build tool if it uses imports.
