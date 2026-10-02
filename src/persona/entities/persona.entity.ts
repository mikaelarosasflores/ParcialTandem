import { Preferencias } from '../../preferencias/entities/preferencia.entity.ts';
export class Persona {
    id: number
    alias: string
    activa: boolean
    preferencias: Preferencias;
}
