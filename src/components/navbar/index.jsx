import { ArrowForwardIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Button, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Navegacao } from "./style";

export function NavBar() {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => { setWidth(window.innerWidth); }, false);
    });

    return (
        <Navegacao>
            <h1>RocketWallet</h1>
            {width > 800 ? (
                <Stack direction='row' spacing={4} align='center'>
                    <Button color={'#da8bef'} variant='ghost'>Ações</Button>
                    <Button color={'#da8bef'} variant='ghost'>Fundos Imobiliários</Button>
                    <Button color={'#da8bef'} variant='ghost'>Meus Ativos</Button>
                    <Button color={'#da8bef'} variant='ghost'>Carteira</Button>
                    <Button rightIcon={<ArrowForwardIcon />} color={'#da8bef'} variant='ghost'>Sair</Button>
                </Stack>
            ) : (
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                        color={'#da8bef'}
                    />
                    <MenuList>
                        <MenuItem>Ações</MenuItem>
                        <MenuItem>Fundos Imobiliários</MenuItem>
                        <MenuItem>Meus Ativos</MenuItem>
                        <MenuItem>Carteira</MenuItem>
                        <MenuItem icon={<ArrowForwardIcon />}>Sair</MenuItem>
                    </MenuList>
                </Menu>
            )}
        </Navegacao>
    )
}