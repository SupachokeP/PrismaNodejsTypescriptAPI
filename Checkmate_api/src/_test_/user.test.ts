import bcrypt from "bcrypt";
import { describe } from "node:test";
import { app } from "../../server";
import request from "supertest";
import { deleteBeforeTest } from "../service/test.service"; // Assuming a UserService for registration
import * as UserService from "../service/auth.service";
import { sqlConnection, sqlTransaction } from "../utils/testDb";
import { UserModel } from "../model/UserModel";

beforeAll(async () => {
  const sql = await sqlConnection();
  const pool = sql.request();
  const isSuccess = await deleteBeforeTest("tb_users", pool);
});

describe("UserService.register", () => {
  // Helper function to create a mock pool object
  const createMockPool = () => ({
    input: jest.fn(),
    query: jest.fn(),
    parameters: {},
  });

  it("should register a new user successfully", async () => {
    const mockPool = createMockPool();
    const mockBcryptHash = jest.fn().mockReturnValue("hashedPassword"); // Mock bcrypt.hashSync
    jest.spyOn(bcrypt, "hashSync").mockImplementation(mockBcryptHash);

    const userData: UserModel = {
      userId: "timetest9",
      email: "test9@gmail.com",
      password: "123456",
      phone: "1234567890",
      firstName: "time9",
      lastName: "timetime",
    };

    const expectedUserPayload = {
      userId: userData.userId,
      email: userData.email,
      name: `${userData.firstName} ${userData.lastName}`, // Use template literal for clarity
    };

    // Mock pool.query to return successful result
    mockPool.query.mockResolvedValueOnce({ rowsAffected: [1] }); // Simulate 1 row affected

    const result = await UserService.register(userData, mockPool);

    expect(result).toEqual(expectedUserPayload); // Verify returned user data
    expect(mockPool.input).toHaveBeenCalledTimes(6); // Verify input parameters set
    expect(mockBcryptHash).toHaveBeenCalledWith(userData.password, 10); // Verify password hashing
    expect(mockPool.query).toHaveBeenCalledWith(expect.any(String)); // Verify query execution
  });

  it("should return a 400 error for failed insertion", async () => {
    const mockPool = createMockPool();
    jest.spyOn(bcrypt, "hashSync").mockImplementation(() => "hashedPassword"); // Mock bcrypt

    const userData: UserModel = {
      userId: "timetest9",
      email: "test9@gmail.com",
      password: "123456",
      phone: "1234567890",
      firstName: "time9",
      lastName: "timetime",
    };

    // Mock pool.query to return 0 rows affected (failed insertion)
    mockPool.query.mockResolvedValueOnce({ rowsAffected: [0] });

    try {
      await UserService.register(userData, mockPool);
      fail("Expected an error to be thrown"); // If successful, fail the test
    } catch (error: any) {
      expect((error as { statusCode: number }).statusCode).toBe(400); // Verify expected error code
    }
  });

  it("should return a 500 error for unexpected errors", async () => {
    const mockPool = createMockPool();
    jest.spyOn(bcrypt, "hashSync").mockImplementation(() => "hashedPassword"); // Mock bcrypt

    const userData: UserModel = {
      userId: "timetest9",
      email: "test9@gmail.com",
      password: "123456",
      phone: "1234567890",
      firstName: "time9",
      lastName: "timetime",
    };

    // Mock pool.query to throw an error
    mockPool.query.mockRejectedValueOnce(new Error("Database error"));

    try {
      await UserService.register(userData, mockPool);
      fail("Expected an error to be thrown"); // If successful, fail the test
    } catch (error: any) {
      console.log(error.statusCode);
      expect(error.statusCode).toBe(500); // Verify expected error code
    }
  });

  // ... add more test cases for other validation errors or edge cases
});
// const userData = {
//   userId: "timetest7",
//   email: "test5@gmail.com",
//   name: "time7 timetime",
// };

// const userInput = {
//   userId: "timetest7",
//   email: "test5@gmail.com",
//   phone: "1234567890",
//   password: "123456",
//   firstName: "time7",
//   lastName: "timetime",
// };
// describe("User registration", () => {
//   it("should register a new user successfully", async () => {
//     const { statusCode, body } = await request(app)
//       .post("/api/auth/signup")
//       .send(userInput);
//     expect(statusCode).toBe(201);
//     expect(body.data).toEqual(userData);
//   });
// });
