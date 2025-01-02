import { useOutletContext } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function ShopPage() {
  const { shopItems } = useOutletContext();

  return (
    <>
      {shopItems.length > 0 ? shopItems.map((item) => (
        <p key={item.id}>{item.title}</p>
      )) : <Spinner />}
    </>
  );
};