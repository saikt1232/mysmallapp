

describe("Testing the app",function(){

    var $rootScope,scope,$controller;

    beforeEach(module('myApp'));

    beforeEach(angular.mock.inject(function( _$controller_,_$rootScope_){
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        $controller = _$controller_;
    }));


    it("Testing the controller",function(){
       expect(scope.slice).toBeDefined();
    });

});