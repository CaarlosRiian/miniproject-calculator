import "./CalculatorContent.css";

import { useState } from "react";

const Calculator = () => {

    /* Fazendo funcionar a calculadora */
    const [valorTela, setValorTela] = useState('');
    const [resultado, setResultado] = useState(0);
    const [operado, setOperado] = useState(false);

    const Tela = (valor, res) => {
        return (
            <div style={cssTela}>
                <span style={cssTelaOper}>{valor}</span>
                <span style={cssTelaRes}>{res}</span>
            </div>
        )
    }

    // estilos

    const cssTela={
        display: 'flex',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        flexDirection: 'column',
        window: 260
    }

    const cssTelaOper={
        fontSize: 22,
        letterSpacing: 5,
        color: 'black',
        backgroundColor: 'white',
        height: 20,
    }

    const cssTelaRes={
        paddingTop: 5,
        fontSize: 50,
        color: 'black',
        backgroundColor: 'white'
    }

    // FUNÇÕES

    const addDigitoTela = (digit) => {
        if((digit === '+' || digit === '-' || digit ==='*' || digit ==='/') && operado){
            console.log("+-/*")
            setOperado(false)
            setValorTela(resultado + digit)
            return 
        }
        if(operado){
            setValorTela(digit)
            setOperado(false)
            return
        }
        const valorDigitadoTela = valorTela + digit
        setValorTela(valorDigitadoTela)
    }

    const limparMemoria = () => {
        setOperado(false)
        setValorTela('')
        setResultado(0)
        setAcumulador(0)
        return
    }

    const Operacao = (oper) => {
        if (oper === 'bs') {
            let valTela = valorTela;
            valTela = valTela.substring(0, (valTela.length - 1));
            setValorTela(valTela);
            setOperado(false);
            return;
        }
        if (oper === '=') {
            try {
                const r = eval(valorTela); // Cálculo
                setResultado(r);
                setOperado(true);
            } catch {
                setResultado('ERROR');
            }
            return;
        }
        setValorTela(valorTela + oper);
    };

    /* fim do teste */

    return (
        <>
            <div className="calculator-base">
                <div className="result-content">
                    {Tela(valorTela, resultado)}
                    <button className="button-c" onClick={limparMemoria}>C</button>
                    <button className="button-x" onClick={() => addDigitoTela('*')}>X</button>
                    <button className="button-7" onClick={()=> addDigitoTela('7')}>7</button>
                    <button className="button-8" onClick={()=> addDigitoTela('8')}>8</button>
                    <button className="button-9" onClick={() => addDigitoTela('9')}>9</button>
                    <button className="button-divisor" onClick={() => addDigitoTela('/')}>/</button>
                    <button className="button-4" onClick={() => addDigitoTela('4')}>4</button>
                    <button className="button-5" onClick={() => addDigitoTela('5')}>5</button>
                    <button className="button-6" onClick={() => addDigitoTela('6')}>6</button>
                    <button className="button-aless" onClick={() => addDigitoTela('-')}>-</button>
                    <button className="button-1" onClick={() => addDigitoTela('1')}>1</button>
                    <button className="button-2" onClick={() => addDigitoTela('2')}>2</button>
                    <button className="button-3" onClick={() => addDigitoTela('3')}>3</button>
                    <button className="button-more" onClick={() => addDigitoTela('+')}>+</button>
                    <button className="button-0" onClick={() => addDigitoTela('0')}>0</button>
                    <button className="button-point" onClick={() => addDigitoTela('.')}>.</button>
                    <button className="button-result" onClick={() => Operacao('=')}>=</button>

                    <h2 className="logo-calculator">Blade's</h2>
                </div>
            </div>
            <div className="version">
                <h1>Versão 1.0</h1>
            </div>
        </>
    );
};

export default Calculator;