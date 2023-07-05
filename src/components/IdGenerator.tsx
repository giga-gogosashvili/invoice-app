import React from "react";
import { v4 as uuid } from "uuid";

export default function IdGenerator() {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 6).toUpperCase();
  return small_id;
}
