import { MateriaPrima } from './materia-prima';

export interface Produto {
    id: string;
    nome: string;
    descricao: string;

    materiasprimas: MateriaPrima[];
 }