import { Users } from "./schema";
import {db} from "./dbConfig"
import { eq } from "drizzle-orm";
export async function createOrUpdateUser(address:string , email:string){
    try{
        const existingUser = await db
        .select()
        .from(Users)
        .where(eq(Users.address,address))
        .execute()

        const now = new Date(); 
        

    if (existingUser.length > 0) {
      const [updatedUser] = await db
        .update(Users)
        .set({
          email,
          updatedAt: now,
          lastLogin: now,
        })
        .where(eq(Users.address, address))
        .returning()
        .execute();
      return updatedUser;
    } else {
      const [newUser] = await db
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

      // Initialize tokens for new user
      await db
        .insert(Tokens)
        .values({
          userId: newUser.id,
          balance: 0,
          stakedAmount: 0,
          rewardsEarned: 0,
        })
        .execute();

      return newUser;
    }
    }catch(error){

    }
}