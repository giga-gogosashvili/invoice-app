import { useParams } from "react-router";
import { useEffect } from "react";

export default function Invoice() {
  const { id } = useParams();

  useEffect(() => {
    alert(id);
  }, []);

  return <>Here should be some invoice text</>;
}
