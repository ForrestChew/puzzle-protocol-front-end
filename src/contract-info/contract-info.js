// *WARNING* Any changes to this file will sever the connection to smart contract.
export const contractAddress = '0x408Faa87A96480f0526E06F00Fd7c4fe8516f9DC';

export const contractAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'winner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'wager',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'payout',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountOfGuesses',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'guessAttempts',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'refundOnFlee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'difficulty',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'hasFled',
        type: 'bool',
      },
    ],
    name: 'ChallengeFinished',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'oldOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'NewOwner',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'wager',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'payout',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountOfGuesses',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'refundOnFlee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'difficulty',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isActive',
        type: 'bool',
      },
    ],
    name: 'SChallengeCreation',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newOwner',
        type: 'address',
      },
    ],
    name: 'changeOwnerShip',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_wager',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_payout',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_amountOfGuesses',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_refundOnFlee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_nonce',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_challengeAnswer',
        type: 'string',
      },
      {
        internalType: 'uint8',
        name: '_difficulty',
        type: 'uint8',
      },
    ],
    name: 'createStagnantChallenge',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_challengeId',
        type: 'uint256',
      },
    ],
    name: 'fleeChallenge',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_address',
        type: 'address',
      },
    ],
    name: 'getBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getChallengeIDs',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_challengeId',
        type: 'uint256',
      },
    ],
    name: 'getChallengesById',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'wager',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'payout',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountOfGuesses',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'refundOnFlee',
            type: 'uint256',
          },
          {
            internalType: 'bytes32',
            name: 'answer',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'challenger',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'guessAttempts',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'difficulty',
            type: 'uint8',
          },
        ],
        internalType: 'struct PuzzleProtocol.Challenge',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getTreasury',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_challengeId',
        type: 'uint256',
      },
    ],
    name: 'startChallenge',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_challengeId',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '_guess',
        type: 'string',
      },
    ],
    name: 'submitAnswer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
