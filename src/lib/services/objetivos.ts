// src/lib/services/objetivos.ts
import { createClient } from '../../../utils/supabase/client';
import { Objetivo } from '@/types';

const supabase = createClient();

export const objetivosService = {
  // Obtener objetivos por partido
  async getObjetivosByPartido(partidoId: number): Promise<Objetivo[]> {
    const { data, error } = await supabase
      .from('objetivos')
      .select('*')
      .eq('id_partido', partidoId);
    
    if (error) {
      console.error('Error al obtener objetivos:', error);
      throw error;
    }
    
    return data || [];
  },

  // Obtener objetivos por candidato
  async getObjetivosByCandidato(candidatoId: number): Promise<Objetivo[]> {
    const { data, error } = await supabase
      .from('objetivos')
      .select('*')
      .eq('id_candidato', candidatoId);
    
    if (error) {
      console.error('Error al obtener objetivos:', error);
      throw error;
    }
    
    return data || [];
  },

  // Crear un nuevo objetivo
  async createObjetivo(objetivo: Omit<Objetivo, 'id_objetivo'>): Promise<Objetivo> {
    const { data, error } = await supabase
      .from('objetivos')
      .insert([objetivo])
      .select()
      .single();
    
    if (error) {
      console.error('Error al crear objetivo:', error);
      throw error;
    }
    
    return data;
  },

  // Crear múltiples objetivos
  async createManyObjetivos(objetivos: Omit<Objetivo, 'id_objetivo'>[]): Promise<Objetivo[]> {
    const { data, error } = await supabase
      .from('objetivos')
      .insert(objetivos)
      .select();
    
    if (error) {
      console.error('Error al crear objetivos:', error);
      throw error;
    }
    
    return data || [];
  },

  // Actualizar un objetivo
  async updateObjetivo(id: number, objetivo: Partial<Objetivo>): Promise<Objetivo> {
    const { data, error } = await supabase
      .from('objetivos')
      .update(objetivo)
      .eq('id_objetivo', id)
      .select()
      .single();
    
    if (error) {
      console.error('Error al actualizar objetivo:', error);
      throw error;
    }
    
    return data;
  },

  // Eliminar un objetivo
  async deleteObjetivo(id: number): Promise<void> {
    const { error } = await supabase
      .from('objetivos')
      .delete()
      .eq('id_objetivo', id);
    
    if (error) {
      console.error('Error al eliminar objetivo:', error);
      throw error;
    }
  },

  // Eliminar objetivos por partido
  async deleteObjetivosByPartido(partidoId: number): Promise<void> {
    const { error } = await supabase
      .from('objetivos')
      .delete()
      .eq('id_partido', partidoId);
    
    if (error) {
      console.error('Error al eliminar objetivos por partido:', error);
      throw error;
    }
  },

  // Eliminar objetivos por candidato
  async deleteObjetivosByCandidato(candidatoId: number): Promise<void> {
    const { error } = await supabase
      .from('objetivos')
      .delete()
      .eq('id_candidato', candidatoId);
    
    if (error) {
      console.error('Error al eliminar objetivos por candidato:', error);
      throw error;
    }
  }
};