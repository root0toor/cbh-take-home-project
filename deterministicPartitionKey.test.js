const crypto = require("crypto");
const { deterministicPartitionKey } = require('./deterministicPartitionKey');

describe("deterministicPartitionKey", () => {
    it("should return trivial partition key when event is undefined", () => {
        const result = deterministicPartitionKey(undefined);
        expect(result).toBe("0");
    });

    it("should use event.partitionKey when it exists", () => {
        const event = { partitionKey: "myKey" };
        const result = deterministicPartitionKey(event);
        expect(result).toBe("myKey");
    });

    it("should hash candidate if its length exceeds MAX_PARTITION_KEY_LENGTH", () => {
        const longString = "a".repeat(300);
        const hash = crypto.createHash("sha3-512").update(longString).digest("hex");
        const result = deterministicPartitionKey({ partitionKey: longString });
        expect(result).toBe(hash);
    });

    it("should stringify candidate if it's not a string", () => {
        const candidate = { key: "value" };
        const result = deterministicPartitionKey({ partitionKey: candidate });
        expect(result).toBe(JSON.stringify(candidate));
    });

    it("should return the same partition key for identical events", () => {
        const event1 = { data: "myData" };
        const event2 = { data: "myData" };
        const result1 = deterministicPartitionKey(event1);
        const result2 = deterministicPartitionKey(event2);
        expect(result1).toBe(result2);
    });

    it("should handle empty event object", () => {
        const event = {};
        const result = deterministicPartitionKey(event);
        expect(result).toBe("0");
    });

    it("should handle event object with empty partitionKey", () => {
        const event = { partitionKey: "" };
        const result = deterministicPartitionKey(event);
        expect(result).toBe("0");
    });
});
