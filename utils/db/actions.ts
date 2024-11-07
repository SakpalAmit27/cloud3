import { Tokens, Users } from "./schema";
import { db } from "./dbConfig";
import { eq } from "drizzle-orm";

export async function createOrUpdateUser (address: string, email: string) {
  try {
    console.log("Checking for existing user...");
    const existingUser  = await db
      .select()
      .from(Users)
      .where(eq(Users.address, address))
      .execute();

    const now = new Date();

    if (existingUser .length > 0) {
      console.log("User  exists, updating...");
      const [updatedUser ] = await db
        .update(Users)
        .set({
          email,
          updatedAt: now,
          lastLogin: now,
        })
        .where(eq(Users.address, address))
        .returning()
        .execute();
      console.log("User  updated:", updatedUser );
      return updatedUser ;
    } else {
      console.log("User  does not exist, creating new user...");
      const [newUser ] = await db
        .insert(Users)
        .values({
          address,
          email,
          createdAt: now,
          updatedAt: now,
          lastLogin: now,
        })
        .returning()
        .execute();
      console.log("New user created:", newUser );

      // Initialize tokens for new user
      console.log("Creating token entry for new user...");
      await db
        .insert(Tokens)
        .values({
          userId: newUser .id,
          balance: 0,
          stakedAmount: 0,
          rewardsEarned: 0,
        })
        .execute();
      console.log("Token entry created for user ID:", newUser .id);

      return newUser ;
    }
  } catch (error) {
    console.error("Error during user creation or update:", error);
    throw error; // Rethrow the error if necessary
  }
}