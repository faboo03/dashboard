import React from "react";

import { storiesOf } from "@storybook/react";

import Section from "components/section";
import colors from "./colors.json";

storiesOf("Common.Colors", module)
  .addParameters({
    a11y: { disabled: true }
  })
  .add("Kitchen Sink", () => (
    <div>
      {Object.entries(colors).map(([family, values]) => (
        <div key={family} className="mb-6">
          <Section type="story" headline={family}>
            <div className="flex flex-wrap">
              {Object.entries(values).map(([name, color]) => (
                <div
                  key={name}
                  className="flex flex-col items-center justify-center mx-2 mb-4"
                >
                  <div
                    className="rounded"
                    style={{
                      backgroundColor: color,
                      width: "3.6rem",
                      height: "3.6rem"
                    }}
                    onClick={() => navigator.clipboard.writeText(`$${name}`)}
                  ></div>
                  <code className="text-2">
                    {name.substring(name.lastIndexOf("-") + 1)}
                  </code>
                  <code className="text-1">{color}</code>
                </div>
              ))}
            </div>
          </Section>
          <hr />
        </div>
      ))}
    </div>
  ));
