import React from 'react';

const DetailsEvent = ({ title, description, eventDate, tipoEvent,  idEvent}) => {

    function conectar(idEvent) {
        // dá pra usar a prop idEvent? testar
        alert(`Chamar o recurso para conectar: ${idEvent}`);
    }
    return (
        <article className="event-card">
        <h2 className="event-card__title">{title}</h2>
    
        <p
            className="event-card__description"
            
            data-tooltip-id={idEvent}
            data-tooltip-content={description}
            data-tooltip-place="top"
        >
            <Tooltip id={idEvent} className="tooltip" />
            {description.substr(0, 15)} ...
        </p>

        <p
            className="event-card__description"
            
            data-tooltip-id={idEvent}
            data-tooltip-content={tipoEvent}
            data-tooltip-place="top"
        >
            <Tooltip id={idEvent} className="tooltip" />
            {description.substr(0, 15)} ...
        </p>
    
        <p className="event-card__description">
            {/* aplicar a função pra converter a data */}
            {dateFormatDbToView(eventDate)}
        </p>
    
        <a
            onClick={() => {
            conectar(idEvent);
            }}
            className="event-card__connect-link"
            >
            Conectar
        </a>
        </article>
        );
    };

export default DetailsEvent;