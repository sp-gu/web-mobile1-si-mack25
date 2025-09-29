window.onload = function() {
        // MAP
        const produtos = [
            { nome: "Produto 1",
                nomeIMG: "img/bazar-beneficente.png"
            },
            { nome: "Produto 2",
                nomeIMG: "img/bazar-beneficente.png"
            },
            { nome: "Produto 3",
                nomeIMG: "img/bazar-beneficente.png"
            },
            { nome: "Produto 4",
                nomeIMG: "img/bazar-beneficente.png"
            },
            { nome: "Produto 5",
                nomeIMG: "img/bazar-beneficente.png"
            },
            { nome: "Produto 6",
                nomeIMG: "img/bazar-beneficente.png"
            },
            { nome: "Produto 7",
                nomeIMG: "img/bazar-beneficente.png"
            }
        ]
        const table = document.getElementById("produtos");
        produtos.map(produto => {
            let produtoHTML = `<div id="produto">
                                <img src=${produto.nomeIMG} alt="Foto de um produto" srcset="">
                            <h2>${produto.nome}</h2>
                        </div>`;
                table.innerHTML += produtoHTML;
        });
    }