import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  return (
    <div className="container">
      { state && (
        <>
          <h1>Thank You { state.name }!</h1>
          <p>You're now registered for <u>{ state.course }</u>.</p>
          <p>We've sent more details about your selected course to <strong>{ state.email }</strong>.</p>
        </>
      )}
    </div>
  );
}
