const CustomError = require('../../src/model/customError');

describe('CustomError', () => {
  describe('when receiving parameters', () => {
    const customError = new CustomError('triggered error', 422, { key: 'value' });
    it('should return the set values', () => {
      expect(customError).toHaveProperty('statusText', 'triggered error');
      expect(customError).toHaveProperty('status', 422);
      expect(customError).toHaveProperty('data', { key: 'value' });
    });
  });

  describe('without parameters', () => {
    const customError = new CustomError();
    it('should return the default values', () => {
      expect(customError).toHaveProperty('statusText', 'Something went wrong. Please try again.');
      expect(customError).toHaveProperty('status', 500);
      expect(customError).toHaveProperty('data', null);
    });
  });
});
