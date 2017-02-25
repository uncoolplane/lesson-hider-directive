angular.module('hider').directive('lessonHider', function() {
  return {
    templateUrl: '../views/hider.html',
    restrict: 'E',
    scope: {
    //= >> Bound, @ >> direct string, & >> function
      lesson:'=',
      dayAlert:'&'
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
    }, //end controller
    link: function(scope, element, attrs) {

      scope.getSchedule.then(function(response) {
          scope.schedule = response.data;

          scope.schedule.forEach(function(scheduleDay) {
            if(scheduleDay.lesson === scope.lesson) {
              element.css('text-decoration', 'line-through');
              scope.lessonDay=scheduleDay.weekday;
              return;
            }
          });
        }); //end link
    }
  }

});
