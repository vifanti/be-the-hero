const geneteUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = geneteUniqueId();

    expect(id).toHaveLength(8);
  });
});
