type ApiError = {
  errors: {
    body: string[];
  };
};

const isObject = (obj: unknown): obj is object =>
  typeof obj === 'object' && obj !== null;

export const isApiError = (error: unknown): error is ApiError => {
  return (
    isObject(error) &&
    'errors' in error &&
    isObject(error.errors) &&
    'body' in error.errors &&
    Array.isArray(error.errors.body)
  );
};
