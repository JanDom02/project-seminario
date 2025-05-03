// src/lib/services/candidatos.ts
import { createClient } from '../../../utils/supabase/client';
import { Candidato } from '@/types';

const supabase = createClient();

export const candidatosService = {
  // Obtener candidatos por partido
  async getCandidatosByPartido(partidoId: number): Promise<Candidato[]> {
    const { data, error } = await supabase
      .from('candidatos')
      .select('*')
      .eq('id_partido', partidoId)
      .order('nombre');
    
    if (error) {
      console.error('Error al obtener candidatos:', error);
      throw error;
    }
    
    return data || [];
  },

  // Obtener un candidato por ID
  async getCandidatoById(id: number): Promise<Candidato | null> {
    const { data, error } = await supabase
      .from('candidatos')
      .select('*')
      .eq('id_candidato', id)
      .single();
    
    if (error) {
      console.error('Error al obtener candidato:', error);
      return null;
    }
    
    return data;
  },

  // Obtener candidato por slug (nombre formateado para URL)
  async getCandidatoBySlug(slug: string, partidoId?: number): Promise<Candidato | null> {
    // Convertimos el slug a un posible nombre de candidato
    const nombre = slug.replace(/-/g, ' ');
    
    let query = supabase
      .from('candidatos')
      .select('*')
      .ilike('nombre', `%${nombre}%`);
    
    if (partidoId) {
      query = query.eq('id_partido', partidoId);
    }
    
    const { data, error } = await query.single();
    
    if (error) {
      console.error('Error al obtener candidato por slug:', error);
      return null;
    }
    
    return data;
  },

  // Crear un nuevo candidato
  async createCandidato(candidato: Omit<Candidato, 'id_candidato'>): Promise<Candidato> {
    const { data, error } = await supabase
      .from('candidatos')
      .insert([candidato])
      .select()
      .single();
    
    if (error) {
      console.error('Error al crear candidato:', error);
      throw error;
    }
    
    return data;
  },

  // Actualizar un candidato
  async updateCandidato(id: number, candidato: Partial<Candidato>): Promise<Candidato> {
    const { data, error } = await supabase
      .from('candidatos')
      .update(candidato)
      .eq('id_candidato', id)
      .select()
      .single();
    
    if (error) {
      console.error('Error al actualizar candidato:', error);
      throw error;
    }
    
    return data;
  },

  // Eliminar un candidato
  async deleteCandidato(id: number): Promise<void> {
    const { error } = await supabase
      .from('candidatos')
      .delete()
      .eq('id_candidato', id);
    
    if (error) {
      console.error('Error al eliminar candidato:', error);
      throw error;
    }
  },

  // Obtener candidato por usuario
  async getCandidatoByUsuario(userId: string): Promise<Candidato | null> {
    const { data, error } = await supabase
      .from('candidatos')
      .select('*')
      .eq('id_usuario', userId)
      .single();
    
    if (error) {
      console.error('Error al obtener candidato por usuario:', error);
      return null;
    }
    
    return data;
  },

  // Obtener candidatos por cargo
  async getCandidatosByCargo(cargo: string, partidoId?: number): Promise<Candidato[]> {
    let query = supabase
      .from('candidatos')
      .select('*')
      .eq('cargo_buscado', cargo);
    
    if (partidoId) {
      query = query.eq('id_partido', partidoId);
    }
    
    const { data, error } = await query;
    
    if (error) {
      console.error('Error al obtener candidatos por cargo:', error);
      throw error;
    }
    
    return data || [];
  }
}