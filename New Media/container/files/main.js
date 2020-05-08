
			$('.curtain').fadeIn(3000)
			var size = 8;
			var board = $('.board');
			for (var i = size * size -1; i >= 0; i--) {
				board.append('<div id= "square_'+ i +'" class="square"></div>');
			}
			var square_h = parseInt($('.square').css("height").replace(/[^-\d\.]/g, '')) + 0.8;
			var extra_padding = parseInt($('.board-bg').css("padding-top").replace(/[^-\d\.]/g, ''));

			var slider = $('.range-slider');
			var highlighter = $('.highlight');
			highlighter.css("margin-top", (extra_padding + (square_h * (size / 2))) + 'px');
			slider.bind('input', function(){
				let scale = Math.round(this.value * (size - 1 ) / 100);
				highlighter.css("margin-top", extra_padding + square_h * scale + 'px');
			});
			var row_indicator = $('.row_indicator');
			row_indicator.css("width", square_h)
			row_indicator.css("top", extra_padding)
			row_indicator.css('margin-left', board.css("margin-left"))
			for (var i = size; i > 0; i--) {
				row_indicator.append('<div id= "row_'+ i +'" class="indicator"><p>' + (i) + '</p></div>');
			}
			$('.indicator').css('height', square_h)
			function increaseValue() {
				var value = parseInt(document.getElementById('number').value, 10);
				value = isNaN(value) ? 0 : value;
				value > 7 ? value = 7 : '';
				value++;
				document.getElementById('number').value = value;
			}
			function decreaseValue() {
				var value = parseInt(document.getElementById('number').value, 10);
				value = isNaN(value) ? 0 : value;
				value < 2 ? value = 2 : '';
				value--;
				document.getElementById('number').value = value;
			}
			var on = document.addEventListener.bind(document);
			var cursorxmouse, cursorymouse;
			on('mousemove', function (e) {
				cursorxmouse = e.clientX || e.pageX;
				cursorymouse = e.clientY || e.pageY;
			});
			var ball = $('#ball');
			var cursorx = 0,
			cursory = 0,
			dcursorx = 0,
			dcursory = 0,
			key = -1;
			var followMouse = function followMouse() {
				key = requestAnimationFrame(followMouse);
				if(!cursorx || !cursory) {
					cursorx = cursorxmouse;
					cursory = cursorymouse;
				} else {
					dcursorx = (cursorxmouse - cursorx) * 0.125;
					dcursory = (cursorymouse - cursory) * 0.125;
					if(Math.abs(dcursorx) + Math.abs(dcursory) < 0.1) {
						cursorx = cursorxmouse;
						cursory = cursorymouse;
					} else {
						cursorx += dcursorx;
						cursory += dcursory;
					}
				}
				cursorx = cursorx + 50 > $( document ).width() ? $( document ).width() - 50  : cursorx;
				cursory = cursory + 50 > $( document ).height() ? $( document ).height() - 50 : cursory;
				ball.css("left", cursorx + 'px');
				ball.css("top", cursory + 'px');
			};
			function animateFace(expression){
				switch(expression) {
					case 0:
						$('.robo-eyes').children().each(function() {
							$(this).removeClass($(this).attr('class').split(' ').pop()).addClass('eyeball')
						})
						$('.robo').hasClass('hop')
							?$('.robo').removeClass('hop')
							:null
						$('.robo').hasClass('semi-rotate')
							?$('.robo').removeClass('semi-rotate')
							:null
						$('.robo').addClass('robo-hover')
						break
					case 1:
						$('.robo-eyes').children().each(function() {
							$(this).addClass('happy-eyeball')
							$(this).hasClass('eyeball')
								?$(this).removeClass('eyeball')
								:null
						})
						$('.robo').addClass('hop')
						$('.robo').hasClass('robo-hover')
							?$('.robo').removeClass('robo-hover')
							:null
						break
					case 2:
						$('.robo-eyes').children().each(function() {
							$(this).addClass('sad-eyeball')
							$(this).hasClass('eyeball')
								?$(this).removeClass('eyeball')
								:null
						})
						$('.robo').addClass('semi-rotate')
						$('.robo').hasClass('robo-hover')
							?$('.robo').removeClass('robo-hover')
							:null
						break
				}
			}
			function getImage(i) {
				images = {
					0: {
						name: 'flag',
						desc: {
							'english': 'our flag',
							'dutch': ''
						},
						img: [
							[2,2,2,2,2,2,2,2],
							[2,1,1,1,1,1,1,2],
							[2,1,1,1,1,1,1,2],
							[2,0,0,0,0,0,0,2],
							[2,0,0,0,0,0,0,2],
							[2,5,5,5,5,5,5,2],
							[2,5,5,5,5,5,5,2],
							[2,2,2,2,2,2,2,2]
						]
					},
					1: {
						name: 'fruit',
						desc: {
							'english': 'fruits',
							'dutch': ''
						},
						img: [
							[0,0,0,0,4,4,0,0],
							[0,0,0,0,0,3,0,0],
							[0,0,0,0,0,3,3,0],
							[0,0,0,0,0,3,4,4],
							[3,0,0,0,3,1,1,0],
							[3,3,3,3,1,1,1,1],
							[0,3,3,3,1,1,1,1],
							[0,0,0,0,0,1,1,0]
						]
					},
					2: {
						name: 'flower',
						desc: {
							'english': 'flowers',
							'dutch': ''
						},
						img: [
							[0,0,0,0,0,5,6,5],
							[5,6,5,0,0,6,3,6],
							[6,3,6,0,0,5,6,5],
							[5,6,5,2,1,2,4,0],
							[0,4,0,1,3,1,4,0],
							[0,4,0,2,1,2,0,0],
							[0,0,0,0,4,0,0,0],
							[0,0,0,0,4,0,0,0]
						]
					},
					3: {
						name: 'lion',
						desc: {
							'english': 'a lion',
							'dutch': ''
						},
						img: [
							[0,1,1,1,1,1,1,0],
							[1,3,3,1,1,3,3,1],
							[1,3,3,3,3,3,3,1],
							[1,1,5,3,3,5,1,1],
							[1,1,3,3,3,3,1,1],
							[1,1,3,2,2,3,1,1],
							[0,1,1,3,3,1,1,0],
							[0,0,1,1,1,1,0,0]
						]
					},
					4: {
						name: 'rainbow',
						desc: {
							'english': 'a rainbow',
							'dutch': ''
						},
						img: [
							[0,0,0,1,1,0,0,0],
							[0,1,1,2,2,1,1,0],
							[1,2,2,3,3,2,2,1],
							[2,3,3,4,4,3,3,2],
							[3,4,4,5,5,4,4,3],
							[4,5,5,6,6,5,5,4],
							[5,6,6,0,0,6,6,5],
							[6,0,0,0,0,0,0,6]
						]
					}
				}
				return images[i]
			}
			let searchParams = new URLSearchParams(window.location.search)
			var img_id = searchParams.has('mode') ?  searchParams.get('mode') : 0
			var lvl = searchParams.has('level') ?  searchParams.get('level') : 0
			var picked = false;
			var locked = false
			var target_img = getImage(img_id).img
			var board_state = [
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0]
			]
			function getColours() {
				return {
					0:'white',
					1:'red',
					2:'orange',
					3:'yellow',
					4:'green',
					5:'blue',
					6:'purple'
				}
			}
			function getNoise(lvl, target_row) {
				var noise = 0;
				switch(parseInt(lvl)) {
					case 1:
						noise = getRandomNumber(-1, 2)
						noise = noise == 2 ? 0 : noise
						if(noise!=0) {
							noise = target_row + noise > 7 ? -1 : noise
							noise = target_row + noise < 1 ? 1 : noise
						}
						break
					case 2:
						noise = getRandomNumber(0, 7)
						while (noise==target_row) {
							noise = getRandomNumber(0, 7)
						}
						noise -= target_row
						break
				}
				return noise
			}
			function numberToPrint(number) {
				if (lang == 'en') {
					switch(number){
						case 0:
							return ((number + 1) + 'st')
						case 1:
							return ((number + 1) + 'nd')
						case 2:
							return ((number + 1) + 'rd')
						default:
							return ((number + 1) + 'th')
					}
				}
				else {
					switch(number){
						case 1:
							return ((number + 1) + 'ste')
						case 8:
							return ((number + 1) + 'ste')
						default:
							return ((number + 1) + 'de')
					}
				}
			}
			function getKeyByValue(object, value) {
				return Object.keys(object).find(key => object[key] === value);
			}
			function getRandomNumber(min, max) {
			    return Math.floor(Math.random() * (max - min + 1)) + min;
			}
			function rowOccupied(check_row) {
				for (var i = 0; i < size; i++) {
					if (board_state[check_row][i] != target_img[check_row][i])
						return false
				}
				return true
			}
			function squareOccupiedOrWhite(check_row, check_col) {
				return board_state[check_row][check_col] != 0 || target_img[check_row][check_col] == 0
			}
			function imageFilled() {
				return board_state.toString() == target_img.toString()
			}
			function popColour(obj) {
				if (obj.attr('class').split(' ').length > 1) {
					obj.removeClass(obj.attr('class').split(' ').pop());
				}
			}
			function highlightRow(x) {
				var highlighter = $('.highlight');
				var square_h = parseInt($('.square').css("height").replace(/[^-\d\.]/g, '')) + 0.8;
				var extra_padding = parseInt($('.board-bg').css("padding-top").replace(/[^-\d\.]/g, ''));
				highlighter.css("margin-top", extra_padding + square_h * (size-x-1) + 'px');
				highlighter.fadeIn(900);
			}
			function getHandlers() {
				return [$('#dialogue-next'), $('#positive'), $('#negative'), $('.numberinput-btn'), $('.square'), $('.option')]
			}
			early_game()
			function early_game() {
				$('#text-area').text(script[lang][0][0])
				$('#next-area').fadeIn(900)
				$('#dialogue-next').click(function() {
					$('#next-area').fadeOut(400, function() {
						$('#dialogue-next').unbind()
							mid_game()
						})
				});
			}
			function mid_game() {
				$('#next-area').fadeOut(400, function () {
					var req_row = size - getRandomNumber(0, 7) - 1
					while(rowOccupied(req_row)) {
						req_row = size - getRandomNumber(0, 7) - 1
					}
					var noise = getNoise(lvl, req_row)
					highlightRow(req_row)
					$('#text-area').text(script[lang][1][0] + numberToPrint(req_row + noise) + script[lang][1][1])
					$('#button-area').fadeIn(900)
					if(noise!=0) {
						$('#positive').click( function() {
							$('#button-area').fadeOut(400, function () {
								$('#text-area').text(script[lang][2][0])
								trialRow(req_row)
							})
						})
						$('#negative').click( function() {
							$('#button-area').fadeOut(400, function () {
								$('#text-area').text(script[lang][3][0])
								trialRow(req_row)
							})
						})
					}
					else {
						$('#positive').click( function() {
							$('#button-area').fadeOut(400, function () {
								animateFace(1)
								$('#text-area').text(script[lang][4][0] + numberToPrint(req_row) + script[lang][4][1])
								$('#next-area').fadeIn(900)
								$('#dialogue-next').click(function() {
									animateFace(0)
									$('#dialogue-next').unbind()
									$('#next-area').fadeOut(400, function () {
										insideRow(req_row)
									})
								});
							})
						})
						$('#negative').click( function() {
							$('#button-area').fadeOut(400, function () {
								$('#text-area').text(script[lang][5][0] + numberToPrint(req_row) + script[lang][5][1])
								$('#next-area').fadeIn(900)
								$('#dialogue-next').click(function() {
									$('#next-area').fadeOut(400, function () {
										insideRow(req_row)
									})
									
								});
							})
						})
					}
				});
			}
			function end_game() {
				$('#next-area').fadeOut(400, function () {
					animateFace(1)
					$('#text-area').text(script[lang][6][0] + getImage(img_id).desc[lang] + script[lang][6][1])
					$('#next-area').fadeIn(900)
					$('#dialogue-next').click(function() {
						animateFace(0)
						$('#dialogue-next').unbind()
						$('#next-area').fadeOut(400, function () {
							$('#text-area').text(script[lang][7][0])
							$('#next-area').fadeIn(900)
							$('#dialogue-next').click(function() {
								$('#dialogue-next').unbind()
								$('.curtain').fadeOut(2000, function() {
									$('#ball-area').fadeIn(900)
									$('#next-area').fadeOut(400)
									$('.curtain').fadeIn(1500)
									sandbox_mode()
								})
							})
						})
					})
				})
			}
			function insideRow(req_row){
				colours = getColours()
				var req_col = getRandomNumber(0, 7)
				while(squareOccupiedOrWhite(req_row, req_col)) {
					req_col = getRandomNumber(0, 7)
				}
				var req_colour = target_img[req_row][req_col]
				$('.highlight').fadeOut(400)
				$('#text-area').text(script[lang][8][0] + colours[req_colour] + script[lang][8][1] + numberToPrint(req_col) + script[lang][8][2] + numberToPrint(req_row)  + script[lang][8][3])
				$('#ball-area').fadeIn(900)
				trialColour(req_row, req_col, req_colour)
			}
			function trialRow(req_row, t_counter = 0) {
				$('#numberinput-area').fadeIn(900)
				$('.numberinput-btn').click(function() {
					if (t_counter==1) {
						row_indicator.fadeIn(900)
					}
					if (t_counter==2) {
						$('#numberinput-area').fadeOut(400, function () {
							$('#text-area').text(script[lang][9][0] + numberToPrint(req_row) + script[lang][9][1])
							$('#next-area').fadeIn(900)
							$('#dialogue-next').click(function() {
								$('#next-area').fadeOut(400, function () {
									row_indicator.fadeOut(400)
									$('#dialogue-next').unbind()
									insideRow(req_row)
								});
							})
						})
					}
					else if (($('#number').val()-1)==req_row) {
						$('#text-area').text(script[lang][10][0] + numberToPrint(req_row) + script[lang][10][1])
						animateFace(2)
						$('#numberinput-area').fadeOut(400, function () {
							$('#next-area').fadeIn(900)
							$('#dialogue-next').click(function() {
								row_indicator.fadeOut(400)
								animateFace(0)
								$('#dialogue-next').unbind()
								$('#next-area').fadeOut(400, function () {
									insideRow(req_row)
								})
							});
						})
					} else if ( ($('#number').val()-1) != req_row || t_counter < 2) {
						$('#numberinput-area').fadeOut(400, function () {
						t_counter = t_counter + 1
						$('#text-area').text(script[lang][11][0])
							$('#next-area').fadeIn(900)
							animateFace(2)
							$('#dialogue-next').click(function() {
								animateFace(0)
								$('#dialogue-next').unbind()
								$('#next-area').fadeOut(400, function () {
									$('#text-area').text(script[lang][12][0])
									$('#numberinput-area').fadeIn(900)
								});
							});
						})
					}
				})
			}
			function trialCol(req_row, req_col, req_colour, picked){
				colours = getColours()
				$('.square').click(function() {
					var curr_square = this
					if(picked) {
						popColour($('#'+curr_square.id))
						$('#'+curr_square.id).addClass($('#ball').attr('class'));
						$('#ball').fadeOut(400, function() {
							$('#ball').removeClass();
							picked = false
							locked = true
							if(req_row != parseInt(curr_square.id.split('_')[1]/8)) {
								$('#text-area').text(script[lang][13][0] + numberToPrint(req_row) + script[lang][13][1] + numberToPrint(parseInt(curr_square.id.split('_')[1]/8)) + script[lang][13][2])
								animateFace(2)
								row_indicator.fadeIn(2500, function() {
									row_indicator.fadeOut(2500)
								})
								$('#next-area').fadeIn(900)
								$('#dialogue-next').click(function() {
									animateFace(0)
									$('#dialogue-next').unbind()
									$('#next-area').fadeOut(400, function() {
										popColour($('#'+curr_square.id))
										$('#text-area').text(script[lang][14][0] + colours[req_colour] + script[lang][14][1] + numberToPrint(req_col) + script[lang][14][2] + numberToPrint(req_row) + script[lang][14][3])
										locked = false
									})
								})
							}
							else if(req_col == ( size - curr_square.id.split('_')[1] % 8 -1)) {
								$('#ball-area').fadeOut(400, function() {
									$('#text-area').text(script[lang][15][0])
									animateFace(1)
									board_state[req_row][req_col] =  target_img[req_row][req_col]
									$('#next-area').fadeIn(900)
									$('#dialogue-next').click(function() {
										animateFace(0)
										getHandlers().map(x => x.unbind())
										$('#next-area').fadeOut(400, function () {
											if (!imageFilled()) {
												$('#text-area').text(script[lang][16][0])
												$('#next-area').fadeIn(900)
												$('#dialogue-next').click(function() {
													$('#dialogue-next').unbind();
													locked = false
													mid_game()
												});
											}
											else {
												end_game()
											}
										})
									});
								})
							}
							else {
								$('#text-area').text(script[lang][17][0]
									+ numberToPrint( size - curr_square.id.split('_')[1] % 8 - 1) + script[lang][17][1])
								$('#next-area').fadeIn(900)
								$('#dialogue-next').click(function() {
									$('#dialogue-next').unbind()
									$('#next-area').fadeOut(400, function() {
										let target_square = $('#square_' + (req_row*size+size-req_col-1))
										target_square.addClass('blink')
										target_square.fadeTo(600, 1, function() {
											target_square.fadeTo(600, 0.2, function() {
												target_square.removeClass('blink')
												target_square.removeAttr('style');
											})
										})
										popColour($('#'+curr_square.id))
										$('#text-area').text(script[lang][14][0] + colours[req_colour] + script[lang][14][1] + numberToPrint(req_col) + script[lang][14][2] + numberToPrint(req_row) + script[lang][14][3])
										locked = false
									})
								});
							}
						})
					}
				})
			}
			function trialColour(req_row, req_col, req_colour){
				colours = getColours()
				$('.option').click(function() {
					if(!locked){
						var chosen_colour = getKeyByValue(colours, this.className.split(/\s+/)[1].split('-')[0])
						$('#ball').removeClass();
						$('#ball').fadeIn(900)
						$('#ball').addClass(this.className.split(/\s+/)[1])
						picked = true
						if(req_colour != chosen_colour) {
							$('#text-area').text(script[lang][18][0] + colours[req_colour] + script[lang][18][1])
							$('#ball').fadeOut(400, function() {
								picked = false
								locked = false
							})
						}
						else {
							$('#text-area').text(script[lang][19][0] + colours[req_colour] + script[lang][19][1] + numberToPrint(req_col) + script[lang][19][2] + numberToPrint(req_row) + script[lang][19][3])
							locked = true
							trialCol(req_row, req_col, req_colour, picked)
						}
					}
				})
			}
			function sandbox_mode() {
				getHandlers().map(x => {x.unbind()})
				$('.square').each(function(){
					popColour($(this))
				})
				$('#text-area').text(script[lang][20][0])
				$('.option').click(function() {
					$('#ball').removeClass();
					$('#ball').css('display', 'block');
					$('#ball').addClass(this.className.split(/\s+/)[1]);
					picked = true;
				})
				$('.square').click(function() {
					if(picked) {
						popColour($(this))
						$('#'+this.id).addClass($('#ball').attr('class'));
						$('#ball').css('display', 'none');
						$('#ball').removeClass();
					}
					else {
						popColour($(this))
					}
				});
			}