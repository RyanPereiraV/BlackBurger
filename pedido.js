let contSalada = 0;
let contBacon = 0;
let contTasty = 0;
let contBurger = 0;
let contDBacon = 0;
let contDTasty = 0;
let contTudao = 0;
let contCheddar = 0;
let contDCheddar = 0;
let contBEgg = 0;

let contFritasP = 0;
let contFritasM = 0;
let contFritasG = 0;
let contFritasGG = 0;

let contCoca = 0;
let contGuarana = 0;
let contFanta = 0;
let contCocaZ = 0;

let contComboPrime = 0;
let contComboDouble = 0;
let contComboBasic = 0;
let contComboTrio = 0;
let contComboLove = 0;
let contComboBest = 0;
let contComboFritas = 0;

let totalpedidos = "";
let valortotal = 0;

let pedidoFinal = "";

/*Verificação de pedidos*/
/***********************************************************/
function verificar() {
    if (contSalada > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contSalada + " Black Salada" + "\n";
        valortotal += 14.80 * contSalada;
    } 
    if (contBacon > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contBacon + " Black Bacon" + "\n"; 
        valortotal += 16.50 * contBacon;
    } 
    if (contTasty > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contTasty + " Black Tasty" + "\n"; 
        valortotal += 17.00 * contTasty;
    } 
    if (contBurger > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contBurger + " Black Burger" + "\n"; 
        valortotal += 10.00 * contBurger;
    } 
    if (contDBacon > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contDBacon + " Black Double Bacon" + "\n"; 
        valortotal += 19.00 * contDBacon;
    } 
    if (contDTasty > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contDTasty + " Black Double Tasty" + "\n"; 
        valortotal += 19.00 * contDTasty;
    } 
    if (contTudao > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contTudao + " Black Tudão" + "\n"; 
        valortotal += 25.00 * contTudao;
    } 
    if (contCheddar > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contCheddar + " Black Cheddar" + "\n";
        valortotal += 12.00 * contCheddar;
    } 
    if (contDCheddar > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contDCheddar + " Black Double Cheddar" + "\n"; 
        valortotal += 20.00 * contDCheddar;
    } 
    if (contBEgg > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contBEgg + " Black Egg" + "\n"; 
        valortotal += 14.80 * contBEgg;
    } 
    if (contFritasP > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contFritasP + " Black Fritas P" + "\n"; 
        valortotal += 7.00 * contFritasP;
    } 
    if (contFritasM > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contFritasM + " Black Fritas M" + "\n"; 
        valortotal += 10.00 * contFritasM;
    } 
    if (contFritasG > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contFritasG + " Black Fritas G" + "\n";
        valortotal += 15.00 * contFritasG;
    } 
    if (contFritasGG > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contFritasGG + " Black Fritas GG" + "\n";
        valortotal += 20.00 * contFritasGG;
    } 
    if (contCoca > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contCoca + " Coca Cola" + "\n";
        valortotal += 6.00 * contCoca;
    } 
    if (contGuarana > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contGuarana + " Guarana" + "\n"; 
        valortotal += 6.00 * contGuarana;
    } 
    if (contFanta > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contFanta + " Fanta" + "\n"; 
        valortotal += 6.00 * contFanta;
    } 
    if (contCocaZ > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contCocaZ + " Coca Cola Zero" + "\n"; 
        valortotal += 6.00 * contCocaZ;
    } 
    if (contComboPrime > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contComboPrime + " Combo Prime" + "\n"; 
        valortotal += 38.00 * contComboPrime;
    } 
    if (contComboDouble > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contComboDouble + " Commbo Double" + "\n"; 
        valortotal += 65.00 * contComboDouble;
    } 
    if (contComboBasic > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contComboBasic + " Combo Basic" + "\n"; 
        valortotal += 20.00 * contComboBasic;
    } 
    if (contComboTrio > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contComboTrio + " Combo Trio" + "\n";
        valortotal += 40.00 * contComboTrio;
    } 
    if (contComboLove > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contComboLove + " Combo Love" + "\n"; 
        valortotal += 70.00 * contComboLove;
    } 
    if (contComboBest > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contComboBest + " Combo Best" + "\n";
        valortotal += 48.00 * contComboBest;
    } 
    if (contComboFritas > 0) {
        totalpedidos += "◆";
        totalpedidos += "\n" + contComboFritas + " Combo Fritas" + "\n";
        valortotal += 20.00 * contComboFritas;
    } 
 }


 /***********************************************************/
/*Combos*/
/*Adicionar Prime*/
function AdicionarComboPrime() {
    contComboPrime++
    document.getElementById("Combo1").innerText = contComboPrime;
}
function RemoverComboPrime() {
    contComboPrime--
    if (contComboPrime < 0) { 
        contComboPrime = 0;
        document.getElementById("Combo1").innerText = 0;
    }
    document.getElementById("Combo1").innerText = contComboPrime;
}

/*Adicionar Double*/
function AdicionarComboDouble() {
    contComboDouble++
    document.getElementById("Combo2").innerText = contComboDouble;
}
function RemoverComboDouble() {
    contComboDouble--
    if (contComboDouble < 0) { 
        contComboDouble = 0;
        document.getElementById("Combo2").innerText = 0;
    }
    document.getElementById("Combo2").innerText = contComboDouble;
}

/*Adicionar Basic*/
function AdicionarComboBasic() {
    contComboBasic++
    document.getElementById("Combo3").innerText = contComboBasic;
}
function RemoverComboBasic() {
    contComboBasic--
    if (contComboBasic < 0) { 
        contComboBasic = 0;
        document.getElementById("Combo3").innerText = 0;
    }
    document.getElementById("Combo3").innerText = contComboBasic;
}

/*Adicionar Trio*/
function AdicionarComboTrio() {
    contComboTrio++
    document.getElementById("Combo4").innerText = contComboTrio;
}
function RemoverComboTrio() {
    contComboTrio--
    if (contComboTrio < 0) { 
        contComboTrio = 0;
        document.getElementById("Combo4").innerText = 0;
    }
    document.getElementById("Combo4").innerText = contComboTrio;
}

/*Adicionar Love*/
function AdicionarComboLove() {
    contComboLove++
    document.getElementById("Combo5").innerText = contComboLove;
}
function RemoverComboLove() {
    contComboLove--
    if (contComboLove < 0) { 
        contComboLove = 0;
        document.getElementById("Combo5").innerText = 0;
    }
    document.getElementById("Combo5").innerText = contComboLove;
}

/*Adicionar Best*/
function AdicionarComboBest() {
    contComboBest++
    document.getElementById("Combo6").innerText = contComboBest;
}
function RemoverComboBest() {
    contComboBest--
    if (contComboBest < 0) { 
        contComboBest = 0;
        document.getElementById("Combo6").innerText = 0;
    }
    document.getElementById("Combo6").innerText = contComboBest;
}

/*Fritas*/
function AdicionarComboFritas() {
    contComboFritas++
    document.getElementById("Combo7").innerText = contComboFritas;
}
function RemoverComboFritas() {
    contComboFritas--
    if (contComboFritas < 0) { 
        contComboFritas = 0;
        document.getElementById("Combo7").innerText = 0;
    }
    document.getElementById("Combo7").innerText = contComboFritas;
}

/***********************************************************/

/*Adicionar salada*/

function AdicionarSalada() {
    contSalada++; 
    document.getElementById("bsalada").innerText = contSalada; 
}
function RemoverSalada() {
    contSalada--
    if (contSalada < 0) { 
        constSalada = 0;
        document.getElementById("bsalada").innerText = 0;
    }
    document.getElementById("bsalada").innerText = contSalada;
}

/*Adicionar bacon*/
function AdicionarBacon() {
    contBacon++
    document.getElementById("bbaccon").innerText = contBacon;
}
function RemoverBacon() {
    contBacon--
    if (contBacon < 0) { 
        contBacon = 0;
        document.getElementById("bbaccon").innerText = 0;
    }
    document.getElementById("bbaccon").innerText = contBacon;
}

/*Adicionar tasty*/
function AdicionarTasty() {
    contTasty++
    document.getElementById("btasty").innerText = contTasty;
}
function RemoverTasty() {
    contTasty--
    if (contTasty < 0) { 
        contTasty = 0;
        document.getElementById("btasty").innerText = 0;
    }
    document.getElementById("btasty").innerText = contTasty;
}

/*Adicionar burger*/
function AdicionarBurger() {
    contBurger++
    document.getElementById("bburger").innerText = contBurger;
}
function RemoverBurger() {
    contBurger--
    if (contBurger < 0) { 
        contBurger = 0;
        document.getElementById("bburger").innerText = 0;
    }
    document.getElementById("bburger").innerText = contBurger;
}

/*Adicionar Doublebacon*/
function AdicionarDBacon() {
    contDBacon++
    document.getElementById("bdbacon").innerText = contDBacon;
}
function RemoverDBacon() {
    contDBacon--
    if (contDBacon < 0) { 
        contDBacon = 0;
        document.getElementById("bdbacon").innerText = 0;
    }
    document.getElementById("bdbacon").innerText = contDBacon;
}

/*Adicionar doubletasty*/
function AdicionarDTasty() {
    contDTasty++
    document.getElementById("bdtasty").innerText = contDTasty;
}
function RemoverDTasty() {
    contDTasty--
    if (contDTasty < 0) { 
        contDTasty = 0;
        document.getElementById("bdtasty").innerText = 0;
    }
    document.getElementById("bdtasty").innerText = contDTasty;
}


/*Adicionar tudao*/
function AdicionarTudao() {
    contTudao++
    document.getElementById("btudao").innerText = contTudao;
}
function RemoverTudao() {
    contTudao--
    if (contTudao < 0) { 
        contTudao = 0;
        document.getElementById("btudao").innerText = 0;
    }
    document.getElementById("btudao").innerText = contTudao;
}

/*Adicionar cheddar*/
function AdicionarCheddar() {
    contCheddar++
    document.getElementById("bmelt").innerText = contCheddar;
}
function RemoverCheddar() {
    contCheddar--
    if (contCheddar < 0) { 
        contCheddar = 0;
        document.getElementById("bmelt").innerText = 0;
    }
    document.getElementById("bmelt").innerText = contCheddar;
}

/*Adicionar DoubleCheddar*/
function AdicionarDCheddar() {
    contDCheddar++
    document.getElementById("bdcheddar").innerText = contDCheddar;
}
function RemoverDCheddar() {
    contDCheddar--
    if (contDCheddar < 0) { 
        contDCheddar = 0;
        document.getElementById("bdcheddar").innerText = 0;
    }
    document.getElementById("bdcheddar").innerText = contDCheddar;
}

/*Adicionar EGG*/
function AdicionarBEgg() {
    contBEgg++
    document.getElementById("bdegg").innerText = contBEgg;
}
function RemoverBEgg() {
    contBEgg--
    if (contBEgg < 0) { 
        contBEgg = 0;
        document.getElementById("bdegg").innerText = 0;
    }
    document.getElementById("bdegg").innerText = contBEgg;
}



/***********************************************************/

/*FRITAS P*/
function AdicionarFritasP() {
    contFritasP++
    document.getElementById("firtasp").innerText = contFritasP;
}
function RemoverFritasP() {
    contFritasP--
    document.getElementById("firtasp").innerText = contFritasP;
}

/*FRITAS M*/
function AdicionarFritasM() {
    contFritasM++
    document.getElementById("firtasm").innerText = contFritasM;
}
function RemoverFritasM() {
    contFritasM--
    document.getElementById("firtasm").innerText = contFritasM;
}

/*FRITAS G*/
function AdicionarFritasG() {
    contFritasG++
    document.getElementById("firtasg").innerText = contFritasG;
}
function RemoverFritasG() {
    contFritasG--
    document.getElementById("firtasg").innerText = contFritasG;
}

/*FRITAS GG*/
function AdicionarFritasGG() {
    contFritasGG++
    document.getElementById("firtasgg").innerText = contFritasGG;
}
function RemoverFritasGG() {
    contFritasGG--
    if (contFritasGG < 0) { 
        contFritasGG = 0;
        document.getElementById("firtasgg").innerText = 0;
    }
    document.getElementById("firtasgg").innerText = contFritasGG;
}


/***********************************************************/

/* COCA*/
function AdicionarCoca() {
    contCoca++
    document.getElementById("refri1").innerText = contCoca;
}
function RemoverCoca() {
    contCoca--
    if (contCoca < 0) { 
        contCoca = 0;
        document.getElementById("refri1").innerText = 0;
    }
    document.getElementById("refri1").innerText = contCoca;
}

/*GUARANA*/
function AdicionarGuarana() {
    contGuarana++
    document.getElementById("refri2").innerText = contGuarana;
}
function RemoverGuarana() {
    contGuarana--
    if (contGuarana < 0) { 
        contGuarana = 0;
        document.getElementById("refri2").innerText = 0;
    }
    document.getElementById("refri2").innerText = contGuarana;
}

/*FANTA LARANJA*/

function AdicionarFanta() {
    contFanta++
    document.getElementById("refri3").innerText = contFanta;
}
function RemoverFanta() {
    contFanta--
    if (contFanta < 0) { 
        contFanta = 0;
        document.getElementById("refri3").innerText = 0;
    }
    document.getElementById("refri3").innerText = contFanta;

}

/*COCA ZERO*/
function AdicionarCocaZ() {
    contCocaZ++
    if (contCocaZ < 0) { 
        contCocaZ == 0;
    }
    document.getElementById("refri4").innerText = contCocaZ;
}
function RemoverCocaZ() {
    contCocaZ--
    if (contCocaZ < 0) { 
        contCocaZ = 0;
        document.getElementById("refri4").innerText = 0;
    }
    document.getElementById("refri4").innerText = contCocaZ;
}

function Limpar() { 
    totalpedidos = "";
}


function fazerPedido() { 
    verificar();
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: true
    });
    swalWithBootstrapButtons.fire({
        title: "Finalizar Pedido?",
        text: totalpedidos + " - Valor: R$" + valortotal, 
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#dc3545",
        confirmButtonText: "Sim, Confirmar!",
        cancelButtonText: "Não, Cancelar!",
        reverseButtons: true
    })
        .then((result) => {
            if (valortotal == 0) {
                swalWithBootstrapButtons.fire({
                    title: "Algo deu errado !",
                    text: "Tente novamente",
                    confirmButtonColor:"#dc3545",
                    icon: "error"
                });
            }

            else if (result.isConfirmed) {
                pedidoFinal = "Pedido:" + totalpedidos + " - Valor: R$" + valortotal;
                swalWithBootstrapButtons.fire({
                    title: "Pedido realizado!",
                    text: "Seu pedido será feito em breve",
                    confirmButtonColor: "#28a745",
                    timer: 4000,
                    timerProgressBar: true,
                    icon: "success"
                });
                totalpedidos = "";  
                valortotal = 0; 
                setTimeout(Enviar(pedidoFinal), 40000);
            Limpar();
        } else if (
            totalpedidos = "",
            valortotal = 0,
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Pedido Cancelado !",
                text: "Escolha outros itens, não deixe de saborear",
                confirmButtonColor:"#dc3545",
                icon: "error"
            });
        }
    });
}


let accumulatedText = "";
function addText(text) {
    accumulatedText += text + "\n";
}

function removeText(text) {   
    const regex = new RegExp(text + '\\n', 'g');
    accumulatedText = accumulatedText.replace(regex, '');
}

function downloadFile() {
    
    const blob = new Blob([accumulatedText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'texto_acumulado.txt'; 

    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
}

function Enviar(recpedidoFinal) {
        var phoneNumber = "5511948205635"; 
        var message = recpedidoFinal; 
        var url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    
        window.open(url, '_blank'); // Abre o WhatsApp em uma nova aba
}