import test from "node:test";
import assert from "node:assert";

test("Testing a string", () => {
  assert.match("Welcome Node 18", /Node 18/);
});

test("Testing a string fails", () => {
  assert.match("Hello", /world/, 'This string does not contain "world"');
});

test("Testing that a number is equal", () => {
  let actual = 99;
  let expected = 99;
  assert.equal(actual, expected);
});

test("Testing that a number is not equal", () => {
  let actual = 22;
  let expected = 393;
  assert.notEqual(actual, expected);
});

test("Testing objects", () => {
  assert.deepStrictEqual(
    { name: "jordan" },
    { name: "jordan" },
    "Objects are not equal"
  );
});

test("Testing asynchronous functionality", async () => {
  const number = await Promise.resolve(90);
  assert.equal(number, 90, "The number is not equal to 90");
});

test("Array.findLast", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const lastMultipleOfThree = numbers.findLast((n) => n % 3 === 0);
  assert.equal(lastMultipleOfThree, 9);
});

test("Array.findLastIndex", () => {
  const numbers = [1, 3, 2, 4, 4, 3, 4, 1, 9, 3];
  const lastIndexOfThree = numbers.findLastIndex((n) => n === 3);
  assert.equal(lastIndexOfThree, 9);
});

test("Fetch", async () => {
  const reponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const json = await reponse.json();
  assert.equal(json.name, "Leanne Graham");
});

test("top level test", async (t) => {
  await t.test("subtest 1", (t) => {
    assert.strictEqual(1, 1);
  });

  await t.test("subtest 2", (t) => {
    assert.strictEqual(2, 2);
  });
});
