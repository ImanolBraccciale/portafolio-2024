import { useState } from 'react';
import { IconButton, Snackbar } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const CopyToClipboardButton = ({texts}) => {
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("imanol11699@outlook.com");

  const handleClick = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  
  return (
    <div style={{ display: 'inline-block', overflow: 'hidden' }}>
      <IconButton
        onClick={handleClick}
        style={{
          backgroundColor: copied ? '#7FFF7F' : '#ffc0cb',
          width: '4em',
          fontSize: '1em',
          height: '1.5em',
          borderRadius: '0.3em',
          padding:"1em",
          color:"#000"
        }}
      >
        {copied ? <CheckIcon /> : texts}
      </IconButton>
      <Snackbar
        open={copied}
        message="Copiado al portapapeles"
        autoHideDuration={2000}
        onClose={() => setCopied(false)}
      />
    </div>
  );
};

export default CopyToClipboardButton;
