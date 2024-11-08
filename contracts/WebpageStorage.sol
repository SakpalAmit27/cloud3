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

    function storeWebpages(string memory domain , string memory cid)public{

        // checkinf if domain and cid is not empty 
        require(bytes(domain).length > 0,"Domain cannot be empty"); 
        require(bytes(cid).length > 0,"CID cannot be empty"); 

    }
}