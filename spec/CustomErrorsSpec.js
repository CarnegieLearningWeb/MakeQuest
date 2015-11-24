// Globals for tests
var currentLevel;

describe('CustomErrors', function() {
    it('should have custom error messages', function() {
        expect(CustomErrors.errorMsgs).toEqual(jasmine.anything());
    });

    describe('createPlatform', function() {
        it('should return an err if the method call does not end with a semicolon', function() {
            var code = "createPlatform(40, 100, 80, 10),";
            currentLevel = 3;
            var err = CustomErrors.test(code);
            expect(err).toEqual(jasmine.anything());
            expect(err.errMsg).toEqual(CustomErrors.errorMsgs.semicolon);
        });

        it('should return an err if the arguments are not separated by commas', function() {
            var code = "createPlatform(40, 100, 80 10);";
            currentLevel = 3;
            var err = CustomErrors.test(code);
            expect(err).toEqual(jasmine.anything());
            expect(err.errMsg).toEqual(CustomErrors.errorMsgs.comma);
        });
    });

    describe('makePlayerJump', function() {
      it('should return an err if the method call does not end with a semicolon', function() {
          var code = "makePlayerJump(5),";
          var err = CustomErrors.test(code);

          expect(err).toEqual(jasmine.anything());
          expect(err.errMsg).toEqual(CustomErrors.errorMsgs.semicolon);
      });
      it('should return an err if the number of arguments is not correct', function() {
          var code = "makePlayerJump(40, 40);";
          currentLevel = 3;
          var err = CustomErrors.test(code);

          expect(err).toEqual(jasmine.anything());
      });
    });

});
