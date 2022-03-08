import { Hello } from "../index";

test("Hello test", () => {
  expect(Hello("Carl")).toBe("Hello Carl");
});
