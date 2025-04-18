export default function Error() {
  return (
    <div className="flex justify-center items-center w-full h-screen flex-col">
      <p className="text-4xl">404</p>
      <button onClick={() => history.back()}>Home</button>
    </div>
  );
}
