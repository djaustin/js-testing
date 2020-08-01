import { rest } from "msw";
const mockBase = "https://httpbin.org";
export const handlers = [
  rest.get(mockBase + "/get", (req, res, ctx) => {
    console.log(req);
    return res(ctx.status(200), ctx.json({ args: { name: "Hermes" } }));
  }),
];
