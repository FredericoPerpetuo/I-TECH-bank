let saldo = 0;
const valor = document.querySelector(".operacoes input");
const btnSaldo = document.querySelector(".btn-saldo");
const btnDeposito = document.querySelector(".btn-deposito");
const btnSaque = document.querySelector(".btn-saque");

function getSaldo() {
  return saldo.toFixed(2);
}

function exibeSaldo() {
  alert(`Saldo = R$ ${getSaldo()}`);
}

function deposita(vlr) {
  vlr = valor.value;
  if (vlr === "" || vlr <= 0) {
    alert("O preenchimento do valor é obrigatório!!!");
  } else {
    saldo += parseFloat(vlr);
    alert("Seu depósito foi realizado com sucesso!");
  }
  valor.value = "";
}

function saca(vlr) {
  vlr = valor.value;
  if (vlr === "" || vlr <= 0) {
    alert("O preenchimento do valor é obrigatório!!!");
  } else if (vlr > saldo) {
    alert(`Limite insuficiente!!!\nSaldo atual = RS ${getSaldo()}`);
  } else {
    saldo -= parseFloat(vlr);
    alert("Seu saque foi realizado com sucesso!");
  }
  valor.value = "";
}

btnSaldo.addEventListener("click", exibeSaldo);
btnDeposito.addEventListener("click", deposita);
btnSaque.addEventListener("click", saca);
