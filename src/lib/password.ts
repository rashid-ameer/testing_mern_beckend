import {hash, verify} from "@node-rs/argon2";

export const getHashPassword = async (password:string): Promise<string>=>{
  return await hash(password,{
    memoryCost: 19456,
		timeCost: 2,
		outputLen: 32,
		parallelism: 1
  })
}

export const verifyPassword = async (password: string, hashPassword: string): Promise<boolean>=>{
  return await verify(hashPassword,password);
}