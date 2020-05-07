var lang='en'
$('#lang-selector').click( function() {
	$(this).fadeOut(800, function() {
		if($(this).css('background-image').includes('uk-icon.png')) {
			lang = 'nl'
			$(this).css('background-image','url("../images/nl-icon.png")')
		}
		else {
			lang = 'en'
			$(this).css('background-image','url("../images/uk-icon.png")')
		}
		$(this).fadeIn(400)
	})
})
var script = {
	'en': [
		['Intro text'],
		['I think this is the ', ' row. Do you think so too?'],
		['Oh no, wait! I think I was wrong after all. Which row would this one be?'],
		['Then which row do you think this is?'],
		['Yes we agree! That is indeed the ', ' row!'],
		['Oh wait. I think I was right. That is indeed the ', ' row.'],
		['Wow! What a beautiful picture we have drawn! I think I can see ', ' in the picture!'],
		['I think we have enough time left to draw some more! Follow me!'],
		['Place the ', ' ball in the ', ' position of the ', ' row.'],
		['Oh, now I see! It is actually the ', ' row!'],
		['You are right! Silly me! It is indeed the ', ' row!'],
		['Oh, that is not quite right. Let us try again!'],
		['Which row do you think that is?'],
		['This can\'t be the ', ' row! I think that\'s the ', ' row.'],
		['Place the ', ' ball in the ', ' square of the ', ' row.'],
		['Yay! We did it!'],
		['Let\'s keep going!'],
		['That is not the right square! I believe that is the ', ' square. Let\'s try again!'],
		['I don\'t think that is the ', ' ball!'],
		['You picked the ', ' ball! Now place it in the ', ' square of the ', ' row.'],
		['Welcome to the sandbox mode! We can play as much you would like here!']
	],
	'nl':[
		['ToDo '],
		['ToDo ', ' ToDo'],
		['ToDo '],
		['ToDo '],
		['ToDo ', ' ToDo'],
		['ToDo ', ' ToDo'],
		['ToDo ', ' ToDo'],
		['ToDo '],
		['ToDo ', ' ToDo ', ' ToDo ', ' ToDo'],
		['ToDo ', ' ToDo'],
		['ToDo ', ' ToDo'],
		['ToDo '],
		['ToDo '],
		['ToDo ', ' ToDo ', ' ToDo'],
		['ToDo ', ' ToDo ', ' ToDo ', ' ToDo'],
		['ToDo '],
		['ToDo '],
		['ToDo ', ' ToDo'],
		['ToDo ', ' ToDo'],
		['ToDo ', ' ToDo ', ' ToDo ', ' ToDo'],
		['ToDo ']
	]
}