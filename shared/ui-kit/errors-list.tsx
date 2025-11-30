type Props = {
  errors: Record<string, string[]>;
};

export const ErrorsList = ({ errors = {} }: Props) => (
  <ul className="error-messages">
    {Object.keys(errors)
      .map((key) => `${key} ${errors[key]}`)
      .map((error, index) => (
        <li key={index}>{error}</li>
      ))}
  </ul>
);
