pragma solidity ^0.8.24;


// creating contract // 
contract WebpageStorage{

    struct WebPage{
        string cid; 
        address owner; 
        uint256 timestamp; 

    }

    mapping (string => WebPage) public webpages;
    mapping (address => string[]) public userWebpages;    

    event WebpageStored(string domain,string cid,address owner,uint256 timestamp);



  


}