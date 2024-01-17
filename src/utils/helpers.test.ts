import { getRemainingSpotsString } from './helpers';

describe('Helper functions', () => {
  describe('getRemainingSpotsString', () => {
    it('should return the singular version if spots is singular', () => {
      const result = getRemainingSpotsString(1);
      expect(result).toEqual('1 spot remaining');
    });
    
    it('should return the plural version if spots is plural', () => {
      const result = getRemainingSpotsString(3);
      expect(result).toEqual('3 spots remaining');
    });
  });
});
