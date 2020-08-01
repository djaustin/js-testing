import { fetchName } from "../fetchData";
import server from "../../mocks/server";
import { rest } from "msw";
describe("fetch data", () => {
  it("should return the name on succesful request", async () => {
    const name = "Dan";

    server.use(
      rest.get("*/get", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ args: { name: name } }));
      })
    );

    const result = await fetchName(name);
    expect(result).toEqual(name);
  });

  it("should throw an error on bad response", async () => {
    expect.assertions(1);
    server.use(
      rest.get("*/get", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    await expect(fetchName("name")).rejects.toThrow();
  });
});

export {};
