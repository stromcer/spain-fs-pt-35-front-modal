import { firstCardtodo } from "../data/todoCardsData.js";

export const todoCard = `<div class="card mb-5" style="width: 18rem;">
<div class="${firstCardtodo.urgent ? "bg-danger" : '' } card-body">
    <div class="mb-3">  
         <h3>${firstCardtodo.title}</h3>
    </div>
    <div class="mb-3">
        <p>${firstCardtodo.date}</p>
    </div>
    <div class="mb-3">
        <p>${firstCardtodo.description}</p>
    </div>
    <div class="mb-3">
        <div class="btn-group w-100" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-danger">URGENTE</button>
            <button type="button" class="btn btn-success">Hecho</button>
        </div>
    </div>
</div>
</div>`