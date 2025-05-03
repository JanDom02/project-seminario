export type Partido = {
    id_partido: number;
    nombre_partido: string;
    logo: string;
  };
  
  export type Candidato = {
    id_candidato: number;
    id_usuario: string;
    id_partido: number;
    nombre: string;
    cargo_buscado: string;
  };
  
  export type Objetivo = {
    id_objetivo: number;
    descripcion: string;
    id_partido?: number;
    id_candidato?: number;
  };
  
  export type Presupuesto = {
    id_presupuesto: number;
    cantidad: number;
    descripcion: string;
    fecha: Date;
    id_partido: number;
    id_candidato?: number;
  };
  
  export type Propuesta = {
    id_propuesta: number;
    id_partido: number;
    id_candidato: number;
    descripcion: string;
    categoria: string;
    presupuesto_necesario: number;
  };
  
  export type Historia = {
    id_historia: number;
    descripcion: string;
    id_partido: number;
    id_candidato?: number;
  };
  
  export type Invitacion = {
    id: number;
    email: string;
    token: string;
    tipo: string;
    id_partido: number;
    usada: boolean;
    fecha_expiracion: Date;
  };
  
  export type Profile = {
    id: string;
    nombre: string;
    rol: string;
    id_partido: number;
    apellido: string;
  };
  
  export type Database = {
    public: {
      Tables: {
        partidos: {
          Row: Partido;
          Insert: Omit<Partido, 'id_partido'>;
          Update: Partial<Partido>;
        };
        candidatos: {
          Row: Candidato;
          Insert: Omit<Candidato, 'id_candidato'>;
          Update: Partial<Candidato>;
        };
        objetivos: {
          Row: Objetivo;
          Insert: Omit<Objetivo, 'id_objetivo'>;
          Update: Partial<Objetivo>;
        };
        presupuestos: {
          Row: Presupuesto;
          Insert: Omit<Presupuesto, 'id_presupuesto'>;
          Update: Partial<Presupuesto>;
        };
        propuestas: {
          Row: Propuesta;
          Insert: Omit<Propuesta, 'id_propuesta'>;
          Update: Partial<Propuesta>;
        };
        historias: {
          Row: Historia;
          Insert: Omit<Historia, 'id_historia'>;
          Update: Partial<Historia>;
        };
        invitaciones: {
          Row: Invitacion;
          Insert: Omit<Invitacion, 'id'>;
          Update: Partial<Invitacion>;
        };
        profiles: {
          Row: Profile;
          Insert: Profile;
          Update: Partial<Profile>;
        };
      };
    };
  };