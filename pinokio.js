const os = require('os')
const fs = require('fs')
const path = require("path")
const exists = (filepath) => {
  return new Promise(r=>fs.access(filepath, fs.constants.F_OK, e => r(!e)))
}
module.exports = {
  title: "Audiocraft",
  description: "Text to audio, open sourced by Meta",
  icon: "icon.png",
  menu: async (kernel) => {
    let installed = await exists(path.resolve(__dirname, "audiocraft", "env"))
    if (installed) {
      return [{
        html: "<i class='fa-solid fa-play'></i> Run",
        href: "run.json?fullscreen=true&run=true",
      }]
    } else {
      return [{
        html: '<i class="fa-solid fa-plug"></i> Install',
        href: "install.json?run=true&fullscreen=true"
      }]
    }
  }
}
