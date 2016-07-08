angular
    .module('scoreboardApp')
    .filter('upper', function() {
      return function(input) {
        return input.toUpperCase();
      };
    })
    .component('scoreCard', {
        templateUrl: '/sites/all/modules/score_board/app/scorecard/scorecard.template.html',
        controller: function cardController($http){

            var self = this;

            //https://docs.angularjs.org/api/ng/filter/orderBy
            self.orderProp = [function(item){

              var val;

              switch (item.state){
                case 'live':
                  val = 1;
                break;
                case 'pre':
                  val = 2;
                break;
                case 'final':
                  val = 3;
                break;
                default:
                  val = 3;
                break;
              }

              return val;

            },'startTimeEpoch'];

            self.winStr = 'WINNER';
            self.loseStr = '';

            $http
              .get('/sites/all/modules/score_board/app/data/scoreboard.json')
              .then(function(response) {

                  self.cards = response.data;

                  self.resultsCount = self.cards.length;
                },
                function(response){
                  self.err = 'Please try again later ($http failed).';
                }
              );

        }
      });