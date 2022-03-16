import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function Hero() {
  const { id } = useParams();

  return (
    <>
      <h1>{id}</h1>
    </>
  );
}
