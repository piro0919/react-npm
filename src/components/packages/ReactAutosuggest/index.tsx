import usePackages, { Packages } from "hooks/usePackages";
import React, { FC, useCallback, useMemo, useState } from "react";
import Autosuggest, {
  AutosuggestPropsBase,
  InputProps,
} from "react-autosuggest";
import styles from "./style.module.scss";

type Suggestion = Packages[0];

const ReactAutosuggest: FC = () => {
  const packages = usePackages();
  const [suggestions, setSuggestions] = useState(packages);
  const [value, setValue] = useState<InputProps<Suggestion>["value"]>("");
  const handleChange = useCallback<InputProps<Suggestion>["onChange"]>(
    (_, { newValue }) => {
      setValue(newValue);
    },
    []
  );
  const inputProps = useMemo<InputProps<Suggestion>>(
    () => ({
      value,
      onChange: handleChange,
      placeholder: "Type 'r'",
    }),
    [handleChange, value]
  );
  const getSuggestionValue = useCallback<
    AutosuggestPropsBase<Suggestion>["getSuggestionValue"]
  >(({ name }) => name, []);
  const handleSuggestionsClearRequested = useCallback<
    NonNullable<AutosuggestPropsBase<Suggestion>["onSuggestionsClearRequested"]>
  >(() => {
    setSuggestions([]);
  }, []);
  const handleSuggestionsFetchRequested = useCallback<
    NonNullable<AutosuggestPropsBase<Suggestion>["onSuggestionsFetchRequested"]>
  >(
    ({ value }) => {
      setSuggestions(packages.filter(({ name }) => name.indexOf(value) >= 0));
    },
    [packages]
  );
  const renderSuggestion = useCallback<
    NonNullable<AutosuggestPropsBase<Suggestion>["renderSuggestion"]>
  >(({ name }) => <div>{name}</div>, []);

  return (
    <Autosuggest
      getSuggestionValue={getSuggestionValue}
      inputProps={inputProps}
      onSuggestionsClearRequested={handleSuggestionsClearRequested}
      onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
      renderSuggestion={renderSuggestion}
      suggestions={suggestions}
      theme={styles}
    />
  );
};

export default ReactAutosuggest;
