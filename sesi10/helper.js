formatNumber = function (value) {
  const formatter = new Intl.NumberFormat("id-ID");

  return formatter.format(value);
};

exports.formatNumber = formatNumber;
