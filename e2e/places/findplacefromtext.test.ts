import { PlaceInputType, Status } from "../../src/common";

import { findPlaceFromText } from "../../src/places/findplacefromtext";

test("autocomplete should return correct result", async () => {
  const params = {
    input: "Museum of Modern Art",
    inputtype: PlaceInputType.textQuery,
    key: process.env.GOOGLE_MAPS_API_KEY,
    fields: ["place_id", "name", "formatted_address"],
  };

  const r = await findPlaceFromText({ params: params });

  expect(r.data.status).toEqual(Status.OK);
});
