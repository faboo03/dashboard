import React from "react";
import { useTranslation } from "react-i18next";

import { ConfigurationProps } from "widgets/index";
import Input from "components/forms/input";

const Configuration = ({
  id,
  options,
  setOptions,
  save
}: ConfigurationProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Input
        setValue={value => setOptions({ url: value })}
        value={options.url}
        label={t("widget.image.configuration.url")}
        type="url"
        autoComplete="url"
        onEnter={save}
      />
    </>
  );
};

export default Configuration;
