import { useState } from 'react';

import { isApiError } from '@mf-realworld/utils';

export const useRegister = () => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [isLoading, setIsLoading] = useState(false);

  const register = async ({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) => {
    try {
      setErrors({});
      setIsLoading(true);
      const response = await fetch(
        'https://api.realworld.show/api/users/register',
        {
          method: 'POST',
          body: JSON.stringify({ user: { username, email, password } }),
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

  return { register, data, errors, isLoading };
};
