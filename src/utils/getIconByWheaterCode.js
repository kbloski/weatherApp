// export function getIconByWheaterCode( weatherCode ){
//     let icon = "☀️";
    
//  const weatherStatusArr = {
//      clearSky: {
//          codes: [113], 
//          icon: "☀️",
//      },
//      cloudSun: {
//          codes: [116], 
//          icon: "🌥️",
//      },
//      cloud: {
//          codes: [119, 122], 
//          icon: "☁️",
//      },
//      rain: {
//          codes: [176, 179, 182, 185, 200, 201, 202, 205, 206], 
//          icon: "🌧️",
//      },
//      storm: {
//          codes: [227, 230, 231, 232], 
//          icon: "⛈️",
//      },
//      snow: {
//          codes: [248, 260, 266, 281, 284, 293, 296, 299],
//          icon: "🌨️",
//      },
//      tornado: {
//          codes: [600], 
//          icon: "🌪️",
//      },
//      fog: {
//          codes: [143, 248],
//          icon: "🌫️",
//      },
//  };

//  for(const weater in weatherStatusArr){
//     const status = weatherStatusArr[ weater ]

//     if (status.codes.includes( weatherCode )) icon = status.icon;
//  }

//  return icon;
// }