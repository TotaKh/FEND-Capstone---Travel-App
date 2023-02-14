import { GetTrip } from '../src/server/server'

describe("Testing the server", () => {
    test("'/GetTrip' is defined", async () => {
        await expect(express).toBeDefined();
    });
});