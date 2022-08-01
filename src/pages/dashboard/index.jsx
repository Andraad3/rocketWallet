import { AddIcon, DeleteIcon, EditIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Button, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavBar } from "../../components/navbar";
import { Ativos, CardLista, DivBotao, Main, Opcoes } from "./style";

export default function Dashboard() {

    const [listas, setListas] = useState([
        {
            id: 1,
            nome: "Lista 1",
            ativos: [
                {
                    cod: 'PETR4',
                    valor: 'R$ 4,00',
                }
            ]
        }
    ]);

    const [nomeLista, setNomeLista] = useState('');

    function criarLista() {
        console.log('Entrei', nomeLista);
        setListas([...listas, {
            id: listas.length,
            nome: nomeLista,
            ativos: []
        }]);
    }

    const [modalCriarLista, setModalCriarLista] = useState(false);
    function closeModal() {
        setModalCriarLista(false);
    }

    useEffect(() => {console.log(listas);}, [listas])


    return (
        <>
            <NavBar />

            <Modal onClose={closeModal} isOpen={modalCriarLista} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Criar Lista</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input value={nomeLista} onChange={(e) => setNomeLista(e.target.value)} placeholder='Nome da Lista' />
                    </ModalBody>
                    <ModalFooter style={{ gap: 20 }}>
                        <Button onClick={criarLista}>Salvar</Button>
                        <Button onClick={closeModal}>Fechar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <DivBotao>
                <Button onClick={() => setModalCriarLista(!modalCriarLista)} leftIcon={<SmallAddIcon />} color={'#da8bef'} variant='ghost'>Adiconar Lista</Button>
            </DivBotao>

            <Main>
                {listas.map(lista => (
                    <CardLista>
                        <h1>{lista.nome}</h1>
                        <Ativos>
                            {lista.ativos?.map(ativo => (
                                <div>
                                    <h4>{ativo.cod}</h4>
                                    <span>{ativo.valor}</span>
                                </div>
                            ))}
                        </Ativos>
                        <Opcoes>
                            <IconButton color={'#da8bef'} size="sm" icon={<AddIcon />} />
                            <IconButton color={'#da8bef'} size="sm" icon={<EditIcon />} />
                            <IconButton color={'#da8bef'} size="sm" icon={<DeleteIcon />} />
                        </Opcoes>
                    </CardLista>
                ))}
            </Main>
        </>
    )
}