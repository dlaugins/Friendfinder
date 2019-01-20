// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
  {
    "name": "Basil",
    "photo": "https://sp.yimg.com/ib/th?id=OIP.RY51CcP-gInUWRMJ-CzZDgHaE8&pid=15.1&rs=1&c=1&qlt=95&w=150&h=100",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    "name": "Nutmeg",
    "photo": "https://sp.yimg.com/ib/th?id=OIP.Rj88SaqLnKUQNzNr_ZzetQHaE3&pid=15.1&rs=1&c=1&qlt=95&w=164&h=108",
    "scores": [
      5,
      1,
      3,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    "name": "Spice",
    "photo": "https://sp.yimg.com/ib/th?id=OIP.b-8e3F1v_SKz7zjHObmNTAHaE8&pid=15.1&rs=1&c=1&qlt=95&w=184&h=123",
    "scores": [
      2,
      1,
      3,
      4,
      3,
      1,
      2,
      5,
      4,
      1
    ]
  },

  {
    "name": "Cinnamon",
    "photo": "https://sp.yimg.com/ib/th?id=OIP.x7qkAxdVTxWGTg5cw4sU_wHaHa&pid=15.1&rs=1&c=1&qlt=95&w=105&h=105",
    "scores": [
      2,
      1,
      3,
      2,
      2,
      1,
      2,
      5,
      3,
      1
    ]
  },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
