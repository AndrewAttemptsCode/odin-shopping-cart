import { useOutletContext } from "react-router-dom";

export default function ShopPage() {
  const { shopItems } = useOutletContext();

  return (
    <>
      Shop page
      {/* add conditional if shopitems > 0 if not add spinner */}
      {shopItems.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  );
};