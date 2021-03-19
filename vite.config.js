const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        comprar: resolve(__dirname, "comprar.html"),
        alugar: resolve(__dirname, "alugar.html"),
        bairros: resolve(__dirname, "bairros.html"),
      },
    },
  },
};
