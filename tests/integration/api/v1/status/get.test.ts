describe("GET /api/v1/status", () => {
  it("should get the server status", async () => {
    const statusResponse = await fetch("http://localhost:3000/api/v1/status")

    expect(statusResponse.status).toBe(200);   
    
  });
});
