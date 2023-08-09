import joi from 'joi'

export const RegisterSchema = joi.object<{username: string, password:string}>({
    username: joi.string().required(),
    password: joi.string().min(4).max(15)

})

export const LoginSchema = joi.object<{ username: string; password: string }>({
    username: joi.string().required(),
    password: joi.string().min(4).max(15).required(),
  });
  