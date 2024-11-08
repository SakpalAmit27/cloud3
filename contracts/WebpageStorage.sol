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


        webpages[domain] = WebPage(cid,msg.sender,block.timestamp);
        userWebpages[msg.sender].push(domain); 

        emit WebpageStored(domain,cid,msg.sender,block.timestamp);


         
    } 

    function getWebpage(string memory domain)public view returns(string memory,address,uint256){
        WebPage memory webpage = webpages[domain],
        require(bytes(webpage.cid).length > 0,"Webpage not found");
        return (webpage.cid,webpage.owner,webpage.timestamp);
    }
}