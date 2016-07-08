Installation:

Clone the repo to your local drupal install, sites/all/modules.

Visit the drupal 7 modules section, locate score_board under 
section 'other'. check 'enable', click 'save configuration'.

Look for the new menu item 'Scoreboard' in your main-menu.

Alternately, go directly to http://localhost/scoreboard.

You should see what is pictured in score_board.JPG.

details on my drupal install can be found in drupal-status.txt,
in case you have any trouble getting it to work.

*note* I worked in the default drupal 7 theme. 

/*
 * Some notes I kept as I worked.
 *
 */

installed composer (as per drupal doc recommendation)
https://getcomposer.org/doc/01-basic-usage.md

installed php code sniffer (PHPCS) with drupal coder package
https://www.drupal.org/node/1419988

	coder usage
	https://www.drupal.org/node/1587138
	
	phpcs --config-set installed_paths C:\Users\Steven\AppData\Roaming\Composer\vendor\drupal\coder\coder_sniffer
	phpcs --config-set installed_paths C:\Users\Steven\AppData\Roaming\Composer\vendor\squizlabs\php_codesniffer
	
	phpcs --standard=coder --extensions=php,module,inc,install,test,profile,theme,js,css,info,txt,md score_board

	auto fix
	phpcbf --standard=Drupal --extensions=php,module,inc,install,test,profile,theme,js,css,info,txt,md score_board

*note* I played with the format validators for a time but in the interest of time I let the code formatting go.....
	
install devel module in hope of disabling drupal cache - worked for most purposes.

install compass
	I didn't make much use of compass. I need to spend more time to understand the 
	benefit if offers over just using SASS alone.

figure out drupal_add_css !??!!

	had trouble getting my stylesheet to render last, compensating with more specific selectors
	
angular: 
	I chose angular, despite limited experience with it, because I know it 
	is a good tool for managing views rendered from JSON, as this one would be, 
	as well as filtering and sorting such views. It worked out well.
	
	I don't love having the drupal paths embedded in the js,
	as you will find in \score_board\app\scorecard\scorecard.component.js.
	It may have been beneficial in this situation to break the angular app
	organization guidelines and embed the script into php to get the
	paths managed by php, or write a connector to pass the paths to 
	the JS routines. I'm sticking with embedded paths for now for the sake of time.
	
	dealing with the JSON parsing and sorting couldn't have gotten much easier than 
	with angular.

All told, I spend about 12 hours putting this together.

It could be flashier but I'm generally pleased with the result.
