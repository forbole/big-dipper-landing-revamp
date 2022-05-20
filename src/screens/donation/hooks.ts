import copy from 'copy-to-clipboard';

export const useDonation = () => {
  const handleCopyToClipboard = (value: string) => {
    copy(value);
  };

  return ({
    handleCopyToClipboard,
  });
};
