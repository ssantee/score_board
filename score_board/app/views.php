<?php

function view_main() {

  $template = <<<EOT
    <div id="scoreboard-main" ng-app="scoreboardApp">
      <score-card></score-card>
    </div>
EOT;

  return $template;

}
