const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns the literal '1234' when given obj with partitionKey 1234", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:'1234'});
    expect(trivialKey).toBe("1234");
  });
  it("Returns the type 'string' when given type 'number' as partitionKey", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:1234});
    expect(typeof trivialKey).toBe("string")
  });
  it("Returns true even if given key length is greater than 254", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:'9ghKyAt9j38VeAijqHhExcipcVG1tRSYbHO5YS2AD9Jke6cUlLS65hwPIXTz3Ci1qTg3iFnRUxX86NFN9zf5NYRTPM2yieQAIzp1d193bPBnQBoMttPaeyZDsHxllBxN4OVxCnxmZFfgll13SwvNWLJbfAdQ5zawOdGqcWMi90erqHEXKtHJPE03N8howO6Jf5bnulGqaBt8VWJpDXXDAjp2HrBZzWMEMHwB9JHtCKcAVhQdkvFixPzmmXeXZT8403pBGSotpd6RBFCRsTUre6BtinI6qWDuTys0jvdatsfu'});
    expect(trivialKey.length).toBeLessThanOrEqual(254)
  });
});
