var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 17 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 24 },
  { text: "Y el amarillo del Sol iluminaba la esquina", time: 32 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 40 },
  { text: "Ella sabía que él sabía", time: 46 },
  { text: "Que algún día pasaría", time: 47 },
  { text: "Que vendría a buscarla", time: 48 },
  { text: "Con sus flores amarillas", time: 53 },
  { text: "No te apures, no detengas", time: 57 },
  { text: "El instante del encuentro", time: 59 },
  { text: "Está dicho que es un hecho", time: 61 },
  { text: "No la pierdas, no hay derecho", time: 63 },
  { text: "No te olvides que la vida", time: 65 },
  { text: "Casi nunca está dormida", time: 71 },
  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 93 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 100 },
  { text: "Él se acercó de repente la miro tan de frente", time: 108 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 116 },
  { text: "Ella sabía que él sabía", time: 122 },
  { text: "Que algún día pasaría", time: 123 },
  { text: "Que vendría a buscarla", time: 124 },
  { text: "Con sus flores amarillas", time: 128 },
  { text: "No te apures, no detengas", time: 132 },
  { text: "El instante del encuentro", time: 134 },
  { text: "Está dicho que es un hecho", time: 136 },
  { text: "No la pierdas, no hay derecho", time: 138 },
  { text: "No te olvides que la vida", time: 142 },
  { text: "Casi nunca está dormida", time: 148 },
  { text: "Flores amarillas", time: 158 },
  { text: "Ella sabía que él sabía", time: 169 },
  { text: "Que algún día pasaría", time: 171 },
  { text: "Que vendría a buscarla", time: 173 },
  { text: "Con sus flores amarillas", time: 175 },
  { text: "No te apures, no detengas", time: 177 },
  { text: "El instante del encuentro", time: 179 },
  { text: "Está dicho que es un hecho", time: 181 },
  { text: "No la pierdas, no hay derecho", time: 183 },
  { text: "No te olvides que la vida", time: 186 },
  { text: "Casi nunca está dormida", time: 189 },
  { text: "Ella sabía que él sabía", time: 194 },
  { text: "Él sabía, ella sabía", time: 196 },
  { text: "Que él sabía, ella sabía", time: 200 },
  { text: "Y se olvidaron de sus flores amarillas", time: 205 }
];





function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);
