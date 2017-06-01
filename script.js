var beerList = [];
var upOrDown = 0;
$('.post-beer').click(function() {
    addBeer($('.beer-input').val(), $('.category-input').val(), $('.review-select').val());
    $('.beer-input').val('');
    $('.category-input').val('');
    $('.review-select').val('');
    updateBeers();
});
$('.sort-beer').click(function() {
	upOrDown === 0? sortBeersFromDown(): sortBeersFromUp();
    updateBeers()
});

function addBeer(name, category, review) {
    beerList.push({ 'name': name, 'category': category, 'review': review });
}

function updateBeers() {
    $('.beers-list').empty();
    for (var i = 0; i < beerList.length; i++) {
        $('.beers-list').append('<li>Beer name: ' + beerList[i].name + ', Category: ' + beerList[i].category +
            ', Review: ' + beerList[i].review + '</li>');
    }
}

function sortBeersFromDown() {
    var count = 0;
    while (count < beerList.length) {
        count = 1;
        for (var i = 0; i < beerList.length - 1; i++) {
            if (beerList[i].review > beerList[i + 1].review) {
                count = 0;
                beerList.splice(i + 2, 0, beerList[i]);
                beerList.splice(i, 1);
            } else {
                count++;
            }
        }
    }
    upOrDown=1;
    $('.beers-list').empty();
}
function sortBeersFromUp() {
    var count = 0;
    while (count < beerList.length) {
        count = 1;
        for (var i = 0; i < beerList.length - 1; i++) {
            if (beerList[i].review < beerList[i + 1].review) {
                count = 0;
                beerList.splice(i, 2, beerList[i+1], beerList[i]);
            } else {
                count++;
            }
        }
    }
    upOrDown=0;
    $('.beers-list').empty();
}