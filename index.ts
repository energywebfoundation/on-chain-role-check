import { utils, providers, BigNumber } from "ethers";
import { ClaimManager__factory, } from "./contracttypes/factories/ClaimManager__factory";

/**
 * The address that you want to check
 */
const didAddressToCheck = "0x5BC3A2dF87F4dDf2e81Ca29f6119920FD056aa58";

/**
 * Other config that you might want to change.
 */
const domainToCheck = "email.roles.verification.apps.energyweb.iam.ewc";
const CLAIM_MANAGER_ADDRESS = '0xC3dD7ED75779b33F5Cfb709E0aB02b71fbFA3210';
const RPC_URL = 'https://volta-rpc.energyweb.org/';


const checkRegistration = async () => {
  const provider = new providers.JsonRpcProvider(RPC_URL);
  const claimManager = ClaimManager__factory.connect(CLAIM_MANAGER_ADDRESS, provider)
  const version = BigNumber.from(1);
  const hasRole = await claimManager.hasRole(didAddressToCheck, utils.namehash(domainToCheck), version);
  console.log(hasRole)
  if (hasRole) {
    console.log("the DID has the role in the ClaimManager contract")
  }
  else {
    console.log("the DID does NOT have the role in the ClaimManager contract")
  }
}

(async () => {
  await checkRegistration()
  console.log('done');
})()