import { processReaction } from '../engine/engine.js';

window.calculate = () => {
    const input = document.getElementById('reactionInput').value;
    const result = processReaction(input);
    document.getElementById('output').textContent = JSON.stringify(result, null, 2);
}