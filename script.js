var beerList = [];
var sortFlagName = 0;
var sortFlagCategory = 0;
var sortFlagReview = 0;
$('.post-beer').click(function() {
    addBeer($('.beer-input').val(), $('.category-input').val(), $('.review-select').val());
    $('.beer-input').val('');
    $('.category-input').val('');
    $('.review-select').val('');
    updateBeers();
});
$('.sort-name').click(function() {
	sortFlagName === 0? sortBeersFromDown('name'): sortBeersFromUp('name');
	sortFlagName === 0? sortFlagName=1: sortFlagName=0;
    updateBeers()
});
$('.sort-category').click(function() {
	sortFlagCategory === 0? sortBeersFromDown('category'): sortBeersFromUp('category');
	sortFlagCategory === 0? sortFlagCategory=1: sortFlagCategory=0;
    updateBeers()
});
$('.sort-review').click(function() {
	sortFlagReview === 0? sortBeersFromDown('review'): sortBeersFromUp('review');
	sortFlagReview === 0? sortFlagReview=1: sortFlagReview=0;
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

function sortBeersFromDown(property, flag) {
    var count = 0;
    while (count < beerList.length) {
        count = 1;
        for (var i = 0; i < beerList.length - 1; i++) {
            if (beerList[i][property] > beerList[i + 1][property]) {
                count = 0;
                beerList.splice(i + 2, 0, beerList[i]);
                beerList.splice(i, 1);
            } else {
                count++;
            }
        }
    }
    $('.beers-list').empty();
}
function sortBeersFromUp(property) {
    var count = 0;
    while (count < beerList.length) {
        count = 1;
        for (var i = 0; i < beerList.length - 1; i++) {
            if (beerList[i][property] < beerList[i + 1][property]) {
                count = 0;
                beerList.splice(i, 2, beerList[i+1], beerList[i]);
            } else {
                count++;
            }
        }
    }
    $('.beers-list').empty();
}