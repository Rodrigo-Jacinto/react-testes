import React, { useState } from 'react';



export default function TechList() {

    const [techs, setTechs] = useState([]);
    const [newTech, setNewTech] = useState("");

    function handleClick() {
        setTechs([...techs, newTech]);
        setNewTech("");
    }


    return (

        <form data-testid="form-tech" onSubmit={handleClick}>
            <ul data-testid="tech-list">
                {techs.map(tech => <li key={tech}>{tech}</li>)}
            </ul>
            <label htmlFor="tech">Tech</label>
            <input type="text" id="tech" value={newTech} onChange={e => setNewTech(e.target.value)} />
        </form>
    );

}