const ftoc = function(f) 
{
  fTemp = Math.round((f - 32) * (5/9) * 10 )
  fTocelsius = fTemp /10
  return fTocelsius
};

const ctof = function(c) 
{
  var cTemp = Math.round(((c * 9/5) + 32) * 10)
  var ctoFahr = cTemp / 10;
  return ctoFahr
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
