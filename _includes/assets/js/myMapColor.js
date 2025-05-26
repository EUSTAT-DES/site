
function myMapColorFunction(indicatorId, goalId) {
  const colorRanges = [
    ["#FCE9EB", "#F7BDC4", "#F2929D", "#ED6676", "#E83A4F", "#E5243B", "#B71D2F", "#891623", "#5C0E18", "#2E070C"],
    ["#FCF8EB", "#F7E9C2", "#F2DB9A", "#EDCD72", "#E8BE49", "#E5B735", "#CEA530", "#A08025", "#735C1B", "#453710"],
    ["#EDF5EB", "#C9E2C3", "#A6CF9C", "#82BC74", "#5EA94C", "#4C9F38", "#3D7F2D", "#2E5F22", "#1E4016", "#0F200B"],
    ["#F9E8EA", "#EEBAC0", "#E28C96", "#D65E6C", "#CB3042", "#C5192D", "#9E1424", "#760F1B", "#4F0A12", "#270509"],
    ["#FFEBE9", "#FFC4BC", "#FF9D90", "#FF7564", "#FF4E37", "#FF3A21", "#CC2E1A", "#992314", "#66170D", "#330C07"],
    ["#E9F8FB", "#BEEBF6", "#93DEF0", "#67D1EA", "#3CC4E5", "#26BDE2", "#1E97B5", "#177188", "#0F4C5A", "#08262D"],
    ["#FFF9E7", "#FEEDB6", "#FEE185", "#FDD554", "#FCC923", "#FCC30B", "#CA9C09", "#977507", "#654E04", "#322702"],
    ["#F6E8EC", "#E3BAC6", "#D18CA1", "#BE5E7B", "#AB3055", "#A21942", "#821435", "#610F28", "#410A1A", "#20050D"],
    ["#FFF0E9", "#FED2BE", "#FEB492", "#FE9666", "#FD783B", "#FD6925", "#CA541E", "#983F16", "#652A0F", "#331507"],
    ["#FCE7F0", "#F5B8D1", "#EE89B3", "#E75A95", "#E02B76", "#DD1367", "#B10F52", "#850B3E", "#580829", "#2C0415"],
    ["#FFF5E6", "#FEE2B3", "#FECE80", "#FEBA4D", "#FDA71A", "#FD9D00", "#CA7E00", "#985E00", "#653F00", "#331F00"],
    ["#FAF5EA", "#EFE0C0", "#E4CC96", "#D9B86C", "#CEA342", "#C9992D", "#A17A24", "#795C1B", "#503D12", "#281F09"],
    ["#ECF2EC", "#C5D8C7", "#9FBFA2", "#79A57C", "#528B57", "#3F7E44", "#326536", "#264C29", "#19321B", "#0D190E"],
    ["#E7F5FB", "#B6E0F4", "#85CBEC", "#54B6E4", "#23A1DD", "#0A97D9", "#0879AE", "#065B82", "#043C57", "#021E2B"],
    ["#EEF9EA", "#CCECBF", "#ABE095", "#89D36B", "#67C640", "#56C02B", "#459A22", "#34731A", "#224D11", "#112609"],
    ["#E6F0F5", "#B3D2E2", "#80B4CE", "#4D95BA", "#1A77A7", "#00689D", "#00537E", "#003E5E", "#002A3F", "#00151F"],
    ["#E8EDF0", "#BAC8D2", "#8CA4B5", "#5E7F97", "#305A79", "#19486A", "#143A55", "#0F2B40", "#0A1D2A", "#050E15"]
  ];

  // Ajustamos el índice (restamos 1 porque los arrays empiezan en 0)
  const index = goalId - 1;

  // Devolvemos la paleta correspondiente si existe, si no, usamos una por defecto
  if (colorRanges[index]) {
    return colorRanges[index];
  } else {
    return chroma.brewer.BuGn; // paleta por defecto
  }
}
