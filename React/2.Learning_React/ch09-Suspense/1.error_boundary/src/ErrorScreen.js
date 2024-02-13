import ErrorBoundary from "./ErrorBoundary";
import App from "./App";

function ErrorScreen({ error }) {
  return (
    <div className="error">
      <h3>We are sorry...something went wrong</h3>
      <p>We cannot process your request at this moment.</p>
      <p>ERROR : {error.message}</p>
    </div>
  );
}
<ErrorBoundary fallback={ErrorScreen}>
  <App />
</ErrorBoundary>;
