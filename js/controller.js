angular.module('hider').controller('mainCtrl', function($scope, lessonService) {
  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

  $scope.announceDay = function(lesson, day) {
    if(day) {
      alert(lesson + ' on ' + day);
    }else {
      alert('No Class')
    }
  }
})
