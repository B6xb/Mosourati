export default function Container({ children }) {
  return (
    <div className="flex flex-col justify-between -[100px]">{children}</div>
  );
}
