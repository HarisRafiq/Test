const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns the literal '1234' when given no obj with partitionKey 1234", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:'1234'});
    expect(trivialKey).toBe("1234");
  });
  it("Returns the literal 'string' when given type number as partitionKey", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:1234});
    expect(typeof trivialKey).toBe("string")
  });
  it("Returns the literal 'string' when given type number as partitionKey", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:1234});
    expect(typeof trivialKey).toBe("string")
  });
});
