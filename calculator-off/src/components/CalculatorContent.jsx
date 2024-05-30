import "./CalculatorContent.css";

const Calculator = () => {
    return (
        <>
            <div className="calculator-base">
                <div className="result-content">
                    <button className="button-c">C</button>
                    <button className="button-x">X</button>
                    <button className="button-7">7</button>
                    <button className="button-8">8</button>
                    <button className="button-9">9</button>
                    <button className="button-divisor">/</button>
                    <button className="button-4">4</button>
                    <button className="button-5">5</button>
                    <button className="button-6">6</button>
                    <button className="button-aless">-</button>
                    <button className="button-1">1</button>
                    <button className="button-2">2</button>
                    <button className="button-3">3</button>
                    <button className="button-more">+</button>
                    <button className="button-0">0</button>
                    <button className="button-point">.</button>
                    <button className="button-result">=</button>

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