export function Error({ message = 'Something went wrong. Please try again.' }) {
  return (
    <div style={{ textAlign: 'center', padding: '50px', color: 'red', fontSize: '18px' }}>
      <p>{message}</p>
    </div>
  );
}
