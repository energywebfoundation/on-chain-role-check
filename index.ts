import { utils, providers, BigNumber } from "ethers";
import { ClaimManager__factory, } from "./contracttypes/factories/ClaimManager__factory";

/**
 * The address that you want to check
 */
const didAddressToCheck = "0x09Df5d33f1242E1b8aA5E0E0F6BfA687E6846993";

/**
 * Other config that you might want to change.
 */
const domainToCheck = "user.roles.dsb.apps.szostak.iam.ewc";
const CLAIM_MANAGER_ADDRESS = '0x5339adE9332A604A1c957B9bC1C6eee0Bcf7a031';
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