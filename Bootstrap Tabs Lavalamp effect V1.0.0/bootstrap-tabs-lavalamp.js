$(document).ready(function(){
	//Settings
	var tabsContainerClass = 'nav-tabs';
	var lavalampWalkerClass = 'lavalamp-walker';

	//Add lavalamp walker list item
	$('.'+tabsContainerClass).append('<li class="'+lavalampWalkerClass+'"></li>');

	//Get tabs height
	var tabsHeight = $('.'+tabsContainerClass).height();
	console.log(tabsHeight);
	//Set the walker's height depending on tabs height
	$('.'+lavalampWalkerClass).height(tabsHeight);

	//Get current list item's width
	function getListWidth(item){
		var currentListWidth = $('.'+tabsContainerClass).find(item).width();
		return currentListWidth;
	}


	//wake the walker
	function wakeTheWalker(item, event){

		//get current active list's left position & width 
 		var currentActive = $('.'+tabsContainerClass).find('li.active');
		var currentActiveWidth = getListWidth(currentActive);
		var currentActiveLeft = currentActive.offset().left;

		//get hovered list's left position & width 
		var currentHoverWidth = getListWidth(item);
		var currentHoverLeft = item.offset().left;

		//stop animation
		$('.'+lavalampWalkerClass).stop();

		switch(event)
		{
			case "mouseOver":
				//set walker's left position & width
				$('.'+lavalampWalkerClass).animate({left: currentHoverLeft, width: currentHoverWidth}, 350);
				break

			case "mouseLeave":
				//set walker's left position & width
				$('.'+lavalampWalkerClass).animate({left: currentActiveLeft, width: currentActiveWidth}, 350);
				break
		}
	}

	//calle the walker on event
	$('.'+tabsContainerClass+' li').mouseover(function(){
		wakeTheWalker($(this), 'mouseOver');
	});
	$('.'+tabsContainerClass).mouseleave(function(){
		wakeTheWalker($(this), 'mouseLeave');
	});
});