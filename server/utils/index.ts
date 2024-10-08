import { toString } from 'ramda';

export const handleServerError = (
  e: unknown,
  defaultMessage = `Error from server: ${toString(e)}`
) => (e instanceof Error ? e.message : defaultMessage);
