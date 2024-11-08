import {buildModule} from "@nomicfoundation/hardhat-ignition/modules"

export default buildModule("WebpageStorageModule",(m) => {
    const webpageStorage = m.contract("WebpageStorage");

    return {webpageStorage};
})