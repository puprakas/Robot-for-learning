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
		$('#positive .away').text(script[lang]['positive_away']);
		$('#positive .over').text(script[lang]['positive_over']);
		$('#negative .away').text(script[lang]['negative_away']);
		$('#negative .over').text(script[lang]['negative_over']);
		$('#dialogue-next').text(script[lang]['dialogue_next']);
		$(this).fadeIn(400)
	})
})
var script = {
	'en': {
		'text_0': ['Hello! My name is Bob the Blob. I want to play a game. In my world, we create things with colored balls. I want to make something pretty, but I need your help. You can help me create a beautiful image with the balls. Can you help me place them in the correct spots?'],
		'text_1': ['I think this is row #ROW#. Do you think so too?'],
		'text_2': ['Oh no, wait! I think I was wrong after all. Which row would this one be?'],
		'text_3': ['Then which row do you think this is?'],
		'text_4': ['Yes we agree! That is indeed row #ROW#'],
		'text_5': ['Oh wait. I think I was right. That is indeed row #ROW#'],
		'text_6': ['Wow! What a beautiful picture we have drawn! I think I can see #DESC# in the picture!'],
		'text_7': ['I think we have enough time left to draw some more! Follow me!'],
		'text_8': ['Place the #COLOUR# ball in position #COL# of row #ROW#.', 'Place the #COLOUR# ball in square #COL# of row #ROW#.'],
		'text_9': ['Oh, now I see! It is actually row #ROW#!'],
		'text_10': ['You are right! Silly me! It is indeed row #ROW#!'],
		'text_11': ['Oh, that is not quite right. Let us try again!'],
		'text_12': ['Which row do you think that is?'],
		'text_13': ['This can\'t be row #ROW1#! I think that\'s row #ROW2#.'],
		'text_15': ['Yay! We did it!'],
		'text_16': ['Let\'s keep going!'],
		'text_17': ['That is not the right square! I believe that is square #COL#. Let\'s try again!'],
		'text_18': ['I don\'t think that is the #COLOUR# ball!'],
		'text_19': ['You picked the #COLOUR# ball! Now place it in square #COL# of row #ROW#.'],
		'text_20': ['Welcome to the sandbox mode! We can play as much you would like here!'],
		'text_21': ['I\'m going to select some rows, and you can put the balls in. But I\'m not sure if I\'ve got the number right. Can you help me with that? I know the bottom row is row 1, and the top row is row 8.'],
		'positive_away': 'Yes',
		'positive_over': 'That is right!',
		'negative_away': 'No',
		'negative_over': 'That is wrong!',
		'dialogue_next': 'Next \u00bb'
	},
	'nl':{
		'text_0': ['Hoi fijn dat je er bent, ik ben Bob de Blob! In mijn wereld maken we alles met mooie gekleurde ballen. Er is iets moois dat ik wil maken maar ik heb jouw hulp nodig. Met de ballen kan jij me helpen een mooi plaatje te maken. Kun jij me helpen de ballen op de goede plek te leggen?'],
		'text_1': ['Ik denk dat dit rij #ROW# is. Denk jij dat ook?', 'Volgens mij is dit rij #ROW#. Denk jij dat ook?'],
		'text_2': ['Wacht! Volgens mij had ik het toch fout. Welke rij denk jij dat het is?'],
		'text_3': ['Welke rij denk jij dan dat het is?', 'Welke rij is het dan wel?'],
		'text_4': ['Ja, dat dacht ik ook! Dit is inderdaad rij #ROW#!'],
		'text_5': ['Oh, wacht. Volgens mij had ik toch gelijk. Het is inderdaad rij #ROW#.'],
		'text_6': ['Wauw! We hebben een heel mooi plaatje gemaakt! Ik denk dat ik #DESC# zie!'],
		'text_7': ['We hebben nog wat tijd om meer plaatjes te maken. Volg mij!'],
		'text_8': ['Stop de #COLOUR# bal op plek #COL# van rij #ROW#.', 'Plaats de #COLOUR# bal op plek #COL# van rij #ROW#.'],
		'text_9': ['Oh, ik weet het! Het is rij #ROW#!'],
		'text_10': ['Je hebt gelijk! Wat dom van me. Het is inderdaad rij #ROW#!', 'Dat klopt! Ik had het fout. Het is inderdaad rij #ROW#!'],
		'text_11': ['Oh, volgens mij klopt dat ook niet. Laten we het opnieuw proberen!'],
		'text_12': ['Welke rij zou het wel kunnen zijn?'],
		'text_13': ['Volgens mij is dat niet rij #ROW1#! Ik denk dat het rij #ROW2# is.'],
		'text_15': ['Ja! Het is gelukt!'],
		'text_16': ['Laten we er nog een doen!', 'Kom, we pakken nog een bal.'],
		'text_17': ['Dat is niet de goede plek! Volgens mij is dat plek #COL#.', 'Dat is de verkeerde plek! Je hebt plek #COL# gekozen.'],
		'text_18': ['Ik denk niet dat je de #COLOUR# bal hebt gepakt.', 'Dat is de verkeerde kleur. Kun je de #COLOUR# bal pakken?'],
		'text_19': ['Ja, dat is de #COLOUR# bal! Plaats hem nu op plek #COL# van rij #ROW#.'],
		'text_20': ['Welkom bij het speelplein! Hier kunnen we zoveel plaatjes maken als we willen!'],
		'text_21': ['Ik ga wat rijen kiezen, en jij kunt dan de ballen op de goede plek leggen. Maar ik weet niet of ik de getallen goed begrijp. Kun jij me daarmee helpen? Ik weet dat de onderste rij 1 is, en de bovenste rij 8.'],
		'positive_away': 'Ja',
		'positive_over': 'Dat klopt!',
		'negative_away': 'Nee',
		'negative_over': 'Dat is fout!',
		'dialogue_next': 'Volgende \u00bb'
	}
}