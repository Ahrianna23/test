import{a as e,j as s,N as m,F as y,T as h}from"./Footer.279eff82.js";import{a as b,R as v}from"./vendor.63235096.js";const t=o=>{var n=o.title.toLowerCase();return e("div",{class:"word-Card animate__animated","data-word":n,"data-category":o.category,"data-verbiage-type":o.verbiage,children:s("p",{children:[e("strong",{children:o.title})," - ",o.text]})})},f=()=>s("div",{className:"content-container ",children:[e("div",{class:"FullWidth-White",children:s("div",{class:"Learn",children:[e(m,{}),s("div",{class:"FAQ",children:[e("h2",{id:"DictionaryHeader",children:" Dictionary"}),s("section",{id:"Dictionary",children:[s("div",{class:"search-container",children:[e("input",{type:"text",placeholder:"Search for a word.",id:"searchInput",onKeyUp:r}),e("button",{type:"submit",onKeyUp:r,children:" Search "})]}),s("div",{class:"animate__animated",id:"no-results",children:[e("p",{id:"no-results-text"}),e("img",{id:"close-no-results",src:"https://herheroism.io/assets/images/icons/search-close-icon.png",onClick:A})]}),e(t,{title:"AF",text:"An abbreviation for 'As F@#k'. Commonly used to express emphasis.",category:"Web3",verbiage:"Slang"}),e(t,{title:"AFAICT",text:"An abbreviation for 'As far as I can tell.'",category:"Web3",verbiage:"Slang"}),e(t,{title:"Airdrop",text:"Coins or Tokens that are sent or transmitted into another wallet. This usually is done without the receiver needing to perform an action to get the coins or tokens.",category:"Web3",verbiage:"Slang"}),e(t,{title:"Alpha",text:"A term from trad-fi also used in crypto, meaning a piece of knowledge that is new or not common knowledge, very often that can give a trader an edge in the market",category:"Web3",verbiage:"Slang"}),e(t,{title:"Alpha-Leak",text:"An apparently accidental statement that gives away or \u201Cleaks\u201D alpha",category:"Web3",verbiage:"Slang"}),e(t,{title:"Altcoin",text:"A term once used for non-Bitcoinn forks in the early days of Bitcoin",category:"Web3",verbiage:"Slang"}),e(t,{title:"Altseason",text:"A term used to describe a period during a bull market in which Bitcoin pumps, leaving the expectation other crypto currencies will see profits from Bitcoins profits.",category:"Web3",verbiage:"Slang"}),e(t,{title:"AMA",text:"an abbreviation that stand for 'Ask Me Anything', commonly used to start a Q&A like on the popular social network Reddit",category:"Web3",verbiage:"Slang"}),e(t,{title:"AMM",text:"an abbreviation that stand for 'Automated Market Maker', they allow for crypto assets to be traded in an automated permissionless way.",category:"Web3",verbiage:"Slang"}),e(t,{title:"Art Block",text:"Art Blocks is a platform leader in Generative Art that works by randomly generating versions of content that is created by an algorithm and sent to a user's Ethereum account",category:"Web3",verbiage:"Offical"}),e(t,{title:"Blockchain",text:"A digitally distributed immutable public ledger that records transactions and tracks digital assets. It is distributed through multiple computers verifying transactions and it is immutable because once a transaction happens, the record cannot be deleted/reversed.",category:"Web3",verbiage:"Offical"}),e(t,{title:"Decentralization",text:"Actions or assets being distributed across different stakeholders \u2014 instead of one person or entity.",category:"Web3",verbiage:"Offical"}),e(t,{title:"MetaMask",text:"a digital wallet to hold assets",category:"Web3",verbiage:"Offical"}),e(t,{title:"NFT",text:"Stands for Non-Fungible Token. NFTs are essentially unique tokens that cannot be copied.",word:"NFT",category:"Web3",verbiage:"Offical"}),e(t,{title:"Node",text:"An entity that owns a complete copy of all transactions on the blockchain.",category:"Web3",verbiage:"Offical"}),e(t,{title:"Smart Contracts",text:"Computer programs that can carry out transactions and agreements between anonymous parties in a reliable and consistent manner, and no retrospective change is possible.",category:"Web3",verbiage:"Offical"}),e(t,{title:"Token",text:"A monetary-valued digital and fungible asset.",category:"Web3",verbiage:"Offical"})]})]})]})}),e("div",{class:"Footer",children:e(y,{})})]});var p=document.getElementsByClassName("word-Card"),u=Array.from(p),_=document.getElementById("searchInput"),a=document.getElementById("no-results");function A(){a.classList.remove("animate__bounceOut"),a.classList.remove("animate__bounceIn"),setTimeout(function(){a.classList.add("animate__bounceOut")},500),setTimeout(function(){a.style.display="none",_.value="",r("closed")},1500)}function r(o){let n=document.getElementById("searchInput").value.toLowerCase();u.forEach(i=>{var l=new String(i.dataset.word).toLowerCase();if(l.indexOf(n)>-1&&n!=""||n==l&&n!="")a.style.display="none",x(i),console.log(n),console.log("1");else if(n==""&&o=="closed"||n==null&&o=="closed")i.classList.add("animate__fadeIn"),i.style.display="flex",document.getElementById("no-results-text").innerHTML="Please enter a value to use search.",a.classList.remove("animate__bounceOut"),a.classList.remove("animate__bounceIn"),a.style.display="none",console.log("2");else if(n==""||n==null)i.classList.add("animate__fadeIn"),i.style.display="flex",document.getElementById("no-results-text").innerHTML="Please enter a value to use search.",a.classList.remove("animate__bounceOut"),a.classList.remove("animate__bounceIn"),a.style.display="block",a.classList.add("animate__bounceIn"),console.log("2");else{const g=d=>(console.log(d.dataset.word+" vs searched: "+n),d.dataset.word!=n);var c=u.every(g);console.log(c),i.style.display="none",c==!0&&(document.getElementById("no-results-text").innerHTML="Hmm. We don't seem to have that, email us to have it added!",a.style.display="block",a.classList.remove("animate__bounceOut"),setTimeout(function(){a.classList.add("animate__bounceIn")},500)),console.log("4")}})}function x(o){o.classList.add("animate__fadeInRight"),o.style.display="flex"}b.render(e(h,{children:e(v.StrictMode,{children:e(f,{})})}),document.getElementById("root"));
