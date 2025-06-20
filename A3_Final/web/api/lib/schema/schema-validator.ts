import { SafeParseReturnType, ZodSchema } from 'zod';

export function validateJson<T>(
  schema: ZodSchema<T>,
  data: unknown,
): SafeParseReturnType<T, T> {
  const result = schema.safeParse(data);
  return result;
}
