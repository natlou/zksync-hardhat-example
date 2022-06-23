"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ethers = __importStar(require("ethers"));
var zk = __importStar(require("zksync-web3"));
var hardhat_zksync_deploy_1 = require("@matterlabs/hardhat-zksync-deploy");
// An example of a deploy script which will deploy and call a factory-like contract (meaning that the main contract
// may deploy other contracts).
//
// In terms of presentation it's mostly copied from `001_deploy.ts`, so this example acts more like an integration test
// for plugins/server capabilities.
function default_1(hre) {
    return __awaiter(this, void 0, void 0, function () {
        var testMnemonic, zkWallet, deployer, depositHandle, artifact, factoryContract, contractAddress, greetingFromContract;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Running deploy script for the Factory contract");
                    testMnemonic = 'stuff slice staff easily soup parent arm payment cotton trade scatter struggle';
                    zkWallet = zk.Wallet.fromMnemonic(testMnemonic, "m/44'/60'/0'/0/0");
                    deployer = new hardhat_zksync_deploy_1.Deployer(hre, zkWallet);
                    return [4 /*yield*/, deployer.zkWallet.deposit({
                            to: deployer.zkWallet.address,
                            token: zk.utils.ETH_ADDRESS,
                            amount: ethers.utils.parseEther('0.01'),
                        })];
                case 1:
                    depositHandle = _a.sent();
                    return [4 /*yield*/, depositHandle.wait()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, deployer.loadArtifact('Import')];
                case 3:
                    artifact = _a.sent();
                    return [4 /*yield*/, deployer.deploy(artifact, [])];
                case 4:
                    factoryContract = _a.sent();
                    contractAddress = factoryContract.address;
                    console.log("".concat(artifact.contractName, " was deployed to ").concat(contractAddress, "!"));
                    return [4 /*yield*/, factoryContract.getFooName()];
                case 5:
                    greetingFromContract = _a.sent();
                    if (greetingFromContract == 'Foo') {
                        console.log("Factory contract deployed!");
                    }
                    else {
                        console.error("Contract said something unexpected: ".concat(greetingFromContract));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = default_1;
