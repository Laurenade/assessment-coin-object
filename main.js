/*
Criteria:
    --- Finish the flip method so that it randomly sets your coin object's 
        "state" property to be either 0 or 1.
    --- Finish the toString method so that it returns the string "Heads" 
        or "Tails", depending on whether "this.state" is 0 or 1.
    --- Finish the toHtml method so that it sets the properties of the 
        image element to show either face-up or face-down, depending 
        on whether this.state is 0 or 1.

    --- Write a function called display20Flips that uses a loop to flip 
        the coin 20 times. Each time the coin flips, display the result 
        of each flip as a string on the page (make use of your 
        toString() method).
    --- Write a function called display20Images, again using a loop to 
        flip the coin 20 times…but this time instead of displaying the 
        result as a string, display the result of each flip as an 
        HTML IMG element on the page (make use of your toHTML() method).
*/

const parentElementMain = document.querySelector ('.main')

let coin = {
    state: 0,
    flip: function() {
        this.state = Math.round(Math.random())
                                    /* 1. Randomly set your coin object's "state" property to be either 
                                        0 or 1: use "this.state" to access the "state" property on this object. */
    },
    toString: function() {
        if (this.state === 1) {
            return 'Heads'
        } else {
            return 'Tails'
        }
                                    /* 2. Return the string "Heads" or "Tails", depending on whether
                                        "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
        if (this.state === 1) {
            image.src = './images/cat-heads-coin.jpg'
        } else {
            image.src = './images/cat-tails-coin.jpg'
        }
                                    /* 3. Set the properties of this image element to show either face-up
                                        or face-down, depending on whether this.state is 0 or 1. */
        return image;
    }
};

const div = document.createElement('div')

function display20Flips() {
    for (let counter = 0; counter < 20; counter += 1) {
        coin.flip()
        parentElementMain.append(div)
        div.append(coin.toString())
    }
}

function display20Images() {
    for (let counter = 0; counter < 20; counter += 1) {
        coin.flip()
        parentElementMain.append(div)
        div.append(coin.toHTML())
    }
}
