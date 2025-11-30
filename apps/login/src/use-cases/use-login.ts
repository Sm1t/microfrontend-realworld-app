import { useState } from 'react';
import { isApiError } from '@mf-realworld/utils';

export const useLogin = () => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [isLoading, setIsLoading] = useState(false);

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      setErrors({});
      setIsLoading(true);
      const response = await fetch(
        'https://api.realworld.show/api/users/login',
        {
          method: 'POST',
          body: JSON.stringify({ user: { email, password } }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setData(data);
      } else {
        throw data;
      }
    } catch (error) {
      if (isApiError(error)) {
        setErrors(error.errors);
      } else {
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { login, data, errors, isLoading };
};
