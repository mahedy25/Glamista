// types/hookform-resolvers.d.ts
declare module '@hookform/resolvers/zod' {
    import { Resolver } from 'react-hook-form';
    import { ZodSchema } from 'zod';
  
    export function zodResolver<TSchema extends ZodSchema>(
      schema: TSchema
    ): Resolver<ReturnType<TSchema['parse']>>;
  }
  