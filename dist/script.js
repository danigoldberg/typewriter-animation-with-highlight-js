var target = document.getElementById('code');

// Highlight the code
hljs.highlightElement(target);

// Get all the child nodes
var children = Object.values(document.getElementById('code').childNodes);

// Empty the target
target.innerText = '';

// And start the animation from the first node
type(0);

function type(i) {
    // Little helper
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // Make the content visible
    if (i === 0) {
        target.style.visibility = 'visible';
    }

    // When we've displayed all the nodes
    // Just start over
    if (i >= children.length) {
        i = 0;
        target.innerText = '';
    }

    // Append each node to the target code placeholder
    // And scroll that div if the code scrolls past it
    if (children.hasOwnProperty(i)) {
        target.appendChild(children[i]);

        target.scrollTop = target.scrollHeight;
    }

    // Step to the next node
    i++;

    // Repeat the process
    // after a variable amount of time
    setTimeout(function () {
        type(i);
    }, randomNumber(200, 500));
}

// You made it this far, yay
// see it in action in my site
// https://genijaho.dev