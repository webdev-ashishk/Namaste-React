import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-400">
        oops! something went wrong!
      </h1>
      <h2>
        {err.status} {err.statusText}
      </h2>
    </div>
  );
};
export default ErrorElement;
