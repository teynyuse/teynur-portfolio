import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = {
  width: 128,
  height: 128,
};

export const contentType = "image/png";

/* belangrijk: node runtime zodat readFile werkt */
export const runtime = "nodejs";

export default async function Icon() {
  const fontPath = path.join(
    process.cwd(),
    "public",
    "fonts",
    "TRYKefaIII-ExtraBold.ttf",
  );

  const fontData = await readFile(fontPath);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          background: "#f4f4f1",
          color: "#2b2b2b",

          fontFamily: "Kefa",
          fontWeight: 800,
          fontSize: 130,
          lineHeight: 1,

          paddingBottom: 6,
        }}
      >
        t
      </div>
    ),
    {
      width: 128,
      height: 128,
      fonts: [
        {
          name: "Kefa",
          data: fontData,
          weight: 800,
          style: "normal",
        },
      ],
    },
  );
}