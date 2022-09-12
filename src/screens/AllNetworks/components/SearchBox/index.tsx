import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper, { PaperProps } from '@mui/material/Paper';
import Popper, { PopperProps } from '@mui/material/Popper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import {
  ComponentProps,
  createContext,
  Dispatch,
  FC,
  HTMLAttributes,
  MouseEventHandler,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import type { SearchBoxProps } from './types';
import useStyles from './useStyles';

type ContextType = [boolean, Dispatch<SetStateAction<boolean>>];
// eslint-disable-next-line @typescript-eslint/no-empty-function
const SearchBoxContext = createContext<ContextType>([false, () => {}]);

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
  link: NetworkLink;
}
const Options: FC<OptionsProps> = ({ props, network, link }) => {
  const [showDevnetOrRetired] = useContext(SearchBoxContext);
  const styles = useStyles();
  if (!showDevnetOrRetired && /^(?:devnet|retired)$/i.test(link.name))
    return null;
  return (
    <ListItem {...props} title={link.url} css={styles.listItem}>
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
      <ListItemText>
        <Typography variant="h6">{network.name}</Typography>
        <Typography variant="subtitle1">{link.chain_id}</Typography>
      </ListItemText>
      <Box
        className={classnames(
          {
            allnetworksearchbox__mainnet: /^mainnet$/i.test(link.name),
          },
          'allnetworksearchbox__badge'
        )}
      >
        {link.name}
      </Box>
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
  const { network, link } = option as { network: Network; link: NetworkLink };
  return (
    <Options key={link.name} props={props} network={network} link={link} />
  );
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
    const { link } = value as { link: NetworkLink };
    if (link?.url) {
      window.open(link.url, '_top');
    }
  }
}

const PopperComponent = (props: PopperProps) => {
  const styles = useStyles();
  return <Popper {...props} css={styles.popper} />;
};

const PaperComponent = ({ children, ...props }: PaperProps) => {
  const { t } = useTranslation('common');
  const [showDevnetOrRetired, setShowDevnetOrRetired] =
    useContext(SearchBoxContext);
  const childOptions = children as Array<{ props: { className: string } }>;
  const noOptions =
    childOptions?.[1]?.props?.className === 'MuiAutocomplete-noOptions';
  const toggleShowDevnetOrRetired: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (noOptions) return;
      setShowDevnetOrRetired((prev) => !prev);
    },
    [noOptions, setShowDevnetOrRetired]
  );
  const label = showDevnetOrRetired
    ? t('hideDevnetOrRetired')
    : t('showDevnetOrRetired');
  const styles = useStyles();
  return (
    <Paper {...props} css={styles.paper}>
      {children}
      <Button
        onMouseDownCapture={toggleShowDevnetOrRetired}
        css={styles.toggleButton}
      >
        {noOptions ? t('tryAnotherSearchInstead') : label}
      </Button>
    </Paper>
  );
};

/* A React component that uses the Material UI Autocomplete component. */
const SearchBox: FC<SearchBoxProps> = ({ networks }) => {
  const { t } = useTranslation('common');
  const [showDevnetOrRetired, setShowDevnetOrRetired] = useState(false);
  /* It's creating an array of objects that have a label, network, and link property. */
  const options = networks.flatMap((network) =>
    network.links.map((link) => ({
      label: `${network.name} ${link.chain_id}`,
      network,
      link,
    }))
  );
  const renderInput: ComponentProps<typeof Autocomplete>['renderInput'] =
    useCallback(
      ({ InputProps, ...params }) => (
        <TextField
          {...params}
          placeholder={t('searchNetwork')}
          InputProps={addSearch(InputProps)}
        />
      ),
      [t]
    );
  const value = useMemo<ContextType>(
    () => [showDevnetOrRetired, setShowDevnetOrRetired],
    [showDevnetOrRetired]
  );
  const [focused, setFocused] = useState(false);
  const handleFocus = useCallback(() => setFocused(true), []);
  const handleBlur = useCallback(() => setFocused(false), []);
  const styles = useStyles();
  return (
    <SearchBoxContext.Provider value={value}>
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
        />
        <Button
          variant="text"
          className="searchbox__cancel-btn"
          onClick={handleBlur}
        >
          {t('cancel')}
        </Button>
      </Box>
    </SearchBoxContext.Provider>
  );
};

export default SearchBox;
