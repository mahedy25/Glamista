/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '@hookform/resolvers/zod' {
    import { ZodType, ZodTypeDef, ZodSchema } from 'zod'
    import { Resolver } from 'react-hook-form'
  
    export function zodResolver<T extends ZodType<any, ZodTypeDef, any> | ZodSchema<any>>(
      schema: T
    ): Resolver<z.infer<T>>
  }
  