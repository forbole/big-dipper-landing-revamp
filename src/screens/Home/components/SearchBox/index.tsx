/* eslint-disable react-hooks/exhaustive-deps */
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper, { PaperProps } from '@mui/material/Paper';
import Popper, { PopperProps } from '@mui/material/Popper';
import TextField from '@mui/material/TextField';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import {
  ComponentProps,
  FC,
  FocusEventHandler,
  HTMLAttributes,
  useCallback,
  useState,
} from 'react';
import getUrlFromNetwork from '~src/utils/getUrlFromNetwork';
import type { SearchBoxProps } from './types';
import useStyles from './useStyles';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
});

/**
 * It takes an object with a property called `startAdornment` and returns an object with a property
 * called `startAdornment`
 * @param InputProps - The InputProps prop is a prop that is passed to the TextField component. It's an
 * object that contains a startAdornment property.
 * @returns An object with the properties of InputProps and startAdornment.
 */
function addSearch(InputProps: ComponentProps<typeof TextField>['InputProps']) {
  const startAdornment = (
    <InputAdornment position="start">
      <SearchIcon fontSize="small" />
    </InputAdornment>
  );
  return { ...InputProps, startAdornment };
}

interface OptionsProps {
  props: HTMLAttributes<HTMLLIElement>;
  network: Network;
}
const Options: FC<OptionsProps> = ({ props, network }) => {
  const url = getUrlFromNetwork(network);
  const styles = useStyles();
  return (
    <ListItem {...props} title={url} css={styles.listItem}>
      <ListItemIcon>
        <Box className="image">
          <Image
            alt={network.name}
            src={network.logo}
            width="24"
            height="24"
            unoptimized
          />
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
  return <Options key={network.name} props={props} network={network} />;
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
      window.open(url, '_top');
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
  const { t } = useTranslation('common');
  const options = networks.map((network) => ({ label: network.name, network }));
  const styles = useStyles();
  const renderInput: StyledAutocompleteProps['renderInput'] = useCallback(
    ({ InputProps, ...params }) => (
      <TextField
        {...params}
        placeholder={t('searchNetwork')}
        InputProps={addSearch(InputProps)}
        css={styles.textField}
      />
    ),
    []
  );
  const [focused, setFocused] = useState(false);
  const handleFocus: FocusEventHandler = useCallback((event) => {
    setFocused(true);
    if (window.innerWidth < 768) return;
    const headerOffset = 100;
    const elementPosition = event.target.getBoundingClientRect().top;
    const top = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }, []);
  const handleBlur = useCallback(() => setFocused(false), []);
  return (
    <Box
      className={classnames(
        {
          searchbox__focused: focused,
        },
        'searchbox__container'
      )}
      css={styles.root}
    >
      <Autocomplete
        openOnFocus={true}
        inputMode="search"
        popupIcon={null}
        noOptionsText={t('noResultsFound')}
        options={options}
        PaperComponent={PaperComponent}
        PopperComponent={PopperComponent}
        renderOption={renderOption}
        renderInput={renderInput}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        filterOptions={filterOptions}
      />
      <Button
        variant="text"
        className="searchbox__cancel-btn"
        onClick={handleBlur}
      >
        {t('cancel')}
      </Button>
    </Box>
  );
};

export default SearchBox;
