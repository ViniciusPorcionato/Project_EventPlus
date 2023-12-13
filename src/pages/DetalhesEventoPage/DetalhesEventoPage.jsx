import React from 'react';
import MainContent from '../../components/MainContent/MainContent';
import Container from '../../components/Container/Container';
import Title from "../../components/Title/Title";
import DetailsEvents from "../../components/DetailsEvent/DetailsEvent"

const DetalhesEventoPage = () => {

    return (
        <MainContent>
            <Container>

                <Title titleText={'Detalhes Evento'}/>
                <DetailsEvents
                
                />



            </Container>
        </MainContent>
    );
};

export default DetalhesEventoPage;