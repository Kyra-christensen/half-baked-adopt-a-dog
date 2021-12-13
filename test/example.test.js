// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderDogCard, renderDogDetail } from '../render-utils.js';

const test = QUnit.test;

test('renderDogCard should return a DOM element', (expect) => {
    //Arrange
    let dog =
        {
            name: 'spot',
            breed: 'corgi',
            id: 1,
        };
    // Set up your arguments and expectations
    const expected = '<a href="./detail/?id=1"><div class="dog-card"><p>spot</p><img src="./assets/corgi.jpeg"></div></a>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogCard(dog);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'renderDogCard returns an anchor tag');
});

test ('renderDogDetail should retun a DOM element', (expect) => {
    let dog =
        {
            name: 'spot',
            breed: 'corgi',
            age: 2,
            id: 1,
        };

    const expected = '<div class="dog-detail"><p class="name">spot</p><img src="../assets/corgi.jpeg"><div class="age-and-breed"><p class="age">2 years old</p><p class="breed">corgi</p></div><p class="description"></p></div>';

    const actual = renderDogDetail(dog);

    expect.equal(actual.outerHTML, expected, 'renderDogDetail() returns a DIV');
});
