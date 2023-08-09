const os = require('os')
const fs = require('fs')
const path = require("path")
const exists = (filepath) => {
  return new Promise(r=>fs.access(filepath, fs.constants.F_OK, e => r(!e)))
}
module.exports = {
  title: "Audiocraft_Plus",
  description: "Text to audio, open sourced by Meta. Plus adds features: Multiband Diffusion, Custom Model Support, Metadata, Audio Info tab, Mono to Stereo, Multiprompt/Prompt Segmentation with Structure Prompts, Video Output Customization, and Music Continuation",
  icon: "icon.png",
  menu: async (kernel) => {
    let installed = await exists(path.resolve(__dirname, "audiocraft_plus", "env"))
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
