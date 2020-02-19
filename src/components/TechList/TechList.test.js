import React from 'react';
import TechList from "./index.js";
import { fireEvent, render } from "@testing-library/react";


// recebe 2 parametros, 
// 1 - Uma string contendo qual componente será testado.
// 2 - uma função de callback, para excutar os testes
describe("TechList Test", () => {


    //recebe 2 parametros
    // 1 - descreve qual parte (específica) será testada do componente 
    it("testando botão adicionar", () => {

        // funções para localizar elementos jsx dentro do component TechList
        const { getByText, getByTestId, debug, getByLabelText } = render(<TechList />)

        //mostra o component TechList (o jsx) naquele exato momento
         debug();

        fireEvent.change(getByLabelText("Tech"), { target: { value: "Node.js" } });
        fireEvent.submit(getByTestId("form-tech"));


        //fireEvent simula a execução de um evento 
        //fireEvent.click(getByText("Adicionar"));
        debug();


        // expect simula oque é esperado de determinado component ou função
        expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
        expect(getByLabelText("Tech")).toHaveValue("")
    })


})
