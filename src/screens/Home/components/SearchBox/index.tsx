/* eslint-disable react-hooks/exhaustive-deps */
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import type { PaperProps } from "@mui/material/Paper";
import Paper from "@mui/material/Paper";
import type { PopperProps } from "@mui/material/Popper";
import Popper from "@mui/material/Popper";
import TextField from "@mui/material/TextField";
import classnames from "classnames";
import useTranslation from "next-translate/useTranslation";
import type {
  ComponentProps,
  FC,
  FocusEventHandler,
  HTMLAttributes,
} from "react";
import { useCallback, useState } from "react";

import NetworkIcon from "@/src/components/NetworkIcon";
import getUrlFromNetwork from "@/src/utils/getUrlFromNetwork";

import type { SearchBoxProps } from "./types";
import useStyles from "./useStyles";

function scrollLock() {
  window.scrollTo(0, 0);
}

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => (option as { network: Network }).network.name,
});

/**
 * It takes an object with a property called `startAdornment` and returns an object with a property
 * called `startAdornment`
 * @param InputProps - The InputProps prop is a prop that is passed to the TextField component. It's an
 * object that contains a startAdornment property.
 * @returns An object with the properties of InputProps and startAdornment.
 */
function addSearch(InputProps: ComponentProps<typeof TextField>["InputProps"]) {
  const startAdornment = (
    <InputAdornment position="start">
      <SearchIcon fontSize="small" />
    </InputAdornment>
  );

  return { ...InputProps, startAdornment };
}

interface OptionsProps {
  network: Network;
  props: HTMLAttributes<HTMLLIElement>;
}

const Options: FC<OptionsProps> = ({ network, props }) => {
  const url = getUrlFromNetwork(network);
  const styles = useStyles();

  return (
    <ListItem {...props} css={styles.listItem} title={url}>
      <ListItemIcon>
        <Box className="image">
          <NetworkIcon height="24" networkName={network.name} width="24" />
        </Box>
      </ListItemIcon>
      <ListItemText>{network.name}</ListItemText>
    </ListItem>
  );
};

/**
 * It takes a React element and a network object, and returns a React element
 * @param props - HTMLAttributes<HTMLLIElement>
 * @param {unknown} option - The option that is being rendered.
 * @returns A React component
 */
function renderOption(props: HTMLAttributes<HTMLLIElement>, option: unknown) {
  const { network } = option as { network: Network };

  return <Options key={network.name} network={network} props={props} />;
}

/**
 * `handleChange` is a function that takes an event and a value, and if the value is truthy, it opens a
 * new window to the URL of the network
 * @param {unknown} _event - unknown - This is the event that is triggered when the user clicks on the
 * dropdown.
 * @param {unknown} value - The value of the selected item.
 */
function handleChange(_event: unknown, value: unknown) {
  if (value) {
    const { network } = value as { network: Network };
    const url = getUrlFromNetwork(network);

    if (url) {
      window.open(url, "_top");
    }
  }
}

const PopperComponent = (props: PopperProps) => {
  const styles = useStyles();

  return <Popper {...props} css={styles.popper} />;
};

const PaperComponent = (props: PaperProps) => {
  const styles = useStyles();

  return <Paper {...props} css={styles.paper} />;
};

type StyledAutocompleteProps = ComponentProps<typeof Autocomplete>;

/* A React component that uses the Material UI Autocomplete component. */
const SearchBox: FC<SearchBoxProps> = ({ networks }) => {
  const { t } = useTranslation("common");
  const options = networks.map((network) => ({ label: network.name, network }));
  const styles = useStyles();

  const renderInput: StyledAutocompleteProps["renderInput"] = useCallback(
    ({ InputProps, ...params }) => (
      <TextField
        {...params}
        InputProps={addSearch(InputProps)}
        css={styles.textField}
        placeholder={t("searchNetwork")}
      />
    ),
    [],
  );

  const [focused, setFocused] = useState(false);

  const handleFocus: FocusEventHandler = useCallback((event) => {
    setFocused(true);

    if (window.innerWidth < 768) {
      window.addEventListener("scroll", scrollLock);

      return;
    }

    const headerOffset = 100;
    const elementPosition = event.target.getBoundingClientRect().top;
    const top = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      behavior: "smooth",
      top,
    });
  }, []);

  const handleBlur = useCallback(() => {
    window.removeEventListener("scroll", scrollLock);
    setFocused(false);
  }, []);

  return (
    <Box
      className={classnames(
        {
          searchbox__focused: focused,
        },
        "searchbox__container",
      )}
      css={styles.root}
    >
      <Autocomplete
        PaperComponent={PaperComponent}
        PopperComponent={PopperComponent}
        filterOptions={filterOptions}
        inputMode="search"
        noOptionsText={t("noResultsFound")}
        onBlurCapture={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        openOnFocus
        options={options}
        popupIcon={null}
        renderInput={renderInput}
        renderOption={renderOption}
      />
      <Button
        className="searchbox__cancel-btn"
        onClick={handleBlur}
        variant="text"
      >
        {t("cancel")}
      </Button>
    </Box>
  );
};

export default SearchBox;
