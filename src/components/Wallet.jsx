import React from "react";
import LOGO from "../assets/grypto.png";
import Footer from "../components/Footer";
import SUN from "../assets/sun.svg";
import MOON from "../assets/moon.svg";
import {useLocation,useNavigate} from 'react-router-dom';
import { useState, useEffect } from "react";
import { magic,web3 } from "../libs/magic";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { provider } from "../libs/provider";
import '@uniswap/widgets/fonts.css'
import { SupportedLocale, SUPPORTED_LOCALES, SwapWidget } from '@uniswap/widgets'


const Wallet = ({route}) => {
  
  const navigate = useNavigate();
  const location = useLocation();
console.log(location.state)
  
const [account,setAccount] = useState(null)
const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);





const currencies = [
  {
    value: 'MATIC',
    label: 'MATIC',
  }
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const TOKEN_LIST = [{
  "name": "USD Coin",
  "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
  "symbol": "USDC",
  "decimals": 6,
  "chainId": 137,
  "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/logo.png"
},
//{"chainId":137,"name":"Polygon","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","decimals":18,"symbol":"MATIC","logoURI":"https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png"}
]

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function onWindowsMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  onWindowsMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;

      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        onWindowsMatch();
        break;
    }
  }, [theme]);

  const [nameAddress, setNameAddress] = React.useState("");
  const [nameAmount, setNameAmount] = React.useState("");
  const [usdcBalance, setUsdcBalance] = useState(null);
  const [maticBalance, setMaticBalance] = useState(null);

  const handleChangeAmount = (event) => {
    setNameAmount(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setNameAddress(event.target.value);
  };


  useEffect(() => {
   console.log(nameAddress+"|"+nameAmount)
  }, [nameAddress,nameAmount]);

  
  useEffect(() => {

    if(location.state) {
      console.log("C")
      if(typeof location.state.account != undefined) {
        setAccount(location.state.account)
      }
    }
    
  }, []);

  
  useEffect(() => {
    console.log("Started")
    const fetchData = async () => {
      try {
          const result = await getUSDCTokenBalance();
          const maticResult = await getMaticBalance();
          console.log(result)
          console.log(maticResult)
      } catch (e){
        console.log(e)
      }
    };

    if(account) {
      console.log("B")

      fetchData();
    }
   
   
    
  },[account]);



  async function getUSDCTokenBalance() {
    console.log("A")
    const contractABI = require('../abis/usdc_polygon.json');
   
    const minABI = [  
      // balanceOf
      {    
        constant: true,
    
        inputs: [{ name: "_owner", type: "address" }],
    
        name: "balanceOf",
    
        outputs: [{ name: "balance", type: "uint256" }],
    
        type: "function",
      },
    
    ];

    const publicAddress = (await web3.eth.getAccounts())[0];
    const USDContractInstance =  new web3.eth.Contract(minABI, "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174");
    console.log(USDContractInstance)
    let balance = await USDContractInstance.methods.balanceOf(publicAddress).call();
    console.log(balance)
    balance = balance / Math.pow(10, 6);
    setUsdcBalance(balance)
    return balance;
}


async function getMaticBalance() {

  const publicAddress = (await web3.eth.getAccounts())[0];
  const balance = web3.utils.fromWei(
    await web3.eth.getBalance(publicAddress), // Balance is in wei
  );

  
  console.log(balance)

  setMaticBalance(balance)
  return balance;
}

async function refreshBalances() {
  await getUSDCTokenBalance()
  await getMaticBalance()
}

const disconnect = async () => {
  
  await magic.connect.disconnect().then(() => {
    console.log("disconnect")

    setAccount(null);
    navigate('/');
  
  })
  .catch((error) => {
    console.log(error);
  });
 
};

const showWallet = async () => {
  console.log("Clicked")
  try {
    await magic.connect.showWallet()
  } catch(e) {
    console.log("Exception: "+e)
  }
  
  console.log("Opened")
};

const prepaidVisa = async () => {
  console.log("Clicked")
  try {
    window.location.assign('https://checkout.fcfpay.com/prepaid/b93dguhfvykuqw74yzph80j4lsjd1e660tx6zwlfld1mzjfkv1m0bke4oxhw');
  } catch(e) {
    console.log("Exception: "+e)
  }
  
  console.log("Opened")
};


const sendTx = async () => {

  const publicAddress = (await web3.eth.getAccounts())[0];
  const txnParams = {
    from: publicAddress,
    to: nameAddress,
    value: web3.utils.toWei(nameAmount, "ether"),
    gasPrice: web3.utils.toWei("200", "gwei")
  };
  web3.eth
    .sendTransaction(txnParams)
    .on("transactionHash", (hash) => {
      console.log("the txn hash that was returned to the sdk:", hash);
    })
    .then((receipt) => {
      console.log("the txn receipt that was returned to the sdk:", receipt);
    })
    .catch((error) => {
      console.log(error);
    });
};


  return (
    <div className="transition-colors duration-500 ease-in-out dark:bg-black bg-white">

  
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>



    <Typography id="modal-modal-title" variant="h6" component="h2">
      Send MATIC

<div style={{paddingTop:0}}>
      <TextField
      style={{paddingTop:0}}
          label="Destination Address"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          variant="filled"
          value={nameAddress}
          onChange={handleChangeAddress}
        />
        </div>
      <div style={{display: 'flex',  justifyContent:'space-around', alignItems:'center'}}>
      <TextField
          label="Amount"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          value={nameAmount}
          onChange={handleChangeAmount}
          variant="filled"
        />
           <TextField
           style={{paddingTop:40}}
          id="outlined-select-currency"
          select
          label=""
          defaultValue="MATIC"
          helperText="Please Select Matic"
          >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div style={{display: 'flex',  justifyContent:'space-around', alignItems:'center'}}>
        <Button style={{fontSize:20,color:'white'}} onClick={sendTx} className="button-row">
          Send
          </Button>
          </div>

    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Please use only MATIC on Polygon Network
    </Typography>
  </Box>
</Modal>

      <div className="flex justify-end mr-6 lg:mr-[9.5rem] pt-7 lg:pt-[3.94rem]">
        <div className="flex rounded-[20px] bg-primary text-white relative">
          <img
            src={MOON}
            alt="MOON"
            className="cursor-pointer py-[8px] pl-[19px]"
            onClick={() => setTheme("dark")}
          />
          <img
            src={SUN}
            alt="SUN"
            className="cursor-pointer pr-[19px] ml-6"
            onClick={() => setTheme("light")}
          />
          <div
            className={
              theme === "dark"
                ? "w-[3.4rem] rounded-full bg-myToggle absolute top-0 left-0 bottom-0 translate-x-0 ease-in-out duration-500"
                : "w-[3.4rem] rounded-full bg-myToggle absolute top-0 left-0 bottom-0 translate-x-full ease-in-out duration-500"
            }
          />
        </div>
      </div>
      <div className="px-6 lg:px-[8.81rem] pt-9 lg:pt-[6.75rem] flex flex-col lg:flex-row justify-between">
        <div>
          <div className="hidden lg:flex items-center mb-[1.1875rem]">
            <img src={LOGO} alt="logo" className="w-[102px] h-[102px] mr-4" />
            <p className="font-zeroestwo font-normal text-4xl leading-9 text-primary">
              Grypto
            </p>
          </div>

          <div className="flex justify-between lg:hidden items-center mb-[5.625rem]">
            <img src={LOGO} alt="logo" className="w-16 h-16 mr-4" />
            <button onClick={disconnect} className="bg-primary rounded-[25px] py-[0.6875rem] px-[2.3125rem]">
              <span className="font-causten font-normal text-white text-base leading-4 ">
                Disconnect Wallet
              </span>
            </button>
          </div>
          <div className="flex justify-center lg:justify-start font-causten font-normal text-xl lg:text-2xl text-primary dark:text-white mb-1">
            <p className="mr-1 lg:mr-2">$MATIC Balance:</p>
  <p>{maticBalance}</p>
          </div>
          <div className="flex justify-center lg:justify-start font-causten font-normal text-xl lg:text-2xl text-primary dark:text-white mb-[0.9375rem]">
            <p className="mr-1 lg:mr-[0.875rem]">$USDC Balance:</p>
            <p>{usdcBalance}</p>
          </div>
          <div className="flex mb-[2.375rem]">
            <button onClick={disconnect}  className="font-causten font-normal text-2xl text-primary dark:text-white hidden lg:block">
              Disconnect Wallet
            </button>
            <span className="font-causten font-normal text-5xl leading-8 text-primary dark:text-white mx-2 text-center hidden lg:block">
              |
            </span>
            <button onClick={refreshBalances} className="font-causten font-normal text-base lg:text-2xl text-primary dark:text-white mx-auto lg:mx-0">
              <span className="underline lg:no-underline">Refresh Balance</span>
            </button>
          </div>
          <div className="flex flex-col gap-4 w-[19.5rem] lg:w-[21rem] mb-[7.1875rem] lg:mb-0 mx-auto lg:mx-0">
            <button onClick={showWallet} className="myBtn font-causten font-normal text-xl lg:text-2xl text-white py-[1.02rem]">
              Show Wallet / Deposit Funds
            </button>
            <button onClick={prepaidVisa} className="myBtn font-causten font-normal text-xl lg:text-2xl text-white py-[1.02rem]">
              Withdraw Funds with VISA
            </button>
            <button onClick={handleOpen} className="myBtn font-causten font-normal text-xl lg:text-2xl text-white py-[1.02rem]">
              Send Funds to Others
            </button>
          </div>
        </div>

        <div
          className="bg-third rounded-[3.125rem] h-[26.125rem] lg:h-[33.8rem] w-[19.5rem] lg:w-[24rem]
        mx-auto lg:mx-0"
        >
          <p className="text-center text-white pt-4 font-causten text-lg">
          {maticBalance ?
<div className="Uniswap" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
    <SwapWidget provider={provider} convenienceFee={Number("100")} convenienceFeeRecipient="0xB4F926817f9aBcdC5cDe497e225a784c0843E8c6" tokenList={TOKEN_LIST}   defaultInputTokenAddress="NATIVE"
      defaultOutputTokenAddress="0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174" />
  </div>
  : null }
       
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wallet;
