window.onload = function() {
        // MAP
        const produtos = [
            { nome: "Produto 1",
                nomeIMG: "img/blusa.jpg"
            },
            { nome: "Produto 2",
                nomeIMG: "img/calca.jpg"
            },
            { nome: "Produto 3",
                nomeIMG: "img/saia.jpeg"
            },
            { nome: "Produto 4",
                nomeIMG: "img/brinco.jpg"
            },
            { nome: "Produto 5",
                nomeIMG: "img/salto.jpg"
            },
            { nome: "Produto 6",
                nomeIMG: "img/colar.jpg"
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